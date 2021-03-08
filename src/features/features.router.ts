/**
 * Required External Modules and Interfaces
 */
 import express, { Request, Response } from "express";
 import * as FeatureService from "./feature.service"
import { BaseFeature, Feature} from "./feature.interface";
/**
 * Router Definition
 */
 export const featuresRouter = express.Router();

/**
 * Controller Definitions
 */

// GET features
featuresRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Feature[] = await FeatureService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
// GET features/:id

// POST features

// PUT features/:id

// DELETE features/:id