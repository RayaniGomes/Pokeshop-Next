'use client'
import Image from "next/image";
import { Embla, EmblaButtons, EmblaContainer, Icones } from "./styled";
import { types } from "@/data/helps";
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'


interface PokemonTypesProps {
    func: (value: string) => void;
}

export default function PokemonTypes({ func }: PokemonTypesProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section>
            <Icones>
                {types.map((type) => (
                    <button
                        key={type.id}
                        onClick={() => func(type.name)}
                    >
                        <Image
                            src={type.image}
                            alt={type.name}
                            width={50}
                            height={50}
                        />
                    </button>
                ))}
            </Icones>
            <Embla ref={emblaRef} >
                <EmblaContainer>
                    {types.map((typeEmbla) => (
                        <button
                            key={typeEmbla.id}
                            onClick={() => func(typeEmbla.name)}
                        >
                            <Image
                                src={typeEmbla.image}
                                alt={typeEmbla.name}
                                width={50}
                                height={50}
                            />
                        </button>
                    ))}
                </EmblaContainer>
            </Embla>
            {/* <EmblaButtons>
                <button onClick={scrollPrev} className="bi bi-chevron-left" />
                <button onClick={scrollNext} className="bi bi-chevron-right" />
            </EmblaButtons> */}
        </section>
    );
}

