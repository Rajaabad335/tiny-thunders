const popup= document.querySelector('#popup');
const btn=document.querySelector('#btn-a');
const close=document.querySelector('.close');


btn.addEventListener('click', e =>{
    popup.style.display='block';
})

close.addEventListener('click', e =>{
    popup.style.display='none';
})

body.addEventListener('click', e=>{
    popup.style.display='none';
})