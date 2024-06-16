// src/types.ts
export interface Character {
    id: number;
    name: string;
    image: string;
  }
  
  export interface CharacterResponse {
    results: Character[];
  }
  