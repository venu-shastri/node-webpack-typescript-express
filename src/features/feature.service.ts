/**
 * Data Model Interfaces
 */
 import { BaseFeature, Feature } from "./feature.interface";
 import { Features } from "./features.interface";
 let features: Features = {
    1: {
      id: 1,
      name: "F1",
      description:"Feature 1"
    },
    2: {
        id: 2,
        name: "F2",
        description:"Feature 2"
      },
      3: {
        id: 3,
        name: "F3",
        description:"Feature 3"
      },
      4: {
        id: 4,
        name: "F4",
        description:"Feature 4"
      }
}
    
export const findAll = async (): Promise<Feature[]> => Object.values(features);

export const find = async (id: number): Promise<Feature> => features[id];

export const create = async (newFeature:BaseFeature): Promise<Feature> => {
    const id = new Date().valueOf();
  
    features[id] = {
      id,
      ...newFeature,
    };
   return features[id];
  };
  export const update = async (id: number,featureUpdate: BaseFeature):Promise<Feature|null> => {return null;};
  
  export const remove = async (id: number): Promise<null | void> => {
    const feature = await find(id);
  
    if (!feature) {
      return null;
    }
  
    delete features[id];
  };