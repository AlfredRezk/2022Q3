// ● Take three integer numbers, representing the red, green and blue values of an RGB color, each
// within range [0...255]
// ● Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// ● Return undefined if any of the input parameters are of invalid type or not in the expected range

const rgbToHexColor = require('./rgbToHex');
const { should, expect, assert } = require('chai')
should();


describe('Testing rgbToHex Function', () => { 
  it('should take 3 integer numbers each within range [0-255]', () => { 
    assert.isString(rgbToHexColor(155, 160, 120));
    expect(rgbToHexColor(155, 160, 120)).to.be.a('string');
    assert.isUndefined(rgbToHexColor(300, 400, 600));
  })
  it('should return the same color in hex format as a string', () => { 
    //rgb(37,95,59)= "#255F3B"
    assert.equal(rgbToHexColor(37, 95, 59), "#255F3B");
    expect(rgbToHexColor(255,255, 255)).to.be.equal("#FFFFFF");
    
  })
  it('should return undefined if any of the inputs are invalid type or not in the expected range', () => { 

    assert.equal(rgbToHexColor(-2, -3, -4), undefined);
    assert.isUndefined(rgbToHexColor(300, 400,500));
    expect(rgbToHexColor("1", "2", "3")).to.be.equal(undefined);
  })
})