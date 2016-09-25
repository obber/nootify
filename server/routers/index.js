import { Router } from 'express';
import notesRouter from './notes.router';

const rootRouter = Router();

rootRouter.use('/notes', notesRouter);

export default rootRouter