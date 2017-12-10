$("#name").focus();

//all variable selectors
const jobRole = document.getElementById('title');
const inputBox = document.getElementById('otheroption');
const design = document.getElementById('design');
const color = document.getElementById('color');

inputBox.style.display = "none";

const listener = function(){
  if(jobRole.value == "other"){
    inputBox.style.display = "block";
  }else{
    inputBox.style.display = "none";
  }
}

jobRole.addEventListener('change',listener);


//when option is chosen, only show partial selection
const themeChanger = function(){
  if(design.value == "js puns"){
    alert("heart you");
  } else if(design.value == "heart js"){
     if (color.value.endsWith("(JS Puns shirt only)")){
       alert("sy")
     };

  }
}

design.addEventListener('change', themeChanger);
