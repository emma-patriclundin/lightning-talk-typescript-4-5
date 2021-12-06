/********************************
 ** New Utility type - Awaited **
 ********************************/

// Documentation https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements

// Problem
// Imagine this function that returns a Promise
export function promiseGenerator<T>(value: T): Promise<T> {
  return Promise.resolve(value);
}

// Promise: Promise<string>
const promise = promiseGenerator("make me into a promise");

// How to extract the type "string" out from the Promise?

// Before we had to use a custom type for this (Typescript 4.1+);
type _Awaited<T> = T extends PromiseLike<infer U> ? U : T;
type unwrappedPromiseOld = _Awaited<typeof promise>;

// Using new Awaited utility type
type unwrappedPromiseNew = Awaited<typeof promise>;

/** Additional scenarios to what I just showed */

// A = string
type A = Awaited<Promise<string>>;

// B = number
type B = Awaited<Promise<Promise<number>>>;

// C = boolean | number | string
type C = Awaited<boolean | Promise<number> | Promise<Promise<string>>>;

/**
 * Adds overloads to Promise.all, Promise.race, Promise.allSettled, and Promise.any to leverage to Awaited<T>
 *
 * A scenario that threw an error in Typescript 4.4 or earlier
 */

declare function MaybePromise<T>(value: T): T | Promise<T> | PromiseLike<T>;

async function doSomething(): Promise<[number, number]> {
  const result = await Promise.all([MaybePromise(100), MaybePromise(200)]);
  // Error!
  //
  //    [number | Promise<100>, number | Promise<200>]
  //
  // is not assignable to type
  //
  //    [number, number]
  return result;
}
