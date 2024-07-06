import "./RandomPokemon.css";

export default function RandomPokemon() {
    const pokeId = Math.floor(Math.random() * 151) + 1;
    return (
        <div className="RandomPokemon">
            <h1>{pokeId}</h1>
            {/* <img src={url + "/" + pokeId + ".png"} alt="" /> */}
            <img src={`${url}/${pokeId}.png`} alt="" />
        </div>
    );
}

const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";
