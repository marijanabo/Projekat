const listaPrihoda = document.getElementById('prihodi')
const listaRashoda = document.getElementById('rashodi')
const selectBox = document.getElementById('select-box')
const inputOpis = document.getElementById('opis-transakcije')
const inputIznos = document.getElementById('iznos-transakcije')
const ukProcenat = document.getElementById("uk-procenat")
const ukupanPrihod = document.getElementById('uk-prihod')
const ukupanRashod = document.getElementById('uk-rashod')
const dobit = document.getElementById('dobit')

const btnDelete = document.createElement('button')
btnDelete.class = 'hide'
btnDelete.className = 'delete-button'
btnDelete.textContent = 'ОБРИШИ'

let sumaPrihoda = 0
let budzet = 0

export const addElemToPrihod = () => {

    sumaPrihoda += Number(inputIznos.value);
    ukupanPrihod.textContent = '+' + sumaPrihoda.toFixed(2) 
    budzet += Number(inputIznos.value)
    dobit.textContent = budzet.toFixed(2)

    const li = document.createElement('li')
    li.className = 'polje-prihoda'

        const spanOpis = document.createElement('span')
        spanOpis.className = 'opis-prihoda'
        spanOpis.textContent = inputOpis.value

        const spanIznos = document.createElement('span')
        spanIznos.className = 'iznos-prihoda'
        spanIznos.textContent = '+' + inputIznos.value

    li.append(spanOpis, spanIznos)

    li.addEventListener('mouseover', ()=>{
        btnDelete.classList.remove('hide')
        li.appendChild(btnDelete)

        btnDelete.addEventListener('click', (e)=>{

            // novaSumaPrihoda = sumaPrihoda - Number(inputIznos.value);
            // ukupanPrihod.textContent = novaSumaPrihoda.toFixed(2) 
            // noviBudzet = budzet - Number(inputIznos.value)
            // dobit.textContent = noviBudzet.toFixed(2) 
           
            e.target.parentElement.remove()
        })
    })

    li.addEventListener('mouseout', ()=>{
        btnDelete.classList.add('hide')
    })

listaPrihoda.appendChild(li)

inputOpis.value = ''
inputIznos.value = ''
selectBox.value = '-1'
}

let procenat = 0
let sumaRashoda = 0
let sumaProcenata = 0

export const addElemToRashod = () => {

    sumaRashoda -= Number(inputIznos.value);
    ukupanRashod.textContent = sumaRashoda.toFixed(2) 

    if(sumaPrihoda !== 0){
        sumaProcenata += (Number(inputIznos.value) * 100) / sumaPrihoda
        ukProcenat.textContent = sumaProcenata.toFixed(2) + '%'
    }

    budzet -= Number(inputIznos.value)
    dobit.textContent = budzet.toFixed(2) 

    const li = document.createElement('li')
    li.className = 'polje-rashoda'

        const spanOpis = document.createElement('span')
        spanOpis.className = 'opis-rashoda'
        spanOpis.textContent = inputOpis.value

        const spanVrednosti = document.createElement('span')
        spanVrednosti.className = 'vrednost-rashoda'

            const spanIznos = document.createElement('span')
            spanIznos.className = 'iznos-rashoda'
            spanIznos.textContent = '-' + inputIznos.value

        spanVrednosti.appendChild(spanIznos)

            if(sumaPrihoda !== 0){
                const spanProcenat = document.createElement('span')
                spanProcenat.className = 'procenat'
                procenat = (Number(inputIznos.value) * 100) / sumaPrihoda
                spanProcenat.textContent = procenat.toFixed(2) + '%'
                spanVrednosti.appendChild(spanProcenat)
            }
            // else{
            //     const spanProcenat = document.createElement('span')
            //     spanProcenat.className = 'procenat'
            //     procenat = (Number(inputIznos.value) * 100) / sumaPrihoda
            //     spanProcenat.textContent = ""
            //     spanVrednosti.appendChild(spanProcenat)
            // }

    li.append(spanOpis, spanVrednosti)

    li.addEventListener('mouseover', ()=>{
        btnDelete.classList.remove('hide')
        li.appendChild(btnDelete)

        btnDelete.addEventListener('click', (e)=>{

            // novaSumaRashoda = sumaRashoda + Number(inputIznos.value);
            // ukupanRashod.textContent = novaSumaRashoda.toFixed(2) 
            // noviBudzet = budzet + Number(inputIznos.value)
            // dobit.textContent = noviBudzet.toFixed(2) 
            e.target.parentElement.remove()
        })
    })
        
    li.addEventListener('mouseout', ()=>{
        btnDelete.classList.add('hide')
    })

    listaRashoda.appendChild(li)

    inputOpis.value = ''
    inputIznos.value = ''
    selectBox.value = '-1'
}

export{inputIznos, inputOpis, ukupanPrihod, ukupanRashod, selectBox}