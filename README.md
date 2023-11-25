# useMath

`useMath` is a versatile Next.js & TypeScript library for mathematical operations. It is designed to be simple to use and flexible for a variety of mathematical tasks.

## Installation

To install `useMath` in your project, run:

```bash
  npm install next-math
```

## Usage
```typescript
import { v1 } from "next-math";

// Example: Addition
const sum = useMath("add", ".", 2, 3, "[n] apples found!");

// Example: Unit Conversion
const convertedLength = useMath("unit_conversion", ".", "meters", "feet", "[n] ft");
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
- Use the playground at https://hikeland.nl/next-math