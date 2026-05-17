import connectDB from '@/backend/config/db';
import Product from '@/backend/models/Product';
import Category from '@/backend/models/Category';
import '@/backend/models/SubCategory';

const serialize = (doc) => JSON.parse(JSON.stringify(doc));

export async function getAllProducts() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 }).lean();
  return serialize(products);
}

export async function getProductById(id) {
  await connectDB();
  const product = await Product.findById(id).lean();
  return product ? serialize(product) : null;
}

export async function getProductByName(name) {
  await connectDB();
  const product = await Product.findOne({ name }).lean();
  return product ? serialize(product) : null;
}

export async function getAllCategories() {
  await connectDB();
  const cats = await Category.find()
    .sort({ createdAt: -1 })
    .populate({ path: 'subcategory', strictPopulate: false })
    .lean();
  return serialize(cats);
}
