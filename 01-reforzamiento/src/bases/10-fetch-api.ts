import type { GiphyRandomResponse } from "./data/giphy.response";



const API_KEY = '7kmLwC9WGH8lRpLAnKbZPUL1BmPqbESC';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

// myRequest.then( (response) => { 
//     response.json().then( (data) => {
//         console.log(data)
//     })
// }).catch((err) => {
//     console.error(err)
// })

const createImageInsideDOM = (url: string) => {
    console.log(url);
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
.then( (response) => response.json())
.then(({data} : GiphyRandomResponse) => {
    createImageInsideDOM(data.images.original.url);
})
.catch((err) => {
    console.error(err)
})

