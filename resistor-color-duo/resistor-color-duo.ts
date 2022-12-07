interface Colors {
  [key: string]: number;
}

export function decodedValue([band1, band2]: string[]) {
  // interface Colours {
  //   black: number;
  //   brown: number;
  //   red: number;
  //   orange: number;
  //   yellow: number;
  //   green: number;
  //   blue: number;
  //   violet: number;
  //   grey: number;
  //   white: number;
  // }
  const resistorColors: Colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  let color1 = resistorColors[band1] * 10;
  console.log(resistorColors[band1]);
  let color2 = resistorColors[band2];

  return color1 + color2;
}
