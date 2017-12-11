$("#name").focus();

//all variable selectors
const jobRole = document.getElementById('title');
const inputBox = document.getElementById('other-title');
const design = document.getElementById('design');
const color = document.getElementById('color');

//hide other-title by default
inputBox.style.display = "none";

//function to display other-title when other option is selected
const showOther = function(){
  if(jobRole.value == "other"){
    inputBox.style.display = "block";
  }else{
    inputBox.style.display = "none";
  }
}

//event listener for change to jobRole list
jobRole.addEventListener('change', showOther);


//when option is chosen, only show partial selection
const themeChanger = function(){
  if(design.value == "js puns"){
    for (let i= 0; i <= color.length; i++){
      if (color.options[i].text.endsWith("JS shirt only)")){
           color.options[i].style.display = "none";
           color.options[0].selected = true;
         }
      else{
        color.options[i].style.display = "block";
      }
       }
  } else if(design.value == "heart js"){
      for (let i= 0; i <= color.length; i++){
        if (color.options[i].text.endsWith("(JS Puns shirt only)")){
             color.options[i].style.display = "none";
             color.options[3].selected = true;
        }
        else{
          color.options[i].style.display = "block";
        }
      }
  }
  }




design.addEventListener('change', themeChanger);
