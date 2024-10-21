'use client'
import CarrosselTypes from "@/(components)/carrosselTypes";
import HeaderHome from "@/(components)/headerHome";
import Navbar from "@/(components)/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeaderHome />
            <CarrosselTypes />
        </>
    )
}