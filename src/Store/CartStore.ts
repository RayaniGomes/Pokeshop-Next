'use client'
import { PokemonDetails } from "@/interfaces";
import { create } from "zustand";

interface ICardStore {
    cart: PokemonDetails[];
    addToCard: (item: PokemonDetails) => void;
    removeFromCard: (id: number) => void;
}
const Pokemons: PokemonDetails[] = [];

export const useCartStore = create<ICardStore>((set) => {
    return {
        cart: [],
        addToCard: (item) => {
            console.log(item);
            set((state) => ({ cart: [...state.cart, item] }))
            console.log(useCartStore.getState().cart);
        },
        removeFromCard: (id) =>
            set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    };
}
);