import {isValid} from './provere.js'
import {addElemToRashod, addElemToPrihod, selectBox} from './DOM.js'

const forma = document.getElementById('forma')

forma.addEventListener('submit', (e) =>{
    e.preventDefault()    

    if(!isValid()){
        const error = document.createElement('p')
        error.innerHTML = `
        <b style='color:red;'>Поља не смеју бити празна! <br>
        Опис не сме бити број! <br>
        Износ не сме бити негативан! <br>
        Износ мора бити број! </b>`

        e.target.insertBefore(error, e.target.children[e.target.children.length])

        setTimeout(()=>{
            error.remove()
        }, 2000)
        return
    }

    if(selectBox.value === "prihod"){
        addElemToPrihod()
    }
       
    if(selectBox.value === "rashod"){
        addElemToRashod()
    }

})