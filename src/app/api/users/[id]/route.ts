import { NextResponse } from 'next/server';
import { UserModel } from '@/models/userModel';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userModel = UserModel.getInstance();
    const user = await userModel.getUser(params.id);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updates = await req.json();
    const userModel = UserModel.getInstance();
    const user = await userModel.updateUser(params.id, updates);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userModel = UserModel.getInstance();
    const success = await userModel.deleteUser(params.id);
    if (!success) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
} 