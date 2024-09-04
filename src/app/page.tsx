import Image from 'next/image';

export default function Home() {
  const tipos = [
    '/img/iconTipos/Bug.png',
    '/img/iconTipos/Dark.png',
    '/img/iconTipos/Dragon.png',
    '/img/iconTipos/Electric.png',
    '/img/iconTipos/Fairy.png',
    '/img/iconTipos/Fighting.png',
    '/img/iconTipos/Fire.png',
    '/img/iconTipos/Flying.png',
    '/img/iconTipos/Ghost.png',
    '/img/iconTipos/Grass.png',
    '/img/iconTipos/Ground.png',
    '/img/iconTipos/Ice.png',
    '/img/iconTipos/Normal.png',
    '/img/iconTipos/Poison.png',
    '/img/iconTipos/Psychic.png',
    '/img/iconTipos/Rock.png',
    '/img/iconTipos/Steel.png',
    '/img/iconTipos/Water.png',
  ];

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-around">
        {tipos.map((icon, index) => (
          <button key={index}>
            <Image 
              src={icon} 
              alt={`Tipo ${index}`} 
              width={30}
              height={30}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
