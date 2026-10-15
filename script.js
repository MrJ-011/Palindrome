const checkPalindrome = (event) => {
    event.preventDefault();
    const input = document.getElementById("text-input");
    const cleaned = input.value.replace(/[^a-z0-9]/gi,'').toLowerCase();
    if (input.value.trim() === '') {
        alert("Please input a value.");
        return;
    }
    const reversed = cleaned.split('').reverse().join('');
    const result =document.getElementById("result");
    
    if(cleaned === reversed){
        result.textContent = `${input.value} is a Palindrome`;
        result.style.color ="green";
    }else{
        result.textContent = `${input.value} is not a Palindrome`;
        result.style.color ="red";
    }
}