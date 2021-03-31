// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
let width = 800;
let height = 700;
// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width, height);
// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
window.moveTo(500, 100);
// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM
function init() {
    let myID = document.getElementById('id');
    let myName = document.getElementById('name');
    let myExtension = document.getElementById('extension');
    let myEmail = document.getElementById('email');
    let myDepartment = document.getElementById('department').value;
    let mySubmit = document.getElementById('submit');
    let myCancel = document.getElementById('cancel');
    // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW
    myCancel.addEventListener('click', function () {
        window.close();
    });
    mySubmit.addEventListener('click', function (e) {
        e.preventDefault();
    });
    myID = document.getElementById('id').value;
    myName = document.getElementById('name').value;
    myExtension = document.getElementById('extension').value;
    myEmail = document.getElementById('email').value.indexOf('@');
    myDepartment = department.options[department.selectedIndex].text;
    console.log(myID);
}
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE 