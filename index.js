const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes.js');
const SVG = require('./lib/svg.js');
var newsvg;
var svgData;
var slogan;
var shape;

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
    
    if(answers.slogan.length > 0 && answers.slogan.length < 4){
        slogan = answers.slogan;
    }else{
        console.log(`Please input up to 3 characters only. You entered ${answers.slogan.length} characters`);
        return;
    }

    text_color = answers.text_color;
    
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
    newsvg = new SVG();
    newsvg.setText(slogan, text_color);
    newsvg.setShape(shape);
    svgData = newsvg.render();
    //console.log(svgData);
    makeFile(svgData);
    
    
});

