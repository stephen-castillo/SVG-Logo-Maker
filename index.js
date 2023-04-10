const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes.js');

//console.log(sh);

const questions = [
    {
        name: 'slogan', 
        message: "What text do you want on the logo?", 
        type: 'input'
    },
    {
        name: "text_color", 
        message:"what color do you want your logo text?", 
        type: "input"
    },
    {
        name: "color", 
        message:"what color do you want your logo?", 
        type: "input"
    },
    {
        name: 'shape', 
        message: "What shape do you want your logo?", 
        type: 'list',
        choices: ['Square', 'Circle','Triangle']
    }
];

inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);
    let thingie = '';
    switch(answers.shape){
        case 'Square':
            thingie = new Square;
            break;

        case 'Triangle':
            thingie = new Triangle;
            break;
        
        case 'Circle':
            thingie = new Circle;
            break;
    }

    thingie.color = answers.color;
    console.log(thingie);
});

