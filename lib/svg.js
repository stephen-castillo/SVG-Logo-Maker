class SVG{
    constructor(){
        this.text = '';
        this.shape = '';
    }
    setText(slogan, text_color){
        this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${text_color}">${slogan}</text>`;
    }

    setShape(shape){
        this.shapeForm = shape.render();
    }

    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeForm}${this.text}</svg>`;
    }

}
module.exports = SVG;