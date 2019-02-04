'use strict';

import colors from "./color-list.js";
import ntc from "./ntc.js";

colors.forEach(x => {
    let elem = document.createElement("a");
    elem.style = `background-color:#${x}`;
    elem.href = `#q=${x}`;
    elem.classList = 'sample';
    document.querySelector('.colours-container').appendChild(elem);
});

const fn = {
    getColour: () => {
        const hash = window.location.hash.substr(3);
        if (hash && hash.length && hash !== 'null') {
            ntc.init();
            const cat = ntc.name(hash);
            document.querySelector('.colour').setAttribute('style', `border-color:${cat[0]} ${cat[0]} #${hash} #${hash}`);
            document.querySelector('.hex').innerHTML = cat[0];
            document.querySelector('.category').innerHTML = cat[1];
        }
    }
}


window.onhashchange = fn.getColour;
fn.getColour();