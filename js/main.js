$("#name").focus();


const jobRole = document.getElementById('title');
const inputBox = document.getElementById('otheroption');

inputBox.style.display = "none";

const listener = function(){
  if(jobRole.value == "other"){
    inputBox.style.display = "block";
  }else{
    inputBox.style.display = "none";
  }
}


jobRole.addEventListener('change',listener);
