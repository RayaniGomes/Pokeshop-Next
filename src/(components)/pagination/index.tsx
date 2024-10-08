'use client';

import { Pokemon, PokemonDetails } from "@/interfaces";
import api from "@/service/api";
import { useEffect, useState } from "react";

interface PropsPagination {
    currentPage: number;
    totalPages: number;
    pageClick: (direction: string) => void;
}

export const Pagination = ({ currentPage, totalPages, pageClick }: PropsPagination) => {
    return (
        <div className="pagination-conttext-center">
            <button onClick={() => pageClick('prev')} disabled={currentPage === 1}>Prev</button>
            <span> Página {currentPage} de {totalPages} </span>
            <button onClick={() => pageClick('next')} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
}