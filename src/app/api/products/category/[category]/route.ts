import { NextResponse } from 'next/server';
import { ProductModel } from '@/models/productModel';

export async function GET(
  req: Request,
  { params }: { params: { category: string } }
) {
  try {
    const productModel = ProductModel.getInstance();
    const products = await productModel.getProductsByCategory(params.category);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products by category' }, { status: 500 });
  }
} 