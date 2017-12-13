//*********** VARIABLES ************//

//all variable selectors
const $form = $("form");
const $jobRole = $("#title");
const inputBox = document.getElementById('other-title');
const design = document.getElementById('design');
const color = document.getElementById('color');

const $name = $("#name");
const $email = $("#mail");
const $activities = $(".activities");
const $payment = $("#payment");
const $card = $("#credit-card");
const $creditNum = $("#cc-num");
const $zipCode = $("#zip");
const $cvv = $("#cvv");


//*********** FOCUS ************//

$name.focus();


//************ OTHER TEXTFIELD ***************//

//hide other-title by default
inputBox.style.display = "none";

//function to display other-title when other option is selected
const showOther = function(){
  if($jobRole.val() == "other"){
    inputBox.style.display = "block";
  }else{
    inputBox.style.display = "none";
  }
}

//event listener for change to jobRole list
$jobRole.change(showOther);


//*********** THEME CHANGER ************//

//hide color dropdown
$("#colors-js-puns").hide();

//when option is chosen, only show partial selection
const themeChanger = function(){
  if(design.value == "js puns"){
    for (let i= 0; i <= color.length; i++){
      if (color.options[i].text.endsWith("JS shirt only)") ||
          color.options[i].text.endsWith("T-shirt theme ---")){
           color.options[i].style.display = "none";
           color.options[0].selected = true;
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
$payment.on("change", paySelector);


//************ FORM VALIDATION ***************//

//generate error functions
const genNameError = function() {
  const $nameError = $("<span id='name-error' style='color:red'>Please enter your name below.</span>");
  $nameError.insertBefore($name);
  $nameError.hide();
}

const genEmailError = function() {
  const $emailError = $("<span id='email-error' style='color:red'>Please correctly enter your email below.</span>");
  $emailError.insertBefore($email);
  $emailError.hide();
}

const genActError = function() {
  const $activityError = $("<span id='activity-error' style='color:red'>Please select an activity above.</span>");
  $activityError.insertAfter($activities);
  $activityError.hide();
}

const genAll = function(){
  const $genError =
  $("<span id = gen-errror style='color:red'>You have one more more errors, please check above</span><br>");
  $genError.insertBefore($("button[type=submit]"));
  $genError.hide();
  genNameError();
  genEmailError();
  genActError();
}

genAll();

//validate functions for each component
function validateName() {
  const nameInput = $name.val();
  const nameRegEx = /[a-z]+/i;
  let tester = nameRegEx.test(nameInput);
  if (tester) {
    $('#name-error').hide();
  } else {
    $('#name-error').show();
  }
  return tester;
}

function validateEmail() {
  const emailInput = $email.val();
  const emailRegEx = /^[^@]+@[^@.]+\.[a-z]+$/i;
  let tester = emailRegEx.test(emailInput);
  if (tester) {
    $('#email-error').hide();
  } else {
    $('#email-error').show();
  }
  return tester;
}

function validateActivity() {
  let tester = true;
  if ($("input[type=checkbox]:checked").length == 0) {
    $('#activity-error').show();
    tester = false;
  } else {
    $('#activity-error').hide();
    tester = true;
  }
  return tester;
}


$('button').on('click', function() {
  $form.submit(function() {
    if (!validateName()) {
      event.preventDefault();
      $('#gen-error').show();
    } else {
      $('#gen-error').hide();
    }
    if (!validateEmail()) {
      event.preventDefault();
      $('#email-error').show();
    } else {
      $('#email-error').hide();
    }
    if (!validateActivity()) {
      event.preventDefault();
      $('#activity-error').show();
    } else {
      $('#activity-error').hide();
    }
  });
});

/*Event Listener on email form field displays an error message as user is typing
 * until the input matches the acceptable email format.
 */
