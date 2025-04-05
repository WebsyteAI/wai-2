import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// Enable CORS
app.use('*', cors());

// GET /quotes - Fetch a random quote
app.get('/quotes', async (c) => {
  return c.json({
    message: 'This is a placeholder. KV bindings have been removed.'
  });
});

export default app;