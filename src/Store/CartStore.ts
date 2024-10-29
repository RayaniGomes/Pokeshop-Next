'use client'
import { PokemonDetails } from "@/interfaces";
import { stat } from "fs";
import { create } from "zustand";

interface ICardStore {
    cart: ItemCart[];
    count: number;
    addToCart: (item: PokemonDetails) => void;
    removeFromCart: (id: number) => void;
    inc: () => void;
    dec: () => void;
    price: number;
    incPrice: (id: number) => void;
    decPrice: (id: number) => void;
    setCart: () => void
    setLocalStorage: () => void
}

interface ItemCart {
    id: number;
    quantity: number;
    pokemon: PokemonDetails;
    price: number
}

export const useCartStore = create<ICardStore>((set) => {
    return {
        cart: [],
        count: 0,
        price: 0,

        setCart: () => {
            const cart = localStorage.getItem('cart');
            const price = localStorage.getItem('price');
            const count = localStorage.getItem('count');

            if (cart) {
                set((state) => ({ cart: JSON.parse(cart) }))
            }else{
                set((state) => ({ cart: [] }))
            }

            if (price) {
                set((state) => ({ price: JSON.parse(price) }))
            }else{
                set((state) => ({ price: 0 }))
            }

            if (count) {
                set((state) => ({ count: JSON.parse(count) }))
            }else{
                set((state) => ({ count: 0 }))
            }
        },

        setLocalStorage: () => {
            localStorage.setItem('cart', JSON.stringify(useCartStore.getState().cart))
            localStorage.setItem('price', JSON.stringify(useCartStore.getState().price))
            localStorage.setItem('count', JSON.stringify(useCartStore.getState().count))
        },

        addToCart: (item) => {
            console.log(item);
            const itemInCart = useCartStore.getState().cart.find((itemCart) => itemCart.id === item.id);

            if (itemInCart) {
                itemInCart.quantity += 1;
                itemInCart.price += itemInCart.pokemon.valorOriginal;
                set((state) => ({ price: state.price + itemInCart.pokemon.valorOriginal }))
            }else{
                set((state) => ({ cart: [...state.cart, { id: item.id, quantity: 1, price: item.valorOriginal, pokemon: item }] }))
                console.log(useCartStore.getState().cart);
                set((state) => ({ price: state.price + item.valorOriginal }))
            }

            useCartStore.getState().setLocalStorage();
        },

        removeFromCart: (id) => {
            const item = useCartStore.getState().cart.find((item) => item.id === id) ?? {pokemon: { valorOriginal: 0}, quantity: 1};
            set((state) => ({ price: state.price - (item.quantity * item.pokemon.valorOriginal) }))
            set((state) => ({ count: state.count - item.quantity }))
            set((state) => ({ cart: state.cart.filter((item) => item.id !== id) }))

            useCartStore.getState().setLocalStorage();
        },

        incPrice: (id: number) => {
            const item = useCartStore.getState().cart[id];
            item.quantity += 1;
            item.price += item.pokemon.valorOriginal;
            set((state) => ({ price: state.price + item.pokemon.valorOriginal }))
            set((state) => ({ count: state.count + 1 }))

            useCartStore.getState().setLocalStorage();
        },

        decPrice: (id: number) => {
            const item = useCartStore.getState().cart[id];
            item.quantity -= 1;
            item.price -= item.pokemon.valorOriginal;
            set((state) => ({ price: state.price - item.pokemon.valorOriginal }))
            set((state) => ({ count: state.count - 1 }))

            useCartStore.getState().setLocalStorage();
        },

        inc: () => {
            set((state) => ({ count: state.count + 1 }))

            useCartStore.getState().setLocalStorage();
        },

        dec: () => {
            set((state) => ({ count: state.count - 1 }))
            useCartStore.getState().setLocalStorage();
        }
    };
});