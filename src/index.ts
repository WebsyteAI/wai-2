import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// Enable CORS
app.use('*', cors());

// GET /test - Test endpoint
app.get('/test', async (c) => {
  return c.json({
    message: 'This is a test endpoint to validate the workflow.'
  });
});

export default app;