/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*This program creates an app that displays a random famous quote with a random background color. 
The app automatically refreshes until the user exits the program.
*/

let quotes = [
  /*The array of quote objects stores five actual quotes and sources with optional citations and/or year for each object in the array.
  Each object has a key and value.*/
  {
    quote: 'It\’s the possibility of having a dream come true that makes life interesting.',
    source: 'The Alchemist',
    genre: 'Adventure fiction, Science',
    citation: '  Coelho, Paulo. The Alchemist. San Francisco: HarperSanFrancisco',
    year: '1998'
  },
  {
    quote: 'You never really understand a person until you consider things from his point of view … Until you climb inside of his skin and walk around in it.',
    source: 'To Kill a Mockingbird',
    citation: '  Lee, Harper. To Kill a Mockingbird. New York :Harper Perennial Modern Classics',
    year: '2006'
  },
  {
    quote: 'There is no greater agony than bearing an untold story inside you.',
    source: 'I Know Why the Caged Bird Sings',
    citation: 'Maya Angelou'
  },
  {
    quote: 'Wherever you fly, you’ll be best of the best. Wherever you go, you will top all the rest. Except when you don\'t.\
      Because, sometimes, you won\’t. I’m sorry to say so but, sadly, it\’s true that Bang-ups and Hang-ups can happen to you.',
    genre: 'Fiction',
    source: 'Oh\! The Places You\'ll Go by Dr. Seuss',
    year: '1990'
  },
  {
    quote: 'We accept the love we think we deserve.',
    source: 'The Perks of Being a Wallflower ',
    citation: ' Chbosky, Stephen. The Perks of Being a Wallflower. New York: Pocket Books ',
    year: '1999'
  }
];
console.log(quotes);


function randomColor() {
  /*The randomColor function generates random colors, and calls the random colors in the printQuotes function below.*/
  return Math.floor(Math.random() * 256);
}

function getRandomQuote() {
  /***
  The `getRandomQuote` function completes three tasks. First, the program generates a random number between 0 and the last index in the array.
  Second, the program uses the random number and box notation to grab a random item from the quotes array.
  And lastly, the function returns a random quote.
***/
  let number = Math.floor(Math.random() * quotes.length);
  let random_quote = quotes[number];
  return random_quote;
}

function refresh() {
  /*The refresh function refreshes the current page changing the quotes automatically\
  after a certain amount of time passes per the setInterval method.
  The setInterval method calls the function printQuote and refreshes the page every 2000 millseconds\
  or until the window is closed.
  */
  let time = setInterval(printQuote, 2000);
}

function printQuote() {
/***
  The `printQuote` function prints random quotes to the page initiating the HTML string format,\
  while using conditional statements to check additional properties (citation and/or year).

  The content of an HTML element was modified by setting the innerHTML property to 'words'
  defining the HTML code and the text between the element's opening and closing tag, \
  and then concatenated the contents into one string.

  The randomColor function is called changing the background each time the quote changes.

***/  
  let result = getRandomQuote();
  let words = " ";
  let bgColor = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")";

  words += '<p class="quote">' + result.quote + '</p>';
  words += '<p class="source">' + result.source;

  if (result.citation) {
    words += '<span class="citation">' + result.citation + '</span>'
  }
  if (result.year) {
    words += '<span class="year">' + result.year + '</span>'
  }
  if(result.genre){
    words += '<span class="genre">' + result.genre + '</span>'
  }
  words += '</p>';
  document.getElementById('quote-box').innerHTML = words;

  document.body.style.background = bgColor;
  document.getElementById('quote-box').innerHTML = words;
}

/***
 The refresh function automatically initiates the "Show another quote" button and the event listener 
 below, which triggers, calls, or "invoke", the `printQuote` function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

refresh();

/* Student Comments:
  I am trying for the "Exceeds Expectations" grade and want to received as much feedback as possible.
*/
