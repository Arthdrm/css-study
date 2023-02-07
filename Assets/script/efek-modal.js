const triggers = document.querySelectorAll(".link-modal");
const close_btns = document.querySelectorAll(".js-btn-close");
const modals = document.querySelectorAll(".modal-container");
for(let trigger of triggers){
    trigger.addEventListener("click", (e)=>{
        let index = [...triggers].indexOf(e.target);
        modals[index].classList.toggle("active");
    })
}

for(let close_btn of close_btns){
    close_btn.addEventListener("click", (e)=>{
        let index = [...close_btns].indexOf(e.target);
        modals[index].classList.toggle("active");
    })
}

