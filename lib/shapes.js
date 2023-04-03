function makeShapes(color, shape, slogan){

    function Triangle(){
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
                stroke="green" fill="transparent" stroke-width="5"/>

            <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
        </svg>
    }

    function Circle(){
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
            <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
        </svg>

    }

    function Square(){
        <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
            <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
            <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
        </svg>
    }


    switch(shape){
        case 'triangle':
        shape = new Triangle();
        break;

        case 'circle':
        shape = new Circle();
        break;

        case 'square':
        shape = new Square();
        break;
    }
    return shape;
    //shape = shape.setColor(color);
    


}
/* shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />'); */