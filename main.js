i='https://pokeapi.co/api/v2/pokemon/'+ Math.ceil(Math.random()*250)


function returnPic(url){
    axios.get(url).then((response)=>{
    pokemon=response.data
    pic=pokemon.sprites["front_default"]
    pokemonpic=document.createElement("img")
    pokemonpic.src=pic
    document.getElementById("pokemonPicture").append(pokemonpic)
    axios.get(pokemon.types[0].type.url).then((response)=>{
        diffPokemon=response.data.pokemon
        otherPokes=[
        poke1=diffPokemon[Math.ceil(Math.random()*(diffPokemon.length))].pokemon.url,
        poke2=diffPokemon[Math.ceil(Math.random()*(diffPokemon.length))].pokemon.url,
        poke3=diffPokemon[Math.ceil(Math.random()*(diffPokemon.length))].pokemon.url,
        poke4=diffPokemon[Math.ceil(Math.random()*(diffPokemon.length))].pokemon.url,
        poke5=diffPokemon[Math.ceil(Math.random()*(diffPokemon.length))].pokemon.url]
        for (i=0;i<otherPokes.length;i++){
            axios.get(otherPokes[i]).then((response)=>{
                pics=response.data.sprites["front_default"]
                pokepic=document.createElement("img")
                pokepic.src=pics
                document.getElementById("pokemonPicture").append(pokepic)
            })
        }
    })
    }) .catch((error)=>{
        console.log('no good: ', error)
    })
}

