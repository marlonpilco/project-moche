const insertBtn = document.querySelectorAll('.insertBtn')

function createCard(){
    const insertName = document.getElementById('insertName').value
    const insertVision = document.getElementById('insertVision').value
    const insertMision = document.getElementById('insertMision').value

    // Validar si los campos estan con texto
    if(insertName.length == 0 || insertVision.length == 0 || insertMision.length == 0){
        // Si esta vacio insertamos una alerta con un mensaje
        alert('Debe insertar texto en los cuadros')
    }else{
        // Si los campos estan con texto creamos nuestro card con los elementos
        // y el texto insertado
        const cardCreate = document.createElement('div')
        cardCreate.innerHTML = `<div class="insert">
                                    <h2 class="insert__title">Mision y Vision de ${insertName}</h2>
    
                                    <div>
                                        <div class="insert__box">
                                            <h3 class="insert__subtitle" >Su Vision</h3>
                                            ${insertVision}
                                        </div>
    
                                        <div class="insert__box">
                                            <h3 class="insert__subtitle" >Su Mision</h3>
                                            ${insertMision}
                                        </div>
                                    </div>
                                </div>
    `
    // Insertamos el card al final del ultimo elemento que esta en el body
    document.body.appendChild(cardCreate)

    // Limpiamos los elementos inputs
    document.getElementById('insertName').value = ''
    document.getElementById('insertVision').value = ''
    document.getElementById('insertMision').value = ''
    }
}

// Insertamos la card cuando hagamos click en el boton insertar
insertBtn.forEach(n => n.addEventListener('click', createCard))
