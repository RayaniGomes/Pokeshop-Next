'use client'
import { PokemonDetails } from "@/interfaces";
import { create } from "zustand";

interface ICardStore {
    card: PokemonDetails[];
    addToCard: (item: PokemonDetails) => void;
    removeFromCard: (id: number) => void;
}
const Pokemons: PokemonDetails[] = [];

export const useCardStore = create<ICardStore>((set) => {
    return {
        card: [],
        addToCard: (item) => {
            console.log(item);
            set((state) => ({ card: [...state.card, item] }))
            console.log(useCardStore.getState().card);
        },
        removeFromCard: (id) => 
            set((state) => ({ card: state.card.filter((item) => item.id !== id) })),
        };
    }   
);