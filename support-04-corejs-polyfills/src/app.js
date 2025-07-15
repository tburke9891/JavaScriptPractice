// import 'core-js/stable'; // can bloat the application - deploy in webpack.config
// import 'regenerator-runtime/runtime';

const button = document.querySelector('button');
const textParagraph = document.querySelector('p');

button.addEventListener('click', () => {
  const text = textParagraph.textContent;
  const promise = new Promise();
  console.log(promise);
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    alert('Feature not available, please copy manually!');
  }
});
