import Image from 'next/image';

interface PokemonTypesProps {
    types: string[];
}

export default function PokemonTypes({ types }: PokemonTypesProps) {
    return (
        <section>
            {types.map((type, index) => (
                <button key={index}>
                    <Image
                        src={`/img/iconTipos/${type}.png`}
                        alt={type}
                        width={20}
                        height={20}
                    />
                </button>
            ))}
        </section>
    );
};
