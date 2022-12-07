export function decodedResistorValue(value1:string, value2: string, value3: string):void {
  const ohmNumbers: {
    black: number;
    brown: number;
    red: number;
    orange: number;
    yellow: number;
    green: number;
    blue: number;
    violet: number;
    grey: number;
    white: number;  } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  }
  // let zeros:string = ohmNumbers[value3]*"0"
  console.log(ohmNumbers[value1])
  // return `${ohmNumbers[value1]}${ohmNumbers[value2]}`
}
