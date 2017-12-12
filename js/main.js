//*********** VARIABLES ************//

//all variable selectors
const jobRole = document.getElementById('title');
const inputBox = document.getElementById('other-title');
const design = document.getElementById('design');
const color = document.getElementById('color');
const activities = document.getElementsByClassName('activities');
const $name = $("#name");
const $email = $("#email");


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

//hide color dropdown
$("#colors-js-puns").hide();

//add default color option
$("#color").append("<option value='default'>--- Please select a T-shirt theme ---</option>");

//when option is chosen, only show partial selection
const themeChanger = function(){
  if(design.value == "js puns"){
    for (let i= 0; i <= color.length; i++){
      if (color.options[i].text.endsWith("JS shirt only)") ||
          color.options[i].text.endsWith("T-shirt theme ---")){
           color.options[i].style.display = "none";
           color.options[0].selected = true;
           $("#colors-js-puns").show();
         }
      else{
        color.options[i].style.display = "block"
        $("#colors-js-puns").show();
      }
       }
  } else if(design.value == "heart js"){
      for (let i= 0; i <= color.length; i++){
        if (color.options[i].text.endsWith("(JS Puns shirt only)") ||
            color.options[i].text.endsWith("T-shirt theme ---")){
             color.options[i].style.display = "none";
             color.options[3].selected = true;
             $("#colors-js-puns").show();
        }
        else{
          color.options[i].style.display = "block";
          $("#colors-js-puns").show();
        }
      }
    } else{
      for (let i= 0; i <= color.length; i++){
        if (color.options[i].text.endsWith("(JS Puns shirt only)") ||
            color.options[i].text.endsWith("JS shirt only)")){
           color.options[i].style.display = "none";
           color.options[6].selected = true;
        }
      }
    }
  }

//added change event handler with themeChanger
$("#design").on('change', themeChanger);


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
$(".activities").append("<p class='total'></p>");

//create totalCalc that adds cost to total whenever checkbox is checked & updates total span text
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

//enable functions on click
$(function() {
  $(".activities input[name=js-frameworks]").click(tuesAm1);
  $(".activities input[name=express]").click(tuesAm2);
  $(".activities input[name=js-libs]").click(tuesPm1);
  $(".activities input[name=node]").click(tuesPm2);
});


//************ PAYMENT INFO ***************//

//have default option of credit card selected
$("#payment option[value='credit card']").attr("selected", true);

//whenever a payment option is selected, other payment types are hidden
const paySelector = function(){
  if($("#payment").val() == "credit card"){
    $("#credit-card").show();
    $("#credit-card").next().hide();
    $("#credit-card").next().next().hide();
  } else if($("#payment").val()=="paypal"){
    $("#credit-card").hide();
    $("#credit-card").next().show();
    $("#credit-card").next().next().hide();
  } else if($("#payment").val()=="bitcoin"){
    $("#credit-card").hide();
    $("#credit-card").next().hide();
    $("#credit-card").next().next().show();
  }
}

//run paySelector at start to hide other payment types
paySelector();

//change event handler with paySelector
$("#payment").on("change", paySelector);


//************ FORM VALIDATION ***************//

//check if name is filled in
const nameValidator = function(name){
  return /[a-z]+/.test(name);
}

//check if email is correctly configured
const emailValidator = function(email){

}

//check if at least 1 activity is selected
const activityValidator = function(activity){

}

//check if payment is selected & if credit card, that number is correct length
const paymentValidator = function(payment){

}

//show or hide tips

const showOrHideTips = function(show, element){
  if(show){
    element.style.display = "inherit";
  }
  else{
    element.style.display = "none";
  }
}

//listener to see if any validators return false value
const createListener = function(validator){
  return e =>{
     const text = e.target.value;
     const valid = validator(text);
     const showTip = text !== "" && !valid;
     const tooltip = e.target.nextElementSibling;
     showOrHideTips(showTip, tooltip);
  }
}

$name.on("input", createListener(nameValidator));
//$email.on("input", createListener(emailValidator));
//activities.addEventListener('input', createListener(activityValidator));
//$("#credit-card").on("input", createListener(paymentValidator));
