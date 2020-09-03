/* eslint-disable */
const name = 'wes';
const middle ="topher"; 
const last = `santi`;

const sentence = 'she\'s so cute';
const sentence2 = `she's so cute`;

//backtick in multiple lines

const song =`helloooo


I'm 
having 


fun`;

let helloConcatenation = "Hola " + name +" "+ last + " espero estes muy bien";
let helloInterpolation = `Hola ${name} ${last} espero estés muyy bien`

const html = `
    <div>
        <h2>Hola</h2>
        <p>Soy un paragrafo</p>
    </div>
`;

//adding html
document.body.innerHTML = html;

//Numbers 

// / + - *     
let concatenationNumber = 1 + "1";

//output: "11"

const person ={
    first: 'Santi',
    last: 'alvarez',
    age: 29
}

//undefined 

let cat;
console.log(cat)

//null 
const carro= {
    marca:null,
    modelo: '23x4'
}