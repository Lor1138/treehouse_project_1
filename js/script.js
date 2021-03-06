/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//An array with objects containing quotes and their sources

const quotes = [
  { quote: 'Success usually comes to those who are too busy to be looking for it.', source: 'Henry David Thoreau'}, 
  { quote: 'The secret to getting ahead is getting started.', source: 'Mark Twain'},
  { quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',  source: 'Ralph Waldo Emerson' },
  { quote: 'Today you are You, that is truer than true. There is no one alive who is Youer than You.', source: 'Dr. Suess',  citation: 'Horton Hears A Who'},
  { quote: 'It does not matter how slowly you go as long as you do not stop.', source: 'Confucius',  year: '551 BC - 479 BC'},
  { quote: 'Sometimes the questions are complicated and the answers are simple.', source: 'Dr. Seuss'}
];



/***
 * getRandomQuote function to choose a random quote from the quotes array
***/

function getRandomQuote(){
  let randomNum = Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[randomNum];
      return randomQuote;
  }



/***
 * `printQuote` function to check if a quote has a citation or year value and then print it to the page in an HTML string
***/

 function printQuote(){
   let buildQuote = getRandomQuote();
   let stringQuote = `<p class ="quote"> ${buildQuote.quote}` ;
   let stringSource = `<p class ="source">${buildQuote.source}`;
   let html = stringQuote + stringSource;
     if(buildQuote.citation === "Horton Hears A Who"){
          html +=  `'<span class="citation">${buildQuote.citation}</span>'`;
     } if(buildQuote.year === '551 BC - 479 BC'){
          html += `'<span class="year">${buildQuote.year}</span>'`;
     } 
      html += `</p>`;
      return document.getElementById('quote-box').innerHTML = html;

 }



 

 




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
  document.getElementById('load-quote').addEventListener("click", printQuote, false);








