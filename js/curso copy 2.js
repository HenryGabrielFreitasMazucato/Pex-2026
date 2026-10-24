const questions = [
    {
        title: "1. Qual é o primeiro passo para replantar uma planta?",
        alternatives: [
            "A) Colocar a planta diretamente no sol forte.",
            "B) Preparar um vaso ou local com terra adequada.",
            "C) Retirar todas as folhas da planta.",
            "D) Deixar as raízes expostas ao ar por várias horas."
        ],
        RAnswer: 1
    },
    {
        title: "2. Como devemos retirar uma planta do local original para replantá-la?",
        alternatives: [
            "A) Puxando o caule com força.",
            "B) Cortando todas as raízes.",
            "C) Retirando-a cuidadosamente para preservar as raízes.",
            "D) Sacudindo a planta até ela se soltar."
        ],
        RAnswer: 2
    },
    {
        title: "3. Qual é a importância de regar a planta após o replantio?",
        alternatives: [
            "A) Ajudar a umedecer a terra e facilitar a adaptação das raízes.",
            "B) Impedir que as raízes cresçam.",
            "C) Substituir a necessidade de luz solar.",
            "D) Evitar que a planta absorva nutrientes."
        ],
        RAnswer: 0
    },
    {
        title: "4. Qual é o melhor cuidado para a planta após o replantio?",
        alternatives: [
            "A) Deixá-la sem água por vários dias.",
            "B) Retirar a terra ao redor das raízes diariamente.",
            "C) Mantê-la sempre em um ambiente totalmente escuro.",
            "D) Oferecer água, luz adequada e observar seu desenvolvimento."
        ],
        RAnswer: 3
    },
    {
        title: "5. Como o replantio pode contribuir para o meio ambiente?",
        alternatives: [
            "A) Aumentando o desperdício de água.",
            "B) Ajudando a preservar a vegetação e incentivar o cultivo de plantas.",
            "C) Diminuindo a quantidade de áreas verdes.",
            "D) Impedindo o crescimento de novas plantas."
        ],
        RAnswer: 1
    }
];

let answer = Array(questions.length).fill(null);

let page = 0

const questionBox = document.getElementById("questionsBox")
const pagNumber = document.getElementById("pagNumber")  
const endButton = document.getElementById("end")
const title = document.getElementById("title")
const resp = document.getElementById("resp")

pagNumber.textContent = `${page + 1}/${questions.length}`

endButton.style = "display:none;"

resp.style = "display: none;"

function update(){
    questionBox.innerHTML = ""
    
    title.textContent = questions[page].title

    questions[page].alternatives.forEach((option, index) => {
        
        const radio = document.createElement("input")
        radio.type = "radio"
        radio.id = index
        radio.name = "a"

        radio.checked = answer[page] === index

        radio.addEventListener("change", () => {
            answer[page] = index
        })
        
        const label = document.createElement("label")
        label.textContent = option
        label.htmlFor = index

        questionBox.append(radio, label, document.createElement("br"), document.createElement("br"))
    })
}

function pageAdd(){
    if(page + 1  < questions.length){
        page += 1
        pagNumber.textContent = `${page + 1}/${questions.length}`
        update()

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        })

        if(page == questions.length - 1){
            endButton.style = "display: block"
        }
    }
}

function pageSub(){
    if(page  > 0){
        page -= 1
        pagNumber.textContent = `${page + 1}/${questions.length}`
        update()

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        })

        endButton.style = "display: none;"
    }
}

function mostrarResultados(){
    const card = document.createElement("div")
    card.style = "background-color: #cfe0d0; padding: 1rem; border-radius: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 20%; min-width: 10rem; height: 40%; gap: 1rem; color:;#245d3a"

    const backButton = document.createElement("a")
    backButton.textContent = "Ver mais cursos"
    backButton.id = "backButton"
    backButton.href = "./home.html"

    let porcentagemNum = 0

    resp.style = "display: flex;"
    const porcentagem = document.createElement("h2")
    const span = document.createElement("span")
    span.textContent = "de acertos"

    answer.forEach((letter, index) => {
        if(letter === questions[index].RAnswer){
            porcentagemNum += 1
        }
    })

    porcentagem.style = "font-size: 3rem;"

    porcentagem.textContent = `${(porcentagemNum / questions.length) * 100}%`

    card.append(porcentagem, span, backButton)
    resp.append(card)
}


update()
endButton.addEventListener("click", mostrarResultados);