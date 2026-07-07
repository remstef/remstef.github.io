import themes from "daisyui/theme/object.js";
import { defaultDarkTheme, defaultLightTheme } from "./constants";

// export const themes: Readonly<Array<string>> = [
//   "light",
//   "dark",
//   "cupcake",
//   "bumblebee",
//   "emerald",

//   "corporate",
//   "synthwave",
//   "retro",
//   "cyberpunk",
//   "valentine",

//   "halloween",
//   "garden",
//   "forest",
//   "aqua",
//   "lofi",

//   "pastel",
//   "fantasy",
//   "wireframe",
//   "black",
//   "luxury",

//   "dracula",
//   "cmyk",
//   "autumn",
//   "business",
//   "acid",

//   "lemonade",
//   "night",
//   "coffee",
//   "winter",
//   "dim",

//   "nord",
//   "sunset",
//   "caramellatte",
//   "abyss",
//   "silk",
// ];

export const themeMapping: Record<string, string> = {};

Object.keys(themes).forEach((val) => {
  if (val === "dark") {
    themeMapping["daisyui-dark"] = "dark";
  } else if (val === "light") {
    themeMapping["daisyui-light"] = "light";
  } else if (val === defaultDarkTheme) {
    themeMapping["dark"] = defaultDarkTheme;
  } else if (val === defaultLightTheme) {
    themeMapping["light"] = defaultLightTheme;
  } else {
    themeMapping[val] = val;
  }
});

export const themeMappedNames: Array<string> = Object.keys(themeMapping);

export const themeMappedValues: Array<string> = Object.values(themeMapping);

export const themeNames: Array<string> = Object.keys(themes);
