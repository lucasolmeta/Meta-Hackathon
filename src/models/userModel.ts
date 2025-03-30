export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  lastLogin: Date;
}

export class UserModel {
  private static instance: UserModel;
  private users: Map<string, User>;

  private constructor() {
    this.users = new Map();
  }

  public static getInstance(): UserModel {
    if (!UserModel.instance) {
      UserModel.instance = new UserModel();
    }
    return UserModel.instance;
  }

  public async createUser(name: string, email: string): Promise<User> {
    const id = Math.random().toString(36).substring(2, 15);
    const now = new Date();
    
    const user: User = {
      id,
      name,
      email,
      createdAt: now,
      lastLogin: now,
    };

    this.users.set(id, user);
    return user;
  }

  public async getUser(id: string): Promise<User | null> {
    return this.users.get(id) || null;
  }

  public async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    const user = this.users.get(id);
    if (!user) return null;

    const updatedUser = {
      ...user,
      ...updates,
      lastLogin: new Date(),
    };

    this.users.set(id, updatedUser);
    return updatedUser;
  }

  public async deleteUser(id: string): Promise<boolean> {
    return this.users.delete(id);
  }

  public async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }
}
