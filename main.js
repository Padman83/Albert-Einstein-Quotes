var quotes = [ {quote:"Anyone who has never made a mistake has never tried anything new.",source: "Albert Einstein"},
               {quote:"It is not that I'm so smart. But I stay with the questions much longer",source: "Albert Einstein"},
               {quote:"You never fail until you stop trying.",source: "Albert Einstein"},
               {quote:"Somewhere, something incredible is waiting to be known.", source: "Carl Sagan"},
               {quote:"Any fool can know. The point is to understand.",source: "Albert Einstein"},
               {quote:"I have no special talents. I am only passionately curious.",source: "Albert Einstein"},
               {quote:"Reality is merely an illusion, albeit a very persistent one.",source: "Albert Einstein"},
               {quote:"Life is like riding a bicycle.To keep your balance, you must keep moving.",source: "Albert Einstein"},
               {quote:"We can’t solve problems by using the same kind of thinking we used when we created them.", source:"Albert Einstein"},
               {quote:"The measure of intelligence is the ability to change.",source:"Albert Einstein"},
               {quote:"Creativity is intelligence having fun.",source:"Albert Einstein"},
               {quote:"In the middle of difficulty lies opportunity.", source:"Albert Einstein"},
               {quote:"Imagination is everything. It is the preview of life's coming attractions.",source:"Albert Einstein"},
               {quote:"The important thing is not to stop questioning. Curiosity has its own reson for existing.", source:"Albert Einstein"},
               {quote:"Time is an illusion.",source:"Albert Einstein"},
               {quote:"One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time.", source:"Carl Sagan"},
               {quote:"I must be willing to give up what i am in order to become what I will be.",source:"Albert Einstein"},
               {quote:"I never made one of my discoveries through the process of rational thinking.",source:"Albert Einstein"},
               {quote:"Once we accept our limits, we go beyond them.",source:"Albert Einstein"},
               {quote:"Genius is 1% talent and 99% percent hard work.",source:"Albert Einstein"},
               {quote:"Out of clutter, find simplicity.",source:"Albert Einstein"},
               {quote:"Nothing happens until something moves.",source:"Albert Einstein"},
               {quote:"If you want to live a happy life, tie it to a goal, not to people or things.",source:"Albert Einstein"},
               {quote:"Imagination is the highest form of research.",source:"Albert Einstein"},
               {quote:"For small creatures such as we the vastness is bearable only through love.", source:"Carl Sagan"},
               {quote:"Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",source:"Albert Einstein"},
               {quote:"If you wish to make an apple pie from scratch, you must first invent the universe.",source:"Carl Sagan"},

];

function getRandomQuote(array) {
    return array[Math.floor(Math.random()*array.length)]
}

function printQuote(){
    var quoteObj = getRandomQuote(quotes);
    var string = "";

    string = '<p class="quote"> ' + quoteObj.quote + '</p>';
    string += '<p class="source">' + quoteObj.source;

    if (quoteObj.hasOwnProperty('book')) {
        string += '<span class="book">' + quoteObj.citation + '</span>';
    };

    document.getElementById('quote-box').innerHTML = string;
    }




printQuote();

var quoteTimer = setInterval(printQuote, 6000);

document.getElementById('viewQuote').addEventListener("click", printQuote, false)

document.getElementById('viewQuote').onclick = function() {
    clearInterval(quoteTimer);
    quoteTimer = setInterval(printQuote, 6000);
};