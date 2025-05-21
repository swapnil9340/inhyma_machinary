
import connectDB from '@/backend/config/db';
import Category from '@/backend/models/Category';
import subcategory  from '@/backend/models/SubCategory';

// Disable Next.js's built-in body parser
export const config = { api: { bodyParser: false } };


  export default async function handler(req, res) {
    await connectDB();
    const { method, query } = req;
    const { id } = query;
  
    try {
      if (method === 'GET') {
        try {
          if (id) {
            const cat = await Category.findById(id)
              .populate({ path: 'subcategory', strictPopulate: false });
            if (!cat) return res.status(404).json({ error: 'Category not found' });
            return res.status(200).json(cat);
          }
  
          const all = await Category.find()
            .sort({ createdAt: -1 })
            .populate({ path: 'subcategory', strictPopulate: false });
          return res.status(200).json(all);
        } catch (error) {
          console.error('GET Category API Error:', error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      }
  
  
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    } catch (err) {
      console.error('Category API Error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
    
  