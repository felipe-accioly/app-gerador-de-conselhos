document.getElementById('btn').addEventListener('click', () =>{
    gerarConselho()
})


async function conselhoAleatorio(){
    const url = 'https://api.adviceslip.com/advice';
    const resposta = await fetch(url)
    return await resposta.json()
    // const json = await resposta.json()
    // return resposta!
    // const id_conselho = json.slip.id
    // const conselho = json.slip.advice
    // console.log(json)
    // console.log(json.slip.id)
    // console.log(json.slip.advice)
}

// conselhoAleatorio()

async function gerarConselho(){
    const chamarConselho = await conselhoAleatorio()
    console.log(chamarConselho)
    const id_conselho = chamarConselho.slip.id
    const conselho = chamarConselho.slip.advice
    console.log(id_conselho)
    console.log(conselho)

    let texto = document.getElementById('conselho')
    texto.innerHTML = `<p>${conselho}</p>`

    let numeroConselho = document.getElementById('title')
    numeroConselho.innerHTML = `<p>advice #${id_conselho}</p>`
}

gerarConselho()
// async function 

// document.getElementById('btn').addEventListener('click', () =>{

// }


