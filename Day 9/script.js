const quotes = [
    {
        quote:
            "The only true wisdom is in knowing you know nothing.",
        author: "Socrates"
    },
    {
        quote:
            "Anyone can deal with victory. Only the mighty can bear defeat",
        author: "Adolf Hitler"
    },
    {
        quote:
            "Code is like humor. When you have to explain it, It's Bad.",
        author: "Cory House"
    },
    {
        quote: "The way to get started is to quit talking and begin doing. ",
        author: "Walt Disney"
    },
    {
        quote:
            "If life were predictable it would cease to be life, and be without flavor.  ",
        author: "Eleanor Roosevelt"
    },
    {
        quote:
            "It is during our darkest moments that we must focus to see the light",
        author: " Aristotle"
    }
];

//Button Generate Quotes
const btn = document.querySelector('.generate');

//Add Event Listener
btn.addEventListener('click', () => {

    //Get Random text of Quotes
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);

    //Now Show Text On Screen
    document.querySelector('.quote').innerText = quotes[random].quote;
    document.querySelector('.author').innerText = quotes[random].author;

});