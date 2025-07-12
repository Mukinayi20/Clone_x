
export function closeModal(close, form) {

    close.addEventListener('click', ()=>{
        form.style.display = 'none'
    })

}

export function openModal(btn, form) {

    btn.addEventListener('click', ()=>{
        form.style.display = 'block';
    })

}

