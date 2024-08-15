function checkPangram() {
    const inputText = document.getElementById("inputText").value;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const sanitizedText = inputText.toLowerCase().replace(/[^a-z]/g, "");

    let isPangram = true;

    for (let letter of alphabet) {
        if (!sanitizedText.includes(letter)) {
            isPangram = false;
            break;
        }
    }

    const resultElement = document.getElementById("result");
    if (isPangram) {
        resultElement.textContent = "The sentence is a pangram!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "The sentence is NOT a pangram.";
        resultElement.style.color = "red";
    }
}
