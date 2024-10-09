'use client';
import { PaginationContainer } from "./styled";

interface PropsPagination {
    currentPage: number;
    totalPages: number;
    pageClick: (direction: string) => void;
}

export const Pagination = ({ currentPage, totalPages, pageClick }: PropsPagination) => {
    return (
        <PaginationContainer className="pagination-conttext-center">
            <button onClick={() => pageClick('prev')} disabled={currentPage === 1}>
                <i className="bi bi-chevron-double-left" />
            </button>
            <span> Página {currentPage} de {totalPages} </span>
            <button onClick={() => pageClick('next')} disabled={currentPage === totalPages}>
                <i className="bi bi-chevron-double-right" />
            </button>
        </PaginationContainer>
    );
}