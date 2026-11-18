// EJERCICIO 1

const getAllBreeds = async () => {
    const dataPerros = await fetch(`https://dog.ceo/api/breeds/list/all`)

const perros = await dataPerros.json()


const razas = Object.keys(perros.message)

return razas
}


//EJERCICIO 2


const getRandomDog = async () => {

    const dataRandom = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const random = await dataRandom.json()

    const randomPerro = Object(random.message)

    return(randomPerro)

}


// EJERCICIO 3

const getAllImagesByBreed = async () => {

    const dataImage = await fetch(`https://dog.ceo/api/breed/komondor/images`)
    const random1 = await dataImage.json()
    // console.log(random1)

    const randomFoto = Object(random1.message)

    return(randomFoto)
}
    //EJERCICIO 4

const getAllImagesByBreed2 = async (breed) => {
const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)

const data = await response.json()

const image = Object(data.message)

return image
}

//EJERCICIO 5
const getGitHubUserProfile = async (username) => {
const response = await fetch(`https://api.github.com/users/${username}`)
const data = await response.json()

return data
}

//EJERCICIO 6
const printGithubUserProfile = async (username) => {
const responseUserName = await fetch(`https://api.github.com/users/${username}`)
const dataUserName = await responseUserName.json()
const fotoYNombre = { name: dataUserName.name, img: dataUserName.avatar_url }
return fotoYNombre
}

//EJERCICIO 7

const getAndPrintGitHubUserProfile = async (username) => {
const response = await fetch(`https://api.github.com/users/${username}`)
const data = await response.json()
}
