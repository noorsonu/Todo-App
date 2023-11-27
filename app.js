let inputs = document.getElementById('input-box');
let text = document.querySelector('.text');

function addTask(){
    if(inputs.value == ""){
        alert("Please enter your task.");
    }else{
        let newEle = document.createElement('li');
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector('i').addEventListener('click',remove);
        function remove(){
            newEle.remove();
        }
    }
}


  
  