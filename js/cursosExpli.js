const textSlices = [`O lixo eletrônico, também conhecido como e-lixo, é composto por equipamentos eletrônicos e elétricos que não são mais utilizados ou não funcionam, como celulares, computadores, televisores, pilhas, baterias e carregadores.`,
    `O descarte incorreto desses materiais pode causar sérios danos ao meio ambiente. Alguns componentes contêm substâncias tóxicas que podem contaminar o solo e a água, prejudicando os animais, as plantas e a saúde humana.`,
    `Para evitar esses problemas, o lixo eletrônico deve ser encaminhado a pontos de coleta especializados, lojas que recebem equipamentos usados ou ecopontos que aceitam esse tipo de material. Esses locais encaminham os resíduos para processos adequados de reciclagem e tratamento.`,
    `A reciclagem permite recuperar materiais valiosos, como cobre, alumínio e outros metais, que podem ser reaproveitados na fabricação de novos produtos. Isso reduz a necessidade de extrair recursos naturais e diminui a quantidade de resíduos descartados no meio ambiente.`,
    `Além disso, podemos contribuir evitando trocar aparelhos eletrônicos sem necessidade, consertando equipamentos quando possível e doando aqueles que ainda funcionam. Pequenas atitudes fazem a diferença para construir um futuro mais sustentável.`
]

const resumoSlices = [`O lixo eletrônico inclui aparelhos sem uso que, quando descartados incorretamente, podem contaminar o meio ambiente e prejudicar a saúde humana.`,
`Ele deve ser levado a pontos de coleta para reciclagem, permitindo reaproveitar materiais e reduzir a poluição e a extração de recursos naturais.`,
`Podemos reduzir o lixo eletrônico consertando, doando e evitando trocar aparelhos sem necessidade, contribuindo para um futuro sustentável.`
]

const paragrafo = document.getElementById("paragrafo")
const paragrafo2 = document.getElementById("paragrafo2")
const resumo = document.getElementById("resumoT")
const spanPagNumber = document.getElementById("pagNumber")
const button = document.getElementById("activitiesButton")

let pageNumber = 0

function Update(){
    paragrafo.textContent = textSlices[pageNumber]
    paragrafo2.textContent = textSlices[pageNumber + 1]
    spanPagNumber.textContent = (pageNumber/2) + 1
    resumo.textContent = resumoSlices[pageNumber/2]

    if(pageNumber != textSlices.length - 1){
        button.style.display = "none"
    }else{
        button.style.display = "flex"
    }
}

function pageAdd(){
    if(pageNumber < textSlices.length - 2){
        pageNumber += 2
        Update()

    }

    
}

function pageSub(){
    if(pageNumber > 0){
        pageNumber -= 2
        Update()

    }
}

Update()
