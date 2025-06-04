const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const results = document.getElementById("result");

if(checkButton && textInput && results){
  checkButton.addEventListener("click", () => {
    if(textInput.value.trim() === ""){
      alert("Please input a value");
      return; 
    }
    
    const initialInput = textInput.value; 
    const cleanedInput = initialInput.toLowerCase().replace(/[^a-z0-9]/g, ""); 
    const reversedInput = cleanedInput.split("").reverse().join(""); 
    
    if(cleanedInput === reversedInput){
      results.textContent = `${initialInput} is a palindrome.`;
    } else {
      results.textContent = `${initialInput} is not a palindrome.`; 
    }
  });
}