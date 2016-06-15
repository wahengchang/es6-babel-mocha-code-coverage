import chai from 'chai';
chai.should();

import Rectangle from '../src/rectangle'

describe('Rectangle', () => {

    describe('width', () => {

        let rectangle;

        beforeEach(() => {
            rectangle = new Rectangle(10, 20);
        });

        it('should return the width of 10', () => {
            rectangle.width.should.equal(10);
        });

        it('should overwrite the width value and return 30', () => {
            rectangle.width = 30;
            rectangle.width.should.equal(30);
        });
        
    });
});