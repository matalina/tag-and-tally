import type { HexData } from '@/types/map';

// Hexagon drawing constants
export const hexRadius = 40; // Radius of each hexagon
export const hexHeight = Math.sqrt(3) * hexRadius; // Height of a flat-top hexagon
export const hexWidth = Math.sqrt(3) * hexRadius; // Width spacing for edge-sharing flat-top hexagons
export const hexVerticalSpacing = hexHeight * 0.85; // Vertical spacing between rows (reduced for tighter spacing)

// Parse coordinate key to get numeric x, y values
export const parseCoordinate = (key: string): { x: number; y: number } | null => {
  const parts = key.split('.');
  if (parts.length !== 2) return null;
  const x = parseInt(parts[0], 10);
  const y = parseInt(parts[1], 10);
  if (isNaN(x) || isNaN(y)) return null;
  return { x, y };
};

// Get grid bounds from coordinate keys
export const getGridBounds = (hexGridData: Record<string, HexData>) => {
  const keys = Object.keys(hexGridData);
  if (keys.length === 0) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };

  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;

  keys.forEach(key => {
    const coord = parseCoordinate(key);
    if (coord) {
      minX = Math.min(minX, coord.x);
      maxX = Math.max(maxX, coord.x);
      minY = Math.min(minY, coord.y);
      maxY = Math.max(maxY, coord.y);
    }
  });

  return { minX, maxX, minY, maxY };
};

// Get world position of a hex at given coordinates
export const getHexWorldPosition = (
  x: number,
  y: number,
  hexGridData: Record<string, HexData>
): { x: number; y: number } | null => {
  const bounds = getGridBounds(hexGridData);
  const colIndex = x - bounds.minX;
  const rowIndex = y - bounds.minY;

  const worldX = hexRadius + colIndex * hexWidth + (rowIndex % 2 === 1 ? hexWidth / 2 : 0);
  const worldY = hexRadius + rowIndex * hexVerticalSpacing;

  return { x: worldX, y: worldY };
};

// Dynamic terrain color mapping (hash-based for consistent colors)
export const getTerrainColor = (terrain?: string): string => {
  if (!terrain) return '#f0f0f0'; // Default neutral color

  // Simple hash function to generate consistent colors
  let hash = 0;
  for (let i = 0; i < terrain.length; i++) {
    hash = terrain.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate a color from the hash (pastel colors)
  const hue = Math.abs(hash) % 360;
  const saturation = 40 + (Math.abs(hash) % 30); // 40-70%
  const lightness = 70 + (Math.abs(hash) % 20); // 70-90%

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

