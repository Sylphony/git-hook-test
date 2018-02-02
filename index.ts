interface ITest {
  str: string;
  num: number;
}

// This code should be prettied
const testObj: ITest = {
  str: "Hello",
  num: 5
};

const testStr = "world";

console.log(testObj, testStr);
