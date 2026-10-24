const questions = [
    {title: "1. O que é reciclagem?",
        alternatives: ["A) Um processo de transformar materiais descartados em matéria-prima para novos produtos.",
            "B) Uma forma de produzir mais lixo.",
            "C) Um método de eliminar todos os resíduos por meio da queima.",
            "D) Uma atividade que serve apenas para separar restos de alimentos."
        ],
        RAnswer: 0
    },{
        title: "2. Qual é o objetivo da coleta seletiva?",
        alternatives: [
            "A) Misturar todos os tipos de resíduos.",
            "B) Separar os resíduos de acordo com o tipo de material.",
            "C) Enviar todos os materiais diretamente aos rios.",
            "D) Descartar materiais recicláveis junto com os orgânicos."
        ],
        RAnswer: 1

    },{
        title: "3. Qual cor de lixeira é utilizada para o descarte de papel?",
        alternatives: [
            "A) Vermelha.",
            "B) Amarela.",
            "C) Azul.",
            "D) Verde."
        ],
        RAnswer: 2

    },{
        title: "4. Qual é um benefício da reciclagem?",
        alternatives: [
            "A) Aumentar a extração de recursos naturais.",
            "B) Aumentar a poluição do solo.",
            "C) Produzir mais resíduos nos aterros sanitários.",
            "D) Economizar recursos naturais e energia."
        ],
        RAnswer: 3

    },{
        title: "5. Qual atitude contribui para a reciclagem?",
        alternatives: [
            "A) Misturar materiais recicláveis com restos de comida.",
            "B) Separar corretamente os resíduos e reutilizar embalagens quando possível.",
            "C) Jogar plásticos em rios e terrenos.",
            "D) Descartar vidro em qualquer lixeira"
        ],
        RAnswer: 1

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