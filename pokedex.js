

const pokemon_img = document.getElementById("pokeImg");
const pokemon_name = document.getElementById("pokeName");
const pokemon_order = document.getElementById("pokeOrder");
const bodybar = document.getElementById("body-bar");
const pokemon_weight = document.getElementById("weight");
const pokemon_height = document.getElementById("height");
const pokemon_base_experience = document.getElementById("base_experience");
const pokemon_types = document.getElementById("types");
const pokemon_abilities = document.getElementById("abilities");
const pokedex_main = document.getElementById("pokedex-main");

const getPokemon = async() =>{
    const input = document.getElementById("nombre_pokemon");    
    let namepokemon = input.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${namepokemon}`;

    
    try {
        const result = await fetch(url);
        if (result.status == 200) {
            const pokemon = await result.json();
            setPokemon(pokemon);
        }else{
            const data = {
                pokemonimg : 'img/psyduck.jpeg',
                pokemonabilities : 'Abilities: -',
                pokedexmain : 'white',
                bodybarr : 'white',
                pokemonname : 'NO SE ENCONTRO AL POKEMON',
                pokemonorder : '',
                pokemonweight : 'Weight : -',
                pokemonheight : 'Height : -',
                pokemontypes : 'Types : -',
                pokemonbaseexperience : ''
            }
            
            setData(data);
        }

    } catch (error) {
        console.log(error);
    }
  

}


const setPokemon = async (pokemon) => {
    const { sprites,name,order,species,weight,height,base_experience,abilities,types } = pokemon;
    const { name:color } = await getPokemonColor(species.url);
    let abilites = 'Abilities: ';
    abilites += (abilities.length > 1) ? abilities[0].ability.name + ',' + abilities[1].ability.name : abilities[0].ability.name;

    const data = {
        pokemonimg: sprites.front_default,
        pokemonabilities : abilites,
        pokedexmain : 'background: linear-gradient(to bottom right, '+ color +', white);',
        bodybarr : color,
        pokemonname : name,
        pokemonorder : '#' + order,
        pokemonweight : 'Weight : ' + weight,
        pokemonheight : 'Height : ' + height,
        pokemontypes : 'Types : ' + types[0].type.name,
        pokemonbaseexperience : 'Base experience : <progress max="100" value="'+ base_experience +'"></progress>'
    }
    
    setData(data);

}

const getPokemonColor = async (url) =>{
    const result = await fetch(url);
    const {color} = await result.json();
    return color;
}

const setData = (data) => {
    const { 
        pokemonabilities,pokedexmain,bodybarr,pokemonname,pokemonorder,
        pokemonweight,pokemonheight,pokemontypes,pokemonimg,pokemonbaseexperience
    } = data;
    
    pokemon_img.src = pokemonimg;
    pokemon_abilities.innerHTML = pokemonabilities;
    pokedex_main.style.cssText = pokedexmain;
    bodybar.style.background = bodybarr;
    pokemon_name.innerHTML = pokemonname;
    pokemon_order.innerHTML = pokemonorder;
    pokemon_weight.innerHTML = pokemonweight;
    pokemon_height.innerHTML = pokemonheight;
    pokemon_types.innerHTML = pokemontypes;
    pokemon_base_experience.innerHTML = pokemonbaseexperience;
}

const data = {
    pokemonimg: 'img/pokebola.png',
    pokemonabilities : 'Abilities: -',
    pokedexmain : 'white',
    bodybarr : 'white',
    pokemonname : '-',
    pokemonorder : '-',
    pokemonweight : 'Weight : -',
    pokemonheight : 'Height : -',
    pokemontypes : 'Types : -',
    pokemonbaseexperience : '',
}

setData(data);



