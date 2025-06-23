import connectDB from '@/backend/config/db';
import Product from '@/backend/models/Product';

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      if (id) {
        // Get by ID
        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        return res.status(200).json(product);
      }

    } catch (err) {
      console.error('GET error:', err);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
