export interface HexData {
  xAxis: string;  // "000" to "999"
  yAxis: string;  // "000" to "999"
  terrain?: string;  // e.g., "grass", "water", "forest"
  poi?: string;     // single letter representing point of interest
  note?: string;     // displayed in modal when clicked
}
