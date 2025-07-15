const button = document.querySelector('button');
const textParagraph = document.querySelector('p'); //hits the first paragraph

button.addEventListener('click', () => {
  const text = textParagraph.textContent; //pulls the text from the first paragraph
  if (navigator.clipboard) { //if clipboard is not undefined, do the thing
    navigator.clipboard
      .writeText(text)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  } else { // else alert user
    alert('Feature not available, please copy manually!');
  }
});
