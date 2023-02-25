function makeAQuote() {
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>setQuote(data))
}

const setQuote=quote=>{
    const quoteContainer=document.getElementById('quote-container');
    quoteContainer.innerHTML=quote.quote;
    // quoteContainer.appendChild(h3)

}
makeAQuote()