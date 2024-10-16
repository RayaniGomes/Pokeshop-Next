import Image from "next/image";
import {  Embla, EmblaCarousel, EmblaContainer, Icones } from "./styled";
import { types } from "@/data/helps";
import useEmblaCarousel from 'embla-carousel-react';

interface PokemonTypesProps {
    func: (value: string) => void;
}

export default function PokemonTypes({ func }: PokemonTypesProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel();

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
            <EmblaCarousel>
                <Embla ref={emblaRef}>
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
            </EmblaCarousel>
        </section>
    );
}
