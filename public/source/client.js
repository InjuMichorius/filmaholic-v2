import { search } from './search.js'
search()

//Create function that searches through movies on keypress in the search input

//Code for service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../serviceWorker.js')
            .then(reg => console.log('Service worker: registered'))
            .catch(err => console.log(`Service worker error: ${err}`))
    })
}