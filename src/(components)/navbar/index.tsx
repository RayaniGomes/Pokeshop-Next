import Image from "next/image";

export default function Navbar() {
    return (
        <nav>
            <div>
                <a>
                    <Image 
                        src='/img/logoNav.png' 
                        alt="Logo" 
                        width={100} height={60}
                    />
                </a>
            </div>
            <div>
                <div>
                    <a>Home</a>
                    <a>Mais Vendidos</a>
                    <a>Pokédex</a>
                    <a>Contato</a>
                </div>
            </div>
            <form>
                <input type="search" placeholder='O que você procura?' />
                <button>
                    <i className="bi bi-search"></i>
                </button>
            </form>
            <div>
                <a><i className="bi bi-cart"></i></a>
                <button><i className="bi bi-list"></i></button>
            </div>
        </nav>
    );
}