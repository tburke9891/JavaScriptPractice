const task3Element = document.getElementById('task-3');

function alertMe() {
    alert("This is definitely an alert.");
}

function nameAlert(name){
    alert(name);
}

function threeStrings(sting1, string2, string3) {
    return `${sting1} ${string2} ${string3}`;
}

nameAlert("John");

task3Element.addEventListener('click', alertMe);

alert(threeStrings("This is string1. ", "This is string2. ", "This is string3!"));

