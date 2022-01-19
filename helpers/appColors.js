/*
  Current Standard Color Space (CSS3 Property)

  You need to add a function in order to get the
  CSS value from the relevant color space, e.g. rgb
*/

const setRGBValue = (rgbObject) => {
  const { red, green, blue } = rgbObject;
  return `rgb(${red}, ${green}, ${blue})`;
};

const setHSLValue = (hslObject) => {
  const { hue, saturation, lightness } = hslObject;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

// This is not a correct example for color space, but it is added
// in order to show how a new color space working visually in Home Page.
const setHEXValue = (hexObject) => {
  return hexObject.value;
};

/*
  New Standard Color Space (CSS4 Property)

  Here also, you need to add a function to get
  CSS value from the new color space object, e.g. hwb
  https://www.w3schools.com/colors/colors_hwb.asp

  ***This function is added to show the extensibility
*/
const setHWBValue = (hwbObject) => {
  const { hue, whiteness, blackness } = hwbObject;
  return `hwb(${hue}, ${whiteness}%, ${blackness}%)`;
};

/*
  Custom Color Space (Example given in technical test)

  Not like previous one, here you need to convert it into 
  standard color space values in order to get CSS value. 
  e.g. toRGB(), https://www.w3schools.com/lib/w3color.js
  
  ***This function is added to show the extensibility

const setBRGBValue = (brgbObject) => {
  const { b_red, b_green, b_blue } = toRGB(brgbObject);
  return `rgb(${b_red}, ${b_green}, ${b_blue})`;
};
*/

// ------------------------------------------------------------------------

/*
  You can add the 'type' of the color space (e.g. rgb, hwb, or 'brgb')
  along with its relevant function reference that gets CSS value.
*/
const colorSpaceSetter = {
  rgb: setRGBValue,
  hsl: setHSLValue,
  hex: setHEXValue,
  hwb: setHWBValue,
  //brgb: setBRGBValue,
};

// ------------------------------------------------------------------------

/*
  Different project might need different payloads to access the colors,
  so here you can config the color list according to the its payload.
*/

// Project Team 1
export const getColorValuesForProject1 = (colours) => {
  return colours.map((colour) => {
    const colorSpace = colorSpaceSetter[colour.type];
    return { id: colour.id, value: colorSpace(colour) };
  });
};

/*
  This can be found in a different project, inside their
  helper functions section, so need to do any Component
  level change to access new type of color spaces. 
*/

// Project Team 2
/* 
export const getColorValuesForProject2 = (colorPalettes) => {
  return colorPalettes.map((colorPalette) => {
    const colorSpace = colorSpaceSetter[colorPalette.type];
    return {
      id: colour.id,
      type: colorPalette.type,
      value: colorSpace(colour),
    };
  });
};
*/
