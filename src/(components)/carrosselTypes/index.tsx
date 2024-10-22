import { types } from "@/data/helps";
import Image from "next/image";
import { BackCard, CardCarousel, ContainerCarousel, FrontCard } from "./styled";
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import { useEffect, useRef } from "react";

export default function CarrosselTypes() {
    const flickityRef = useRef(null);

    useEffect(() => {
        if (flickityRef.current) {
            new Flickity(flickityRef.current, {
                cellAlign: 'center',
                autoPlay: true,
                wrapAround: true,
                freeScroll: true,
                prevNextButtons: false,
                pageDots: false,
            });
        }
    }, []);

    return (
        <ContainerCarousel ref={flickityRef}>
            {types.map((info) => (
                <CardCarousel key={info.id} >
                    <FrontCard>
                        <Image
                            src={info.image}
                            alt={info.name}
                            width={100}
                            height={100}
                        />
                        <h4>{info.name}</h4>
                    </FrontCard>
                    <BackCard>
                        <p>{info.description}</p>
                        <a href='/pokedex'>Pokedex</a>
                    </BackCard>
                </CardCarousel>
            ))}
        </ContainerCarousel>
    )
}