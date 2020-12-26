import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);
const port = process.env.PORT || process.env.port || 3333;

app.listen(port, () => {
  console.log(`🚀 Server is running in ${port}`);
});
