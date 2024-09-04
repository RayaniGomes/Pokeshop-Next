import LitsPokemons from "@/(components}/ListPokemons"
import api from "@/service/api"
import { types } from "util"

export default async function Pokemons() {
    // const [pokemons, setPokemons] = useState([])
    // const [types, setTypes] = useState([])
    // const [imagens, setImagens] = useState([])
    const dataPokemon: any = []

    const res = await api.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
        .then(response => {
            // console.log(response.data)
            dataPokemon.push(response.data.results)
        })
        .catch(error => console.log(error))
    
        
    console.log(dataPokemon)
        
    const pokemonDetails = dataPokemon[0].map((element: any) => {
        
            return element.name
    });

    console.log(pokemonDetails)

        // api.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        //     .then(response => { 
        //         setPokemons(response.data.results)

        //         const urls = response.data.results.map((pokemonImagem: {url: string}) =>
        //             `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonImagem.url.split('/')[6]}.svg`
        //         )

        //         setImagens(urls)
        //     })
        //     .catch(error => console.log(error))
    
    // function getTypos() {
    //     api.get('https://pokeapi.co/api/v2/type')
    //         .then(response => setTypes(response.data.results))
    //         .catch(error => console.log(error))
    // }
    
    

    return(
        <LitsPokemons pokemons={pokemonDetails} />
    )
}
