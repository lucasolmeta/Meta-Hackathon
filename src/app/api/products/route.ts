import { NextResponse } from 'next/server';
import { ProductModel } from '@/models/productModel';

export async function GET() {
  try {
    const productModel = ProductModel.getInstance();
    const products = await productModel.getAllProducts();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, description, price, category, stock } = await req.json();
    const productModel = ProductModel.getInstance();
    const product = await productModel.createProduct(
      name,
      description,
      price,
      category,
      stock
    );
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
} 