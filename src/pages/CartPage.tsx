import { Header } from '@/components/Header';
import { Cart } from '@/components/Cart';
import { Footer } from '@/components/Footer';
import { useState } from 'react';

const CartPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main className="flex-1">
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;