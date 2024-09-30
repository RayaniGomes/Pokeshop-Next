import { LitsPokemonsProps } from "@/interfaces/interface";
import { BodyInfo, CardPokemon, CardsPokemon, FooterInfo, InfoCard, TitleCard } from "./styled";
import Image from "next/image";

export default function Card({pokemons}: LitsPokemonsProps) {
    return (
        <CardsPokemon>
            {pokemons.map((pokemon) => (
                <CardPokemon key={pokemon.name}>
                    {pokemon.image ? (
                        <Image 
                            src={pokemon.image} 
                            alt={pokemon.name} 
                            width={180} 
                            height={180} 
                        />
                    ) : (
                        <p>Imagem não disponível</p> 
                    )}
                    <InfoCard>
                        <BodyInfo>
                            <TitleCard>
                                <h3>{pokemon.name} Nº {pokemon.id}</h3>
                                <button>?</button>
                            </TitleCard>
                            <p>Types: {pokemon.types.join(', ')}</p>
                        </BodyInfo>
                        <FooterInfo>
                            <h4>Por: R${pokemon.valorOriginal}</h4>
                            <button>COMPRAR</button>
                        </FooterInfo>
                    </InfoCard>  
                </CardPokemon>
            ))}
        </CardsPokemon>
    )
}