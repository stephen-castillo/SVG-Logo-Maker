const inquirer = require('inquirer');
var sh = require('./lib/shapes.js');

const questions = [
    {
        name: "color", 
        message:"what color do you want your logo?", 
        type: "input"
    },
    {
        name: 'shape', 
        message: "What shape do you want your logo?", 
        type: 'list',
        choices: ['square', 'circle','triangle']
    },
    {
        name: 'slogan', 
        message: "What text do you want on the logo?", 
        type: 'input'
    }
]

inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);
    sh.makeShape(answers.color, answers.shape, answers.slogan);
});