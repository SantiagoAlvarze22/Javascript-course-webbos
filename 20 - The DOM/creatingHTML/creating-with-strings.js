const item = document.querySelector('.item');

const src = 'https://source.unsplash.com/random/300x300';
const desc = `Cute pic`;
const myHTML = `
    <div className="wrapper">
        <h2>${desc}</h2>
        <img src="${src}" alt="${desc}"/>
    </div>
    
    `;
// item.innerHTML = myHTML;

// turn string into a DOM element

const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
