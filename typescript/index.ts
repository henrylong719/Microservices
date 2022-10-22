// generics

function echo<T>(arg: T): T {
  return arg;
}

const result = echo(true);

const result2 = echo('test');

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result3 = swap(['string', 123]);

console.log(result3);

interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength('str');
const obj = echoWithLength({ length: 10, width: 10 });
const arr2 = echoWithLength([1, 2, 3]);

// const withError = echoWithLength(13)

// generics class

class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    return this.data.push(item);
  }

  pop(): T {
    return this.data.shift();
  }
}

const queue = new Queue<number>();

queue.push(2332.2113);

console.log(queue.pop().toFixed());

const queue2 = new Queue<string>();

queue2.push('str');

console.log(queue2.pop().length);

// generics interface

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 12, value: 'TRY' };
let kp2: KeyPair<string, number> = { key: 'yoo', value: 123 };

let arr: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 2, 3];

interface IPlus<T> {
  (a: T, b: T): T;
}

function plus(a: number, b: number): number {
  return a + b;
}

function connect(a: string, b: string): string {
  return a + b;
}

function merge(a: string[], b: string[]): string[] {
  return a.concat(b);
}

const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
const c: IPlus<string[]> = merge;

console.log(c(['1', '2'], ['2', '5']));
