// Procurar o botão
document.querySelector("#add-time")
    // Quando clicar no botão
    .addEventListener('click', cloneField)


var contador = 0

// Executar uma ação
function cloneField() { // função que clona a <div> do horario

    var del = document.createElement('button') // criar o botao pra apagar o horario criado
    del.textContent = '- Apagar horário'
    del.id = "eraseTime"
    
    var style = document.createElement('style')
    style.innerHTML = `
    #eraseTime {
        background: none;
        border: 0;
    
        color: var(--color-primary);
    
        font: 700 1.6rem Archivo;    
        cursor: pointer;    
        transition: 0.2;

        margin-top: 4.6rem;
        display: flex;
        align-items: center;
    }
    
    `
    document.head.appendChild(style)


    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true ou false
    newFieldContainer.id = `novocampo` + contador
    del.addEventListener('click', () => {
        let bodyElement = document.querySelector(`#schedule-items`)
        bodyElement.removeChild(newFieldContainer);
    
    })

    contador += 1
    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function (field) {
        // pegar o field do momento e limpa ele
        field.value = ""
    })


    // Colocar na página. Onde na página?
    document.querySelector('#schedule-items').appendChild(newFieldContainer).appendChild(del)
}

