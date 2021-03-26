// HANDLE THE LOAD EVENT OF THE WINDOW
window.addEventListener('load', init);
// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
function init(){
    let btn = document.getElementById('btnAddEmployee');
    btn.addEventListener('click', function () {
        console.log('Hello World');
        window.open('add-employee.html');
        window.resizeTo(250, 250);
    });
}
// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP