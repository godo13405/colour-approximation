'use strict';

import colourNames from "./colours.js";
import ntc from "./ntc.js";

colourNames.forEach(x => {
    let elem = document.createElement("div");
    elem.style = `background-color:#${x[0]}`;
    elem.classList = 'sample';
    document.querySelector('.colours-container').appendChild(elem);
});

let q = new URLSearchParams(window.location.search);
q = decodeURI(q.get('q'));

if (q && q.length && q !== 'null') {
    ntc.init();
    const cat = ntc.name(q);
    document.querySelector('.colour').setAttribute('style',`border-color:${cat[0]}`);
    document.querySelector('.hex').innerHTML = cat[0];
    document.querySelector('.category').innerHTML = cat[1];
}