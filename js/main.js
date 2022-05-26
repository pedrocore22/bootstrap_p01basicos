let textArea = document.querySelector('textarea');
let button = document.querySelector('button');
let paragraph = document.querySelector('p');

function replaceVowel(text, index, value) {
    return text.substring(0, index) + value + text.substring(index + 1);
}

// console.log(replaceVowel('Hola Mundo', 6, 'i'));

const vowels = ['a','e','i','o','u','á','é','í','ó','ú'];

button.addEventListener('click', () => {
    let text = textArea.value.toLowerCase();
    for (i=0; i < text.length; i++) {
        if (vowels.includes(text.charAt(i))) {
            text = replaceVowel(text, i, 'i');
        }
    }
    paragraph.innerHTML = text;
    textArea.value = '';
})