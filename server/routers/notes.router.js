import { Router } from 'express';
import { notesController } from '../controllers';

const notesRouter = Router();

notesRouter.get('/', notesController.get);
notesRouter.post('/', notesController.post);

export default notesRouter;