function boldFirstLetters(text) {
    // Split the text into words
    let words = text.split(/\s+/);

    // Apply bold formatting based on the word length
    let boldWords = words.map(word => {
        let boldLength;
        if (word.length <= 2) {
            boldLength = word.length; // Bold entire word for 1-2 letter words
        } else if (word.length <= 4) {
            boldLength = 2; // Bold first two letters for 3-4 letter words
        } else {
            boldLength = Math.floor(word.length / 2); // Bold first half for longer words
        }
        return '<b>' + word.substring(0, boldLength) + '</b>' + word.substring(boldLength);
    });

    // Join the words back into a single string
    return boldWords.join(' ');
}

function applyBoldFormatting() {
    let inputText = document.getElementById('inputText').value;
    let formattedText = boldFirstLetters(inputText);
    document.getElementById('outputText').innerHTML = formattedText;
}