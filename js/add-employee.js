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
    document.getElementById('empForm');
    document.getElementById('id');
    document.getElementById('name');
    document.getElementById('extension');
    document.getElementById('email');
    document.getElementById('department').value;
}
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
let myID;
let myName;
let myExtension;
let myEmail;
let myDepartment;
// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

// GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

// CLOSE THE POPUP

// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE 