'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { Product } from '@/types/product';
import {
  getCartFromStorage,
  saveCartToStorage,
  type CartItem,
} from '@/types/cart';

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  getQuantity: (productId: string) => number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setItems(getCartFromStorage());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    saveCartToStorage(items);
  }, [items, mounted]);

  const addItem = useCallback((product: Product, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) => {
      const i = prev.findIndex((x) => x.product.id === product.id);
      const next = [...prev];
      if (i >= 0) {
        next[i] = { ...next[i], quantity: next[i].quantity + quantity };
      } else {
        next.push({ product, quantity });
      }
      return next;
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((x) => x.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((x) => x.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((x) =>
        x.product.id === productId ? { ...x, quantity } : x
      )
    );
  }, []);

  const getQuantity = useCallback(
    (productId: string) =>
      items.find((x) => x.product.id === productId)?.quantity ?? 0,
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, x) => sum + x.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce((sum, x) => sum + x.product.price * x.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      addItem,
      removeItem,
      updateQuantity,
      getQuantity,
      subtotal,
    }),
    [
      items,
      itemCount,
      addItem,
      removeItem,
      updateQuantity,
      getQuantity,
      subtotal,
    ]
  );

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
