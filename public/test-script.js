const script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
script.type = "text/javascript";
script.onreadystatechange = handler;
script.onload = handler;

document.getElementsByTagName('head')[0].appendChild(script);

function handler(){

    console.log('This is coming from script tag api')

    const header = $("header.site-header").parent();

    const makeHeader = data => {
        header.prepend(`<div>${data}</div>`).css({'background-color': 'orange', 'text-align': 'center'});
    }

    fetch('https://cors-anywhere.herokuapp.com/https://a30dd80893d0.ngrok.io/api/products?shop=test-my-store-20.myshopify.com')
        .then(res => res.json())
        .then(data => {
            makeHeader(data.data)
        })
        .catch(error => console.log(error))
}