import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { Toaster } from '@/components/ui/sonner'
import './index.css'
import Index from './pages/Index'
import CartPage from './pages/CartPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
