import { NextResponse } from 'next/server';
import { ProductModel } from '@/models/productModel';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { quantity } = await req.json();
    const productModel = ProductModel.getInstance();
    const product = await productModel.updateStock(params.id, quantity);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product stock' }, { status: 500 });
  }
} 