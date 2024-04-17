let link = `https://pokeapi.co/api/v2/pokemon/ditto`



axios.get(link).then(
    (response) => {
        document.getElementById("img").src = response.data.sprites.front_default
    }
)