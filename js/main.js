// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
function init(){
    let btn = document.getElementById('btnAddEmployee');
    let myWindow;
    btn.addEventListener('click', function () {
        console.log('Hello World');
        myWindow = window.open('add-employee.html','','width=400, height=400, resizeable=yes');
        myWindow.resizeTo(250, 250);
    });
}
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP