/*******************
 ** Module es2022 **
 *******************/

// Typescript now supports the new STABLE module setting "es2022"
// tsconfig.json
// "module": "es2022"

// This enables Top-level await
// "target": "es2017" <-- requires this or higher
import { promiseGenerator } from "./01_utility_type_awaited";
const string = await promiseGenerator("make me into a promise");
