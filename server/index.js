import express from 'express';
import bodyParser from 'body-parser';
import rootRouter from './routers';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('hello world!');
});

app.use('/api', rootRouter);

app.listen(PORT);
console.log(`express server listening on port ${3000}`);