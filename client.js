console.log('YO VS JS');

// Object literal
const baseballHat = {
    type: 'cap',
    color:'black',
    size:'XL'
}

const sunHat = {
    type: 'sun',
    color: 'yellow',
    size: 'L'
}

console.log('baseballHat', baseballHat);
//will return object Object
console.log(`The baseballHat is : ${baseballHat}`);
console.log(`The baseballHat is : ${baseballHat.color} in size ${baseballHat.size}`);


sunHat.size = 'XL';
console.log(`after size change`, sunHat.size)
//can chang value but not object



let penguins = [
    {
        name: 'Emperor',
        colors: ['Black', 'White', 'Yellow'],
        size: 1.0,
        isCute: true
    },
    {
        name: 'Little',
        colors: ['Slate-blue', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Rockhopper',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.75,
        isCute: true
    },
    {
        name: 'African',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Gentoo',
        colors: ['Black', 'White'],
        size: 0.5,
        isCute: true
    },
    {
        name: 'Sea Gull',
        colors: ['Gray'],
        size: 0.25,
        isCute: false
    },
    {
        name: 'Chinstrap',
        colors: ['Black', 'White'],
        size: 0.25,
        isCute: true
    },
    {
        name: 'Macaroni',
        colors: ['Black', 'White', 'Yellow'],
        size: 0.5,
        isCute: true
    },
];




function onlyCutePenguins (array){
    let outputArray = [];

    for ( let thing of array) {
        console.log(`a thing`, thing);
    if (thing.isCute === true){
        outputArray.push(thing);
    }
}
    return outputArray
}

console.log(onlyCutePenguins(penguins))

//Object constructor functions
function Hat(type,color,size) {
    this.type = type;
    this.color = color;
    this.size = size;
}

const fancyHat = new Hat ('fancy','gold','M')
console.log penguins[i]
