$(document).ready(function() {
  $("button#wholeOrder").click(function() {

    // alert("yes");
    event.preventDefault();
    // Gets the input of one pizza
    var pizzaOne = function add(pizzaSize, pizzaCrust, pizzaTop) {
      var pizzaSizing = $("#inputGroupSelect01 option:selected").val();
      var pizzaCrusting = $("#inputGroupSelect2 option:selected").val();
      var pizzaTopping = $("#inputGroupSelect03 option:selected").val();
      var pizzaPrice = 0;

      switch (pizzaSizing) {
        case "1":
          pizzaPrice = 600;
          break;
        case "2":
          pizzaPrice = 900;
          break;
        case "3":
          pizzaPrice = 1200;
          break;
        default:
          pizzaPrice;
          break;
      }


      switch (pizzaCrusting) {
        case "1":
          pizzaPrice = 200;
          break;
        case "2":
          pizzaPrice = 150;
          break;
        case "3":
          pizzaPrice = 250;
          break;
        case "4":
          pizzaPrice = 300;
          break;
        case "5":
          pizzaPrice = 100;
          break;
        default:
          pizzaPrice;
          break;
      }


      switch (pizzaTopping) {
        case "1":
          pizzaPrice = 100;
          break;

        case "2":
          pizzaPrice = 100;
          break;

        case "3":
          pizzaPrice = 50;
          break;

        case "4":
          pizzaPrice = 50;
          break;

        case "5":
          pizzaPrice = 50;
          break;

        case "6":
          pizzaPrice = 50;
          break;

        case "7":
          pizzaPrice = 50;
          break;
        default:
          pizzaPrice;
      }


      var total = parseInt(pizzaSizing) + parseInt(pizzaCrusting) + parseInt(pizzaTopping);


      function addToQuantity() {
        var pizzaQuantity = $("input#noOfOrders").val();
        var grandTotal = total * parseInt(pizzaQuantity);

        $(".total").append(grandTotal);
      }
      addToQuantity();
    }
    pizzaOne();
    $("#deliverPizza").show();
  });
  $("#deliverPizza").click(function() {
    $("#contactform").slideDown();
  });
  $("#submitbutton").click(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedEmailAddress = $("input#email-address").val();
    var inputtedPhoneNumber = $("input#phone-number").val();
    alert(inputtedFirstName + " " + inputtedLastName + " Your order will be ready in 15mins and will be delivered in the next 20 mins")
    $("#contactform").hide();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmailAddress, inputtedPhoneNumber);
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $("input#first-name").val("");
    $("input#last-name").val("");
    $("input#email-address").val("");
    $("input#phone-number").val();
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email-address").text(newContact.email);
      $(".phone-number").text(newContact.phonenumber);
    });
  });
  $(".sendicon").click(function(event) {
    alert("Thank you for your feedback");
  });
});
