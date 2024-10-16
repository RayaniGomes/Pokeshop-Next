import { PaginationContainer } from "./styled";

interface PropsPagination {
    currentPage: number;
    totalPages: number;
    pageClick: (direction: string) => void;
}

export const Pagination = ({ currentPage, totalPages, pageClick }: PropsPagination) => {
    return (
        <PaginationContainer className="pagination-conttext-center">
            <button onClick={() => pageClick('prev')} disabled={currentPage === 1} className="bi bi-chevron-double-left" />
            <span> Página {currentPage} de {totalPages} </span>
            <button onClick={() => pageClick('next')} disabled={currentPage === totalPages} className="bi bi-chevron-double-right" />

        </PaginationContainer>
    );
}