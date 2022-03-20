const quotes=[
    {quote:"Being happy never goes out of style.",
    author:"Lilly Pulitzer"},

    {quote:"Life is either a great adventure or nothing.",
    author:"Helen Keller"},

    {quote:"All you need in this life is ignorance and confidence then success is sure.",
    author:"Mark Twain"},

    {quote:"Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
    author:"Barbara Bush"},

    {quote:"All your life, you will be faced with a choice. You can choose love or hate…I choose love.",
    author:"Johnny Cash"},

    {quote:"I don't go by the rule book…I lead from the heart, not the head.",
    author:"Princess Diana"},

    {quote:"The best thing to hold onto in life is each other.",
    author:"Audrey Hepburn"},

    {quote:"If you don't like the road you're walking, start paving another one.",
    author:"Dolly Parton"},

    {quote:"Despite the forecast, live like it's spring.",
    author:"Lilly Pulitzer"},

    {quote:"A life is not important except in the impact it has on other lives.",
    author:"Jackie Robinson"},
]
const book = document.querySelector(".book");
const quote = document.querySelector(".book .quote");
const author = document.querySelector(".book .author");
const randNum = Math.floor(Math.random() * 10);
const todaysQuote = quotes[randNum];

quote.innerText = todaysQuote.quote;
author.innerText = "-"+todaysQuote.author;

const img = document.createElement("img");
img.src = `./img/${randNum}.jpg`;
img.alt = "bgimg";
img.classList.add("bgImg");
book.appendChild(img);