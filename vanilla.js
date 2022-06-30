const btn =document.getElementById('btn');
const modal =document.getElementsByClassName('modal-wrapper')[0];
const close_modal= document.getElementsByTagName('span')[0];

btn.addEventListener('click',()=>{
    modal.style.display='flex';
});

close_modal.addEventListener('click',()=>{
    modal.style.display='none';
});

window.addEventListener('click',(e)=>{
    if(e.target == modal){
        modal.style.display='none';
    }
});