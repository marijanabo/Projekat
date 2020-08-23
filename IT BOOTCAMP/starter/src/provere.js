const inputOpis = document.getElementById('opis-transakcije')
const inputIznos = document.getElementById('iznos-transakcije')
const selectBox = document.getElementById('select-box')


export const isValid = () =>
    selectBox.value !== '-1' &&
    inputOpis.value.trim() !== '' &&
    Number.isNaN(Number(inputOpis.value.trim()))
    inputIznos.value.trim() !== '' &&
    Number(inputIznos.value.trim()) > 0
    !Number.isNaN(Number(inputIznos.value.trim()))