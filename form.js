var config = {
    apiKey: "AIzaSyDkZUGjFXeph1RZooK3AX8gi_Opjcd9BEs",
    authDomain: "portfolio-2ff63.firebaseapp.com",
    databaseURL: "https://portfolio-2ff63.firebaseio.com",
    projectId: "portfolio-2ff63",
    storageBucket: "portfolio-2ff63.appspot.com",
    messagingSenderId: "443113436567"
};

firebase.initializeApp(config);

var database = firebase.database();

var newContact = {};

$("#contactSubmit").on("click", function (event) {
    event.preventDefault();

    console.log("BUTTON WAS PRESSED");
    newContact.name = $("#formName").val().trim();
    newContact.email = $("#formEmail").val().trim();
    newContact.message = $("#formMessage").val();

    database.ref().push(newContact);

    clearInput();
});

function clearInput() {
    $("#formName").val("");
    $("#formEmail").val("");
    $("#formMessage").val("");
};

function thankYou(){
    $("contactMe").append("Thank you for your info. I'll be in touch!");
}
