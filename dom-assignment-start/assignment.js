// task 1
const liById = document.getElementById('task-1');
const liByNth = document.querySelector('ol li:nth-child(1)');

liById.style.color = 'white';
liByNth.style.backgroundColor = 'black';

// task 2
const title = document.querySelector('title');
const title2 = document.head.querySelector('title');
// title.textContent = 'Assignment - Solved!';
title2.textContent = 'Assignment - Solved!';

// task 3
const h1 = document.querySelector('h1');
h1.textContent = "Assignment - Solved!";

const h1El = document.getElementsByTagName('h1');
h1El[0].textContent = 'Assignemtn - Solved!';