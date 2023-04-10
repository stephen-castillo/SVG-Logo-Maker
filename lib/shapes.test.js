const {Circle, Square, Triangle} = require('./shapes.js');

//Test Circle shape
describe('Circle', () => {
    test('Clicle rendered correctly', () => {
        const shape = new Circle;
        let color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}" />`);

    });
});

//Test Square shape
describe('Square', () => {
    test('Square rendered correctly', () => {
        const shape = new Square;
        let color = 'Yellow';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}" />`);

    });
});

//Test Triangle shape
describe('Triangle', () => {
    test('Triangle rendered correctly', () => {
        const shape = new Triangle;
        let color = 'silver';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}" />`);

    });
});