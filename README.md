# @hikelibs/ts-math

`ts-math` is a versatile Next.js & TypeScript library for mathematical operations. It is designed to be simple to use and flexible for a variety of mathematical tasks.

## Installation

To install `ts-math` in your project, run:

```bash
  npm install @hikelibs/ts-math
```

## Usage
```typescript
import { v1 } from "@hikelibs/ts-math";

// Example: Addition
const sum = v1("add", ".", 2, 3, "[n] apples found!");

// Example: Unit Conversion
const convertedLength = v1("unit_conversion", ".", "meters", "feet", "[n] ft");
```

## Key Features
- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, division.
- **Unit Conversion**: Convert between different units for length, mass, volume, etc.
- **Trigonometric Functions**: Sin, cos, tan, etc.
- **Complex Number Operations**: Addition, subtraction, multiplication, division, conjugate, modulus.
- **Random Number Generation**: Uniform and normal distribution, random integers.
- **Statistical Functions**: Mean, standard deviation, mode, etc.
- **Matrix Operations**: Addition, multiplication, inversion, determinant.

## Other Features
- Review the source code of v1 in the src/index.ts (github.com/CakeWithPineapple/next-math).
- Use the playground at https://hikeland.nl/ts-math