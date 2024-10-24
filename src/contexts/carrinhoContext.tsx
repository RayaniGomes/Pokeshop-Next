'use client'
import { createContext, useState } from "react";

interface CarrinhoContextProps {
    children: React.ReactNode
}

interface CarrinhoContextType {
    isOpenModal: boolean,
    setIsOpenModal: (newState: boolean) => void,
 
}

const initValue = {
    isOpenModal: false,
    setIsOpenModal: () => {},
}

export const CarrinhoContext = createContext<CarrinhoContextType>(initValue);

export const CarrinhoProvider = ({ children }: CarrinhoContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(initValue.isOpenModal);

    return (
        <CarrinhoContext.Provider value={{isOpenModal, setIsOpenModal}}>
            {children}
        </CarrinhoContext.Provider>
    )
};