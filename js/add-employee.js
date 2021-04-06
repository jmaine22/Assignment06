
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
function init() {
    "use strict";
    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let width = 800;
    let height = 700;
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    window.resizeTo(width, height);
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    window.moveTo((window.screen.width - width) / 2, ((window.screen.height - height) / 2));
    document.getElementById('empForm');
    document.getElementById('id');
    document.getElementById('name');
    document.getElementById('extension');
    document.getElementById('email');
    document.getElementById('department');

    // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION
    document.addEventListener('DOMContentLoaded', () => {
        let mySubmit = document.getElementById('submit');
        mySubmit.addEventListener('click', (e) => {
            e.preventDefault();
        })
    });
    document.addEventListener('DOMContentLoaded', () => {
        let myCancel = document.getElementById('cancel');
        myCancel.addEventListener('click', (e) => {
        window.close();
        })
    });
    // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
let myID;
let myName;
let myExtension;
let myEmail;
let myDepartment;
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

let employee = window.document.getElementById("submit");
employee.addEventListener("click", function() {
    myID = document.getElementById('id').value;
    console.log(myID);
    myName = document.getElementById('name').value;
    console.log(myName);
    myExtension = document.getElementById('extension').value;
    console.log(myExtension);
    myEmail = document.getElementById('email').value;
    console.log(myEmail);
    myDepartment = document.getElementById('department').value;
    console.log(myDepartment);
    //page.opener.document.write('<p>Parent Window</p>');
    // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
    let page = window.opener.document.getElementById('loginDetails');
    console.log(page);
    page.innerHTML = "<br><br>8-Digit Employee ID" + myID + "<br>Full Name" + myName + "<br>4-Digit Extension" + myExtension + "<br>Email" + myEmail + "<br>Department" + myDepartment;
})
    
//let loginDetail = document.getElementById('loginDetails');
// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE 
}
// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
