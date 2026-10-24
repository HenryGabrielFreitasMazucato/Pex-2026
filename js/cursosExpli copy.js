const textSlices = [`A reciclagem é um processo que transforma materiais descartados em matéria-prima para a fabricação de novos produtos. Esse processo permite reaproveitar recursos que seriam jogados fora, como papel, plástico, vidro e metal, contribuindo para a preservação do meio ambiente e para a redução da quantidade de lixo produzido.`,
    `O descarte incorreto dos resíduos pode causar diversos problemas ambientais, como a poluição do solo e da água, além de prejudicar os animais e os ecossistemas. Por isso, separar os materiais recicláveis do lixo orgânico é uma atitude importante para facilitar a coleta seletiva e o encaminhamento dos resíduos aos locais adequados.`,
    `A coleta seletiva consiste na separação dos resíduos de acordo com o tipo de material. As lixeiras coloridas ajudam nesse processo: azul para papel, vermelho para plástico, verde para vidro, amarelo para metal e marrom para resíduos orgânicos. É importante lembrar que as regras de coleta podem variar conforme a cidade e o serviço responsável.`,
    `A reciclagem permite recuperar materiais valiosos, como cobre, alumínio e outros metais, que podem ser reaproveitados na fabricação de novos produtos. Isso reduz a necessidade de extrair recursos naturais e diminui a quantidade de resíduos descartados no meio ambiente.`,
    `Além de reduzir a quantidade de lixo enviada aos aterros sanitários, a reciclagem ajuda a economizar recursos naturais e energia, pois muitos materiais podem ser reaproveitados na produção de novos objetos. Dessa forma, diminui-se a necessidade de extrair matérias-primas da natureza.`
]

const resumoSlices = [`A reciclagem transforma materiais descartados, como papel, plástico, vidro e metal, em matéria-prima para novos produtos. Ela ajuda a preservar o meio ambiente, reduzir o lixo e evitar a poluição do solo e da água. Separar os materiais recicláveis do lixo orgânico facilita a coleta seletiva e o descarte adequado.`,
`A coleta seletiva separa os resíduos por material, utilizando lixeiras coloridas para facilitar o descarte correto. A reciclagem permite reaproveitar materiais como cobre e alumínio, reduzindo a extração de recursos naturais e a quantidade de lixo no meio ambiente.`,
`A reciclagem reduz o lixo enviado aos aterros sanitários, economiza energia e recursos naturais, além de diminuir a extração de matérias-primas ao reaproveitar materiais na fabricação de novos produtos.`
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
