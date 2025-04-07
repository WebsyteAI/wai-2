import { Hono } from 'hono';
import { cors } from 'hono/cors';

interface Env {
  DATA_KV: KVNamespace;
}

const app = new Hono<{ Bindings: Env }>();

// Enable CORS
app.use('*', cors());

// POST /data - Add data to KV
app.post('/data', async (c) => {
  try {
    const body = await c.req.json<{ key: string; value: string }>();
    if (!body.key || !body.value) {
      return c.json({ error: 'Key and value are required.' }, 400);
    }

    await c.env.DATA_KV.put(body.key, body.value);
    return c.json({ message: 'Data added successfully.' });
  } catch (error) {
    console.error('Error adding data to KV:', error);
    return c.json({ error: 'Failed to add data to KV.' }, 500);
  }
});

export default app;