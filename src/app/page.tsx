'use client'
import { useCartStore } from '@/Store/CartStore';
import Home from './home/page';

export default function Rote() {
  const { setCart } = useCartStore();

  return (
    <div>
        <Home />
    </div>
  );
}
