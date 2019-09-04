const scriptURL = "https://script.google.com/macros/s/AKfycbxGauMDxByDF5Eh9rW_Y4eLBlMWayi4YamT4dLac4KULKaKy9kl/exec"
const form = document.forms['formulario-identificação']
const form2 = document.forms['formulario-identificação2']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            window.location = '';
        })
        .catch(error => console.error('Error!', error.message))
})

form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form2) })
        .then(response => {
            console.log('Success!', response);
            window.location = '';
        })
        .catch(error => console.error('Error!', error.message))
})