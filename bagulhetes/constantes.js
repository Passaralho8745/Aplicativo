import { useState } from 'react';
import { Dimensions } from 'react-native';




const C = {
    telax: Dimensions.get('window').width,
    telay: Dimensions.get('window').height,
    red: {r:255, g:0, b:0},
    white: {r:255, g:255, b:255},
    gray: {r:232, g:232, b:232}
}



rainbow = [
  0,
  0,
  0,
  0,
];
speed = 20;
claridade = 150;
function rainbowf(){
  if (rainbow[0] >= 255 && rainbow[3] == 0){ rainbow[3] = 1 }
  if (rainbow[1] >= 255 && rainbow[3] == 1){ rainbow[3] = 2 }
  if (rainbow[0] <= claridade && rainbow[3] == 2){ rainbow[3] = 3 }
  if (rainbow[2] >= 255 && rainbow[3] == 3){ rainbow[3] = 4 }
  if (rainbow[1] <= claridade && rainbow[3] == 4){ rainbow[3] = 5 }
  if (rainbow[0] >= 255 && rainbow[3] == 5){ rainbow[3] = 6 }
  if (rainbow[2] <= claridade && rainbow[3] == 6){ rainbow[3] = 1 }


  if (rainbow[3] == 0 ){ rainbow[0] = rainbow[0] + speed }
  if (rainbow[3] == 1 ){ rainbow[1] = rainbow[1] + speed }
  if (rainbow[3] == 2 ){ rainbow[0] = rainbow[0] - speed }
  if (rainbow[3] == 3 ){ rainbow[2] = rainbow[2] + speed }
  if (rainbow[3] == 4 ){ rainbow[1] = rainbow[1] - speed }
  if (rainbow[3] == 5 ){ rainbow[0] = rainbow[0] + speed }
  if (rainbow[3] == 6 ){ rainbow[2] = rainbow[2] - speed }
  return "rgb("+rainbow[0]+","+rainbow[1]+","+rainbow[2]+")";
}


function lerp(color1, color2, t) {
    const r = Math.round(color1.r * (1 - t) + color2.r * t);
    const g = Math.round(color1.g * (1 - t) + color2.g * t);
    const b = Math.round(color1.b * (1 - t) + color2.b * t);
    
    return `rgb(${r}, ${g}, ${b})`;
}

function colorstring(color) {
    const { r, g, b } = color;
    return `rgb(${r}, ${g}, ${b})`;
}

export {C, rainbowf, lerp, colorstring};
