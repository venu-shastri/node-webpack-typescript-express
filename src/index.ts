/**
 * Required External Modules
 */
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 import { featuresRouter } from "./features/features.router"
 import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

 
 dotenv.config();
/**
 * App Variables section
 */
//  if (!process.env.PORT) {
//     process.exit(1);
//  }
 
 //const PORT: number = parseInt(process.env.PORT as string, 10);

 const PORT=7000;
 
 const app = express();

/**
 *  App Configuration
 */
 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 app.use("/api/featuremesh/features", featuresRouter);
 app.use(errorHandler);
 app.use(notFoundHandler);
/**
 * Server Activation
 */

  if (require.main === module) { // true if file is executed
 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}


  export default app;