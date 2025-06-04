import connectDB from '@/backend/config/db';
import Product from '@/backend/models/Product';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    const { q } = req.query;

    if (!q || q.trim() === '') {
      return res.status(400).json({ error: 'Search query is required' });
    }

    try {
      // Case-insensitive, partial match on 'name' or 'description'
      const searchRegex = new RegExp(q, 'i');

      const products = await Product.find({
        $or: [
          { name: { $regex: searchRegex } },
          { description: { $regex: searchRegex } },
        ],
      });

      return res.status(200).json(products);
    } catch (err) {
      console.error('Search error:', err);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
