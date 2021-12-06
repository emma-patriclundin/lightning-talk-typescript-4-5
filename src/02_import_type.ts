/*********************************
 ** Type-Only Import Specifiers **
 *********************************/

// In Typescript 3.8 the "type" keyword was introduced to explicitly import a type
import type { importMeType } from "../lib/index";
import { importMeValue } from "../lib/index";

// Problem is that we can't import both in one line if we want to use "type" explicitly
// import { importMeType, importMeValue } from "../lib/index";

// Typescript 4.5 makes it possible to explicitly do a type import in one line.
// import { type importMeType, importMeValue } from "../lib/index";

const makeTsHappy: importMeType = importMeValue;
