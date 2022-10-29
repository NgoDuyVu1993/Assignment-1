import express from 'express';
import { Router } from 'express';
import routes from './routes';

const app = express();
const port = 4000;

app.use('/api', routes);

app.listen(port, () => {
    console.log(`The local Server started at http://localhost:${port}`);
});

export default app;