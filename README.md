This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
yarn
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Colors Challenge

### Stage 1

Backend service sends a color swatch which consists only RGB and HSL.

### Stage 2

Backend service sends a color swatch which consists RGB, HSL, and other type. For viewing purposes I use HEX as a new color model. You can check how a new type can add to the frontend. I also add the BRGB (the color swatch that mentioned in technical test) and how to access its values and use it.

## How-To

What changes need to be done in order to access new color space?

No need to do any changes from Component Level, All changes can be done inside helper functions.

```bash
From root, Go to: helpers -> appColors.js
```

- Update the 'colorSpaceSetter' object adding key value pair where key = 'type' of color space, value = 'a function' that generate the
  CSS value from the new color space.
- Implement the function that generate the CSS value from the new color space.
- Used two different GET APIs to show the difference.
