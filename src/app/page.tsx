import React from 'react';
import Chat from '@/components/Chat';
import UserList from '@/components/UserList';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">AI Chat Assistant</h1>
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Chat Interface</h2>
            <Chat />
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <UserList />
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ProductList />
          </section>
        </div>
      </div>
    </main>
  );
} 