function isHexVal(str) {
    const regx = /^#([0-9A-F]{3}){1,2}$/i
    return regx.test(str);
}

function decimalToHex(val) {
    const hex = parseInt(val).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

export function parseSearchedInput(searchedInput) {
    let hex = '';
    if(isHexVal(searchedInput)) {
        hex = searchedInput;
    } else {
        const rgbValues = searchedInput.substring(4, searchedInput.length-1).split(',');
        hex = '#' + decimalToHex(rgbValues[0]) + decimalToHex(rgbValues[1]) + decimalToHex(rgbValues[2]);
    }
    return hex;
}

export function hexToRgb(hex) {
    const r = parseInt(hex.slice(1,3), 16);
    const g = parseInt(hex.slice(3,5), 16);
    const b = parseInt(hex.slice(5,7), 16);

    return { r, g, b};
}


export function hexToHsl(hex) {
    let {r, g, b} = hexToRgb(hex);
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; 
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return `${Math.round(h * 360)}, ${Math.round(s * 100)}, ${Math.round(l * 100)}`;
    
}


export function calcEuclideanDistance(colour1, colour2) {
    const rgb1 = hexToRgb(colour1);
    const rgb2 = hexToRgb(colour2);

    const deltaR = rgb1.r - rgb2.r;
    const deltaG = rgb1.g - rgb2.g;
    const deltaB = rgb1.b - rgb2.b;

    return Math.sqrt(Math.pow(deltaR,2)+Math.pow(deltaG,2)+Math.pow(deltaB,2));
}

export function sortColoursBySimilarity(inputValue, colourList) {
    const sortedColours = colourList.sort((colourA, colourB) => {
        const distanceA = calcEuclideanDistance(inputValue, colourA.hex);
        const distanceB = calcEuclideanDistance(inputValue, colourB.hex);

        return distanceA - distanceB;
    });
    return sortedColours;
}