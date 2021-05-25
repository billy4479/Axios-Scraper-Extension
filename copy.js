const b = document.getElementById('axios-scraper-copy-button');
if (b) {
    document.removeChild(b);
}

const copyButton = document.createElement('button');
copyButton.innerText = 'Copia HTML per calcolo media';
copyButton.id = 'axios-scraper-copy-button';
document.getElementsByTagName('ul')[1].appendChild(copyButton);
let first = true;
copyButton.addEventListener('click', async (e) => {
    e.preventDefault();
    if(first){
        await navigator.clipboard.writeText(document.getElementsByTagName('html')[0].outerHTML);
        copyButton.innerText = 'Copiato!'
        first = false;
    } else
        window.open('https://axios-media.netlify.app/');
})
