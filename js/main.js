//*********** VARIABLES ************//

//all variable selectors
const jobRole = document.getElementById('title');
const inputBox = document.getElementById('other-title');
const design = document.getElementById('design');
const color = document.getElementById('color');
const activities = document.getElementsByClassName('activities');


//*********** FOCUS ************//

$("#name").focus();


//************ OTHER TEXTFIELD ***************//

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


//*********** THEME CHANGER ************//

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


//************ ACTIVITIES REGISTER ***************//

//*** Run Total ***//

//add value attributes to each checkbox
$(".activities input[name=all]").attr("value", "200");
$(".activities input[name=js-frameworks]").attr("value", "100");
$(".activities input[name=js-libs]").attr("value", "100");
$(".activities input[name=express]").attr("value", "100");
$(".activities input[name=node]").attr("value", "100");
$(".activities input[name=build-tools]").attr("value", "100");
$(".activities input[name=npm]").attr("value", "100");

//append span element to activities fieldset
$(".activities").append("<span class='total'></span>");

//create totalCalc that adds cost to total whenever checkbox is checked and updates total span text
const totalCalc = function(){
    let total = 0;
    $(".activities input[type='checkbox']:checked").each(function(){
           let cost = $(this).val();
           total += parseInt(cost);
    })
    $('.total').text('$'+total);
};

//run totalCalc whenever change is made
$('.activities input').change(()=>{
    totalCalc();
});

//*** Event Overlap ***//

//disable a particular checkbox if a checkbox is selected
const tuesAm1 = function(){
  if(this.checked){
    $(".activities input[name=express]").attr("disabled", true);
    $(".activities input[name=express]").parent().css("color", "grey");
  }
  else{
    $(".activities input[name=express]").attr("disabled", false);
    $(".activities input[name=express]").parent().css("color", "black");
  }
}

const tuesAm2 = function(){
  if(this.checked){
    $(".activities input[name=js-frameworks]").attr("disabled", true);
    $(".activities input[name=js-frameworks]").parent().css("color", "grey");
  }
  else{
    $(".activities input[name=js-frameworks]").attr("disabled", false);
    $(".activities input[name=js-frameworks]").parent().css("color", "black");
  }
}

const tuesPm1 = function(){
  if(this.checked){
    $(".activities input[name=node]").attr("disabled", true);
    $(".activities input[name=node]").parent().css("color", "grey");
  }
  else{
    $(".activities input[name=node]").attr("disabled", false);
    $(".activities input[name=node]").parent().css("color", "black");
  }
}

const tuesPm2 = function(){
  if(this.checked){
    $(".activities input[name=js-libs]").attr("disabled", true);
    $(".activities input[name=js-libs]").parent().css("color", "grey");
  }
  else{
    $(".activities input[name=js-libs]").attr("disabled", false);
    $(".activities input[name=js-libs]").parent().css("color", "black");
  }
}

$(function() {
  $(".activities input[name=js-frameworks]").click(tuesAm1);
  $(".activities input[name=express]").click(tuesAm2);
  $(".activities input[name=js-libs]").click(tuesPm1);
  $(".activities input[name=node]").click(tuesPm2);
});
