export interface User {
  name: string
  email: string
  picture: string
  sub: string
}

export interface RandomTable {
  name: string;
  formula: string;
  table: TableOption[];
}

export interface TableOption {
  min: number | null;
  max: number | null;
  value: string | RandomFunction;
}

export type RandomFunction =(table: RandomTable) => string;
