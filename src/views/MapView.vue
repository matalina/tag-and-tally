<script setup lang="ts">
import type { HexData } from '@/types/map';
import { ref, onMounted, watch, nextTick } from 'vue';
import {
  hexRadius,
  hexWidth,
  hexVerticalSpacing,
  parseCoordinate,
  getGridBounds,
  getHexWorldPosition,
  getTerrainColor
} from '@/utils/hexMap';
import { terrain } from '@/data/tables/settings/fantasy';
import { urbanDistrict } from '@/data/tables/settings/modern';

// LocalStorage key for hex grid data
const STORAGE_KEY = 'hexGridData';

const genreOptions = {
  'Fantasy': terrain,
  'Modern': urbanDistrict
}

const selectedGenre = ref('Fantasy');

// Load hex grid data from localStorage
const loadHexGridData = (): Record<string, HexData> | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed;
    }
  } catch (error) {
    console.error('Error loading hex grid data from localStorage:', error);
  }
  return null;
};

// Save hex grid data to localStorage
const saveHexGridData = (data: Record<string, HexData>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving hex grid data to localStorage:', error);
  }
};

// Initialize hex grid data from localStorage or default
const hexGridData = ref<Record<string, HexData> | null>(loadHexGridData());

const canvasRef = ref<HTMLCanvasElement | null>(null);

// Canvas display size (can be adjusted)
const canvasDisplayWidth = ref(800);
const canvasDisplayHeight = ref(600);

// Pan offset (for dragging the map)
const panOffset = ref({ x: 0, y: 0 });
const isPanning = ref(false);
const panStart = ref({ x: 0, y: 0 });
const mouseDownPos = ref({ x: 0, y: 0 });
const dragThreshold = 5; // pixels to move before considering it a drag

// Modal state
const showModal = ref(false);
const selectedHex = ref<HexData | null>(null);
const selectedHexKey = ref<string>('');


// Center the view on a specific hex coordinate
const centerOnHex = (x: number, y: number) => {
  if (!hexGridData.value) {
    // If map is empty, just center at origin
    panOffset.value = {
      x: canvasDisplayWidth.value / 2,
      y: canvasDisplayHeight.value / 2
    };
    drawHexGrid();
    return;
  }

  const pos = getHexWorldPosition(x, y, hexGridData.value);
  if (!pos) return;

  // Center the hex in the viewport
  panOffset.value = {
    x: canvasDisplayWidth.value / 2 - pos.x,
    y: canvasDisplayHeight.value / 2 - pos.y
  };
  drawHexGrid();
};

// Draw the hex grid
const drawHexGrid = () => {
  const canvas = canvasRef.value;
  if (!canvas) {
    console.warn('Canvas ref is not available');
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.warn('Could not get 2d context');
    return;
  }

  // Set canvas internal size to match display size
  canvas.width = canvasDisplayWidth.value;
  canvas.height = canvasDisplayHeight.value;

  // Clear the canvas with a light background
  ctx.fillStyle = '#f9f9f9';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // If no hex data, just show empty canvas
  if (!hexGridData.value) {
    return;
  }

  // Save context and apply pan transform
  ctx.save();
  ctx.translate(panOffset.value.x, panOffset.value.y);

  // Get grid bounds to calculate positions
  const bounds = getGridBounds(hexGridData.value);

  // Draw hexagons
  Object.entries(hexGridData.value).forEach(([key, hexData]) => {
    const coord = parseCoordinate(key);
    if (!coord) return;

    // Calculate grid position relative to bounds
    const colIndex = coord.x - bounds.minX;
    const rowIndex = coord.y - bounds.minY;

    // Calculate center position of hexagon
    // For flat-top hexagons, odd rows are offset horizontally
    const x = hexRadius + colIndex * hexWidth + (rowIndex % 2 === 1 ? hexWidth / 2 : 0);
    const y = hexRadius + rowIndex * hexVerticalSpacing;

    drawHex(ctx, x, y, hexData);
  });

  // Restore context
  ctx.restore();
};

// Find hex at canvas position
const getHexAtPosition = (canvasX: number, canvasY: number): { key: string; data: HexData } | null => {
  if (!hexGridData.value) return null;

  // Convert canvas coordinates to world coordinates (accounting for pan)
  const worldX = canvasX - panOffset.value.x;
  const worldY = canvasY - panOffset.value.y;

  const bounds = getGridBounds(hexGridData.value);

  // Calculate which hex this position is in
  // For flat-top hexagons, we need to account for the offset pattern
  const approxCol = Math.round((worldX - hexRadius) / hexWidth);
  const approxRow = Math.round((worldY - hexRadius) / hexVerticalSpacing);

  // Check nearby hex positions (within 2 hexes)
  for (let rowOffset = -2; rowOffset <= 2; rowOffset++) {
    for (let colOffset = -2; colOffset <= 2; colOffset++) {
      const testRow = approxRow + rowOffset;
      const testCol = approxCol + colOffset;

      const testX = bounds.minX + testCol;
      const testY = bounds.minY + testRow;
      const key = `${testX.toString().padStart(3, '0')}.${testY.toString().padStart(3, '0')}`;

      if (hexGridData.value[key]) {
        // Calculate hex center position
        const colIndex = testCol;
        const rowIndex = testRow;
        const hexX = hexRadius + colIndex * hexWidth + (rowIndex % 2 === 1 ? hexWidth / 2 : 0);
        const hexY = hexRadius + rowIndex * hexVerticalSpacing;

        // Check if point is inside hexagon
        const dx = worldX - hexX;
        const dy = worldY - hexY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= hexRadius) {
          return { key, data: hexGridData.value[key] };
        }
      }
    }
  }

  return null;
};

// Panning handlers
const handleMouseDown = (e: MouseEvent) => {
  if (!canvasRef.value) return;

  mouseDownPos.value = {
    x: e.clientX,
    y: e.clientY
  };

  panStart.value = {
    x: e.clientX - panOffset.value.x,
    y: e.clientY - panOffset.value.y
  };

  isPanning.value = true;
  canvasRef.value.style.cursor = 'grabbing';
};

const handleMouseMove = (e: MouseEvent) => {
  if (!isPanning.value || !canvasRef.value) return;

  // Check if this is a drag (mouse moved beyond threshold)
  const dx = e.clientX - mouseDownPos.value.x;
  const dy = e.clientY - mouseDownPos.value.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance > dragThreshold) {
    // It's a drag, update pan
    panOffset.value = {
      x: e.clientX - panStart.value.x,
      y: e.clientY - panStart.value.y
    };
    drawHexGrid();
  }
};

const handleMouseUp = (e: MouseEvent) => {
  if (!isPanning.value || !canvasRef.value) return;

  // Check if this was a click (not a drag)
  const dx = e.clientX - mouseDownPos.value.x;
  const dy = e.clientY - mouseDownPos.value.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance <= dragThreshold) {
    // It's a click, find hex and show modal
    const rect = canvasRef.value.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;

    const hex = getHexAtPosition(canvasX, canvasY);
    if (hex && hex.data.note) {
      selectedHex.value = hex.data;
      selectedHexKey.value = hex.key;
      showModal.value = true;
    }
  }

  isPanning.value = false;
  canvasRef.value.style.cursor = 'grab';
};

const handleMouseLeave = () => {
  isPanning.value = false;
  if (canvasRef.value) {
    canvasRef.value.style.cursor = 'grab';
  }
};

const closeModal = () => {
  showModal.value = false;
  selectedHex.value = null;
  selectedHexKey.value = '';
};

// Draw a single hexagon (flat-top orientation)
const drawHex = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, hexData: HexData) => {
  ctx.beginPath();
  // For flat-top hexagons, start at the top (angle = -π/2) and go clockwise
  for (let i = 0; i < 6; i++) {
    // Start at top (-π/2) and rotate clockwise
    const angle = (Math.PI / 3 * i) - (Math.PI / 2);
    const xOffset = centerX + hexRadius * Math.cos(angle);
    const yOffset = centerY + hexRadius * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(xOffset, yOffset);
    } else {
      ctx.lineTo(xOffset, yOffset);
    }
  }
  ctx.closePath();

  // Fill with terrain color
  ctx.fillStyle = getTerrainColor(hexData.terrain);
  ctx.fill();

  // Draw border
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw POI letter if present
  if (hexData.poi && hexData.poi !== '') {
    ctx.fillStyle = 'black';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(hexData.poi, centerX, centerY);
  }
};

const newMap = () => {
  hexGridData.value = null;
  drawHexGrid();
};

// Watch for changes in the grid data and redraw, and save to localStorage
watch(hexGridData, (newData) => {
  drawHexGrid();
  if (newData) {
    saveHexGridData(newData);
  } else {
    // Clear localStorage when map is empty
    localStorage.removeItem(STORAGE_KEY);
  }
}, { deep: true });
watch([canvasDisplayWidth, canvasDisplayHeight], drawHexGrid);

// Initialize the canvas on mount
onMounted(async () => {
  console.log('MapView mounted');
  console.log('Canvas ref:', canvasRef.value);
  console.log('Hex grid data:', hexGridData.value);

  // Wait for DOM to be fully updated
  await nextTick();

  console.log('After nextTick - Canvas ref:', canvasRef.value);

  // Center on the middle of the coordinate system (500.500) if there's data
  if (hexGridData.value) {
    centerOnHex(500, 500);
  } else {
    // Otherwise just center the view at origin
    panOffset.value = {
      x: canvasDisplayWidth.value / 2,
      y: canvasDisplayHeight.value / 2
    };
    drawHexGrid();
  }
  if (canvasRef.value) {
    canvasRef.value.style.cursor = 'grab';
    console.log('Canvas dimensions:', canvasRef.value.width, 'x', canvasRef.value.height);
  } else {
    console.error('Canvas ref is null after mount!');
  }
});
</script>

<template>
  <div class="map-container">
    <h1>Map View</h1>
    <div class="controls">
      <!--button @click="loadData">Load Data</button-->
      <!--<button @click="saveData">Save Data</button>-->
      <select v-model="selectedGenre">
        <option v-for="genre in Object.keys(genreOptions)" :value="genre" :key="genre">{{ genre }}</option>
      </select>
      <button @click="newMap">New Map</button>
      <!--<button @click="moveHex">Move To Hex</button>-->
      <!--<button @click="exportMap">Export Map</button>-->
    </div>
    <canvas
      ref="canvasRef"
      :width="canvasDisplayWidth"
      :height="canvasDisplayHeight"
      @mousedown="handleMouseDown"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseUp"
      @mouseleave="handleMouseLeave"
    ></canvas>

    <!-- Modal for displaying hex notes -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>Hex {{ selectedHexKey }}</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <div v-if="selectedHex" class="hex-info">
            <p v-if="selectedHex.terrain"><strong>Terrain:</strong> {{ selectedHex.terrain }}</p>
            <p v-if="selectedHex.poi"><strong>POI:</strong> {{ selectedHex.poi }}</p>
            <p v-if="selectedHex.note" class="note-text">{{ selectedHex.note }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.controls {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.controls input {
  width: 100px;
  padding: 0.25rem;
}

canvas {
  display: block;
  border: 1px solid #ccc;
  cursor: grab;
  user-select: none;
  background-color: #f9f9f9;
}

canvas:active {
  cursor: grabbing;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 0;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f5f5f5;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}

.modal-close:hover {
  background-color: #e0e0e0;
  color: #333;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
}

.hex-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hex-info p {
  margin: 0;
}

.note-text {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
