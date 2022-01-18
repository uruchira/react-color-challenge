/*
  Current Standard Color Model (CSS3)
  You need to add a function in order to get the
  CSS value from the new color model, e.g. rgb()
*/

const setRGBValue = (rgbObject) => {
  const { red, green, blue } = rgbObject;
  return `rgb(${red}, ${green}, ${blue})`;
};

const setHSLValue = (hslObject) => {
  const { hue, saturation, lightness } = hslObject;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const setHEXValue = (hexObject) => {
  return hexObject.value;
};

/*
  New Standard Color Model (CSS4)
  You need to add a function in order to get the
  CSS value from the new color model, e.g. hwb()
*/
const setHWBValue = (hwbObject) => {
  const { hue, whiteness, blackness } = hwbObject;
  return `hwb(${hue}, ${whiteness}%, ${blackness}%)`;
};

/*
  Custom Color Model 
  BRGB : The example given in technical test.
  Here also need to add a function in order to get the
  CSS value from the new color model 'brgb'. And not like
  previous ones you need to convert it into standard color
  model values in order to access by CSS rules.
*/
/*
const setBRGBValue = (brgbObject) => {
  const { b_red, b_green, b_blue } = toRGB(brgbObject);
  return `rgb(${b_red}, ${b_green}, ${b_blue})`;
};
*/

// ------------------------------------------------------------------------

/*
  You can add the 'type' of the new color model (e.g. hwb, cmyk, or 'brgb')
  along with its relevant function that gets CSS value with correct format.
*/
const colorModelSetter = {
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
    const colorModel = colorModelSetter[colour.type];
    return { id: colour.id, value: colorModel(colour) };
  });
};

// Project Team 2
export const getColorValuesForProject2 = (colorPalettes) => {
  return colorPalettes.map((colorPalette) => {
    const colorModel = colorModelSetter[colorPalette.type];
    return {
      id: colour.id,
      type: colorPalette.type,
      value: colorModel(colour),
    };
  });
};
