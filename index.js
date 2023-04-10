const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');

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

function makeFile(data) {
    fs.writeFile('./deliverable/logo.svg', data, err => {
        if(err){
            console.log(err);
        }
    });
}

inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);
    let shape = '';
    switch(answers.shape){
        case 'Square':
            shape = new Square;
            break;

        case 'Triangle':
            shape = new Triangle;
            break;
        
        case 'Circle':
            shape = new Circle;
            break;
    }

    shape.setColor(answers.color);
    
    
    
});

