'use strict';

import colors from "./color-list.js";
import ntc from "./ntc.js";

colors.forEach(x => {
    let elem = document.createElement("a");
    elem.style = `background-color:#${x}`;
    elem.href = `?q=${x}`;
    elem.classList = 'sample';
    document.querySelector('.colours-container').appendChild(elem);
});

let q = new URLSearchParams(window.location.search);
q = decodeURI(q.get('q'));

if (q && q.length && q !== 'null') {
    ntc.init();
    const cat = ntc.name(q);
    document.querySelector('.colour').setAttribute('style', `border-color:${cat[0]} ${cat[0]} #${q} #${q}`);
    document.querySelector('.hex').innerHTML = cat[0];
    document.querySelector('.category').innerHTML = cat[1];
}