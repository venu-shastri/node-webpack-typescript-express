export interface BaseFeature {
    name: string;
    description: string;
    
  }
  
  export interface Feature extends BaseFeature {
    id: number;
  }