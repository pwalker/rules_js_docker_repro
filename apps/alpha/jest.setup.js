import { TextDecoder, TextEncoder } from "util";
import "whatwg-fetch";

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

global.TextDecoder = TextDecoder;
global.TextEncoder = TextEncoder;
