const textarea = document.getElementById("message");
const counter = document.getElementById("counter");

const maxLength = 100;

textarea.addEventListener("input", function () {
  const currentLength = textarea.value.length;
  const remainingCharacters = maxLength - currentLength;

  counter.textContent = `${currentLength}/${maxLength} characters`;

  if (currentLength > maxLength) {
      counter.classList.add("exceeded");
      alert("Max Characters Reached!!");
  } else {
    counter.classList.remove("exceeded");
  }
    
});
