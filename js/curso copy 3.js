const questions = [
    {title: "1. O que é lixo eletrônico?",
        alternatives: ["A) Apenas restos de alimentos descartados.",
            "B) Equipamentos elétricos e eletrônicos que não são mais utilizados.",
            "C) Somente pilhas e baterias usadas.",
            "D) Qualquer material de plástico."
        ],
        RAnswer: 1
    },{
        title: "2. Qual é uma consequência do descarte incorreto de lixo eletrônico?",
        alternatives: [
            "A) Aumento da fertilidade de todos os solos.",
            "B) Produção natural de água potável.",
            "C) Contaminação do solo e da água por substâncias tóxicas.",
            "D) Diminuição da poluição em todos os ambientes."
        ],
        RAnswer: 2

    },{
        title: "3. Qual é a forma adequada de descartar equipamentos eletrônicos?",
        alternatives: [
            "A) Jogá-los no lixo comum.",
            "B) Queimá-los em locais abertos.",
            "C) Enterrá-los no quintal.",
            "D) Levá-los a pontos de coleta especializados."
        ],
        RAnswer: 3

    },{
        title: "4. Qual é um benefício da reciclagem de lixo eletrônico?",
        alternatives: [
            "A) Permitir o reaproveitamento de materiais e reduzir a extração de recursos naturais.",
            "B) Aumentar a quantidade de resíduos nos aterros.",
            "C) Tornar todos os aparelhos descartados reutilizáveis imediatamente.",
            "D) Eliminar completamente toda a poluição."
        ],
        RAnswer: 0

    },{
        title: "5. Qual atitude ajuda a diminuir a quantidade de lixo eletrônico?",
        alternatives: [
            "A) Trocar de celular todos os anos, mesmo sem necessidade.",
            "B) Descartar aparelhos quebrados em rios..",
            "C) Consertar aparelhos quando possível e doar os que ainda funcionam.",
            "D) Jogar carregadores no lixo comum."
        ],
        RAnswer: 2

    }
]

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