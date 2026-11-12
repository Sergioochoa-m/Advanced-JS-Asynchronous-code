// EJERCICIO 1

const getAllBreeds = async () => {
    const dataPerros = await fetch(`https://dog.ceo/api/breeds/list/all`)

const perros = await dataPerros.json()
// console.log(perros)
// console.log(dataPerros)

const razas = Object.keys(perros.message)
// console.log(razas)

return razas
}

//EJERCICIO 2

const getRandomDog = async () => {

    const dataRandom = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const random = await dataRandom.json()
    // console.log(random)

    const randomPerro = Object(random.message)
    // console.log(randomPerro)

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

    const dataBreed = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
    const random2 = await dataBreed.json()

    const randomFoto1 = Object(random2.message)
    return(randomFoto1)
}

//EJERCICIO 5

const getGitHubUserProfile = async (username) => {

    const dataUser = await fetch (`https://api.github.com/users/${username}`)
    const random3 = await dataUser.json()
    // console.log(random3)

    const randomUser = Object(random3.message)
    return(random3)

}

//EJERCICIO 6


const printGithubUserProfile = async (username) => {

    const dataProfile = await fetch (`https://api.github.com/users/${username}`)
    const random4 = await dataProfile.json()
    const imagenFoto = {
        name: random4.name ,
        img: random4.avatar_url
    }

    const randomProfile = Object(random4.message)
    return(imagenFoto)

}

//EJERCICIO 7

const getAndPrintGitHubUserProfile = async (username) => {
    const dataProfile = await fetch (`https://api.github.com/users/Sergioochoa-m`)
    const random5 = await dataProfile.json()
    let dataSection = ``
    dataSection += `<section>`
    dataSection += `<img src="${random5.avatar_url}" alt="imagen de usuario">`
    dataSection += `<h1>${random5.login}</h1>`
    dataSection += `<p>Public repos: ${random5.public_repos}</p>`
    dataSection += `</section>`
console.log(dataSection)
    return(dataSection)
}

//NO SE POR QUE NO VA   
