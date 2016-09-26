import { Note } from '../models';
import { omit } from 'lodash';

const notesController = {};

notesController.get = async (req, res) => {
  try {
    const results = await Note.findAll();
    res.json({
      success: true,
      results: results.map(entry => omit(entry.toJSON(), 'id'))
        .sort((a, b) => (a.createdAt < b.createdAt ? 1: -1))
    });
  } catch (e) {
    res.json({
      success: false,
      response: e.toString()
    });
  }
};

notesController.post = async (req, res) => {
  const { title, content } = req.body;
  try {
    if (!title || !content) {
      throw new Error(`invalid parameters to POST request, please send a 'title' and 'content' property`);
    }
    const result = await Note.create({ title, content });
    res.json({
      success: true,
      response: result
    });
  } catch (e) {
    console.log('e = ', e);
    res.json({
      success: false,
      response: e.toString()
    });
  }
};

export default notesController;