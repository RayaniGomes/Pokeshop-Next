import Image from 'next/image';

export default function PokemonTypes() {
    const types = [
        {
            name: 'bug', 
            image: '/img/iconTipos/bug.png'
        },
        {
            name: 'dragon',
            image: '/img/iconTipos/dragon.png'
        },
        {
            name: 'electric',
            image: '/img/iconTipos/electric.png'
        },
        {
            name: 'fairy', 
            image: '/img/iconTipos/fairy.png'
        },
        {
            name: 'fighting', 
            image: '/img/iconTipos/fighting.png'
        },
        {
            name: 'fire',
            image: '/img/iconTipos/fire.png'
        },
        {
            name: 'flying', 
            image: '/img/iconTipos/flying.png'
        },
        {
            name: 'ghost', 
            image: '/img/iconTipos/ghost.png'
        },
        {
            name: 'grass', 
            image: '/img/iconTipos/grass.png'
        },
        {
            name: 'ground', 
            image: '/img/iconTipos/ground.png'
        },
        {   
            name: 'ice', 
            image: '/img/iconTipos/ice.png'
        },
        {
            name: 'normal', 
            image: '/img/iconTipos/normal.png'
        },
        {
            name: 'poison', 
            image: '/img/iconTipos/poison.png'
        },
        {
            name: 'psychic', 
            image: '/img/iconTipos/psychic.png'
        },
        {
            name: 'rock', 
            image: '/img/iconTipos/rock.png'
        },
        {
            name: 'steel', 
            image: '/img/iconTipos/steel.png'
        },
        { 
            name: 'water', 
            image: '/img/iconTipos/water.png'
        },
    ];

    return (
        <section>
            {types.map((type, index) => (
                <button key={index}>
                    <Image
                        src={type.image}
                        alt={type.name}
                        width={50}
                        height={50}
                    />
                </button>
            ))}
        </section>
    );
};
