export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export class ProductModel {
  private static instance: ProductModel;
  private products: Map<string, Product>;

  private constructor() {
    this.products = new Map();
  }

  public static getInstance(): ProductModel {
    if (!ProductModel.instance) {
      ProductModel.instance = new ProductModel();
    }
    return ProductModel.instance;
  }

  public async createProduct(
    name: string,
    description: string,
    price: number,
    category: string,
    stock: number
  ): Promise<Product> {
    const id = Math.random().toString(36).substring(2, 15);
    const now = new Date();
    
    const product: Product = {
      id,
      name,
      description,
      price,
      category,
      stock,
      createdAt: now,
      updatedAt: now,
    };

    this.products.set(id, product);
    return product;
  }

  public async getProduct(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  public async updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
    const product = this.products.get(id);
    if (!product) return null;

    const updatedProduct = {
      ...product,
      ...updates,
      updatedAt: new Date(),
    };

    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  public async deleteProduct(id: string): Promise<boolean> {
    return this.products.delete(id);
  }

  public async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  public async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.category === category
    );
  }

  public async updateStock(id: string, quantity: number): Promise<Product | null> {
    const product = this.products.get(id);
    if (!product) return null;

    const updatedProduct = {
      ...product,
      stock: Math.max(0, product.stock + quantity),
      updatedAt: new Date(),
    };

    this.products.set(id, updatedProduct);
    return updatedProduct;
  }
}
