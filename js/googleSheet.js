const scriptURL = "https://script.google.com/macros/s/AKfycbxGauMDxByDF5Eh9rW_Y4eLBlMWayi4YamT4dLac4KULKaKy9kl/exec"
const form = document.forms['formulario-identificação']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})