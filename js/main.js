var arrayofquote=[
    {
        "quote": `Be yourself; everyone else is already taken.`,
        "author" : `Oscar Wilde`
        
    },
    {
        "quote": ` You only live once, but if you do it right, once is enough. `,
        "author" : `Mae West`
        
    },
    {
        "quote": ` Be the change that you wish to see in the world. `,
        "author" : `Mahatma Gandhi`
      
    },
    {
        "quote": ` It is better to be hated for what you are than to be loved for what you are not. `,
        "author" : `Andre Gide, Autumn Leaves`
       
    },
    {
        "quote": ` Always forgive your enemies; nothing annoys them so much. `,
        "author" : `Oscar Wilde`
       
    },
    {
        "quote": ` A friend is someone who knows all about you and still loves you. `,
        "author" : `Elbert Hubbard`
       
    },
    {
        "quote": `If you tell the truth, you don't have to remember anything.`,
        "author" : ` Mark Twain`
       
    },
    {
        "quote": `So many books, so little time.`,
        "author" : ` Frank Zappa`
        
    },

];
function generatequote(){
    console.log (Math.floor(Math.random()*arrayofquote.length+1));
    document.getElementById("quoteoutput").innerHTML= arrayofquote[Math.floor(Math.random()*arrayofquote.length+1)].quote;
    document.getElementById("authoroutput").innerHTML= arrayofquote[Math.floor(Math.random()*arrayofquote.length+1)].author;
}


