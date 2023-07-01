import { Router } from "express";

import * as musicController from "../controller/music-controller"
import { validateSchemaMiddleware } from "../middlewares/validation";
import musicSchema from "../schemas/music-schema";

const musicRouter = Router()

musicRouter.get('/music', musicController.getMusic);
musicRouter.post('/music', validateSchemaMiddleware(musicSchema), musicController.createMusic);
musicRouter.delete('/music/:id', musicController.deleteMusic);
musicRouter.put('/music/:id', validateSchemaMiddleware(musicSchema), musicController.updateMusic);

export default musicRouter