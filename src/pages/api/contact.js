import connectDB from '@/backend/config/db';
import Contact from '@/backend/models/Contact';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { fullName, companyName, email, phone, message } = req.body;

    try {
      const newContact = new Contact({
        fullName,
        companyName,
        email,
        phone,
        message,
      });

      await newContact.save();
      return res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error saving contact:', error);
      return res.status(500).json({ success: false, message: 'Server error' });
    }
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
