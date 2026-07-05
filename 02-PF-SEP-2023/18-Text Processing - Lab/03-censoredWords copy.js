function censoredWords(text,str) {

   let censored = text.split(str).join('*'. repeat(str.length));
   console.log(censored);
   
}

censoredWords('A small sentence with some words', 'small');
console.log('===============');
censoredWords('Find the hidden word', 'hidden');
