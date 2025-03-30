import { NextResponse } from 'next/server';
import { UserModel } from '@/models/userModel';

export async function GET() {
  try {
    const userModel = UserModel.getInstance();
    const users = await userModel.getAllUsers();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();
    const userModel = UserModel.getInstance();
    const user = await userModel.createUser(name, email);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
} 