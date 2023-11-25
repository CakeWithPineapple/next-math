type PercentageContext = {
  context: "get_percentage";
  part: number;
  whole: number;
  decimal_places?: number;
  formatter?: string;
};
type AddContext = {
  context: "add";
  addend_one: number;
  addend_two: number;
  decimal_places?: number;
  formatter?: string;
};
type SubtractContext = {
  context: "subtract";
  minuend_one: number;
  minuend_two: number;
  decimal_places?: number;
  formatter?: string;
};
type DivideContext = {
  context: "divide";
  dividend: number;
  divisor: number;
  decimal_places?: number;
  formatter: string;
};
type MultiplyContext = {
  context: "multiply";
  factor_one: number;
  factor_two: number;
  decimal_places?: number;
  formatter?: string;
};
type TrigonometricContext = {
  context: "sin" | "cos" | "tan";
  angle: number;
  decimal_places?: number;
  formatter?: string;
};
type HyperbolicTrigonometricContext = {
  context: "sinh" | "cosh" | "tanh";
  angle: number;
  decimal_places?: number;
  formatter?: string;
};
type LogarithmicContext = {
  context: "ln" | "log10";
  value: number;
  decimal_places?: number;
  formatter?: string;
};
type ExponentialContext = {
  context: "exp";
  value: number;
  decimal_places?: number;
  formatter?: string;
};
type PowerAndRootContext = {
  context: "pow" | "sqrt" | "root";
  base: number;
  exponent_or_degree: number;
  decimal_places?: number;
  formatter?: string;
};
type AbsoluteValueContext = {
  context: "abs";
  value: number;
  decimal_places?: number;
  formatter?: string;
};
type RoundingContext = {
  context: "ceil" | "floor" | "round";
  value: number;
  decimal_places?: number;
  formatter?: string;
};
type StatisticalContext = {
  context: "mean" | "median" | "mode" | "variance" | "std_dev";
  data: number[];
  decimal_places?: number;
  formatter?: string;
};
type MatrixAddContext = {
  context: "matrix_add";
  matrixA: number[][];
  matrixB: number[][];
  decimal_places?: number;
  formatter?: string;
};
type MatrixMultiplyContext = {
  context: "matrix_multiply";
  matrix1: number[][];
  matrix2: number[][];
  decimal_places?: number;
  formatter?: string;
};
type MatrixInvertContext = {
  context: "matrix_invert";
  matrix: number[][];
  decimal_places?: number;
  formatter?: string;
};
type MatrixDeterminantContext = {
  context: "matrix_determinant";
  matrix: number[][];
  decimal_places?: number;
  formatter?: string;
};
type PrimeCheckContext = { context: "is_prime"; number: number };
type PrimeGenerateContext = { context: "generate_primes"; upTo: number };
type GCDContext = { context: "gcd"; numbers: number[] };
type LCMContext = { context: "lcm"; numbers: number[] };
type ComplexAddContext = {
  context: "complex_add";
  real1: number;
  imag1: number;
  real2: number;
  imag2: number;
  decimal_places?: number;
  formatter?: string;
};
type ComplexSubtractContext = {
  context: "complex_subtract";
  real1: number;
  imag1: number;
  real2: number;
  imag2: number;
  decimal_places?: number;
  formatter?: string;
};
type ComplexMultiplyContext = {
  context: "complex_multiply";
  real1: number;
  imag1: number;
  real2: number;
  imag2: number;
  decimal_places?: number;
  formatter?: string;
};
type ComplexDivideContext = {
  context: "complex_divide";
  real1: number;
  imag1: number;
  real2: number;
  imag2: number;
  decimal_places?: number;
  formatter?: string;
};
type ComplexConjugateContext = {
  context: "complex_conjugate";
  real: number;
  imag: number;
  decimal_places?: number;
  formatter?: string;
};
type ComplexModulusContext = {
  context: "complex_modulus";
  real: number;
  imag: number;
  decimal_places?: number;
  formatter?: string;
};
type DerivativeContext = {
  context: "derivative";
  func: (x: number) => number;
  point: number;
  h?: number;
};
type IntegralContext = {
  context: "integral";
  func: (x: number) => number;
  a: number;
  b: number;
  n?: number;
};
type LimitContext = {
  context: "limit";
  func: (x: number) => number;
  point: number;
  approaching?: "left" | "right" | "both";
};
type ContinuityContext = {
  context: "continuity";
  func: (x: number) => number;
  point: number;
};
type RandomUniformContext = {
  context: "random_uniform";
  min: number;
  max: number;
};
type RandomNormalContext = {
  context: "random_normal";
  mean: number;
  stddev: number;
};
type RandomIntegerContext = {
  context: "random_integer";
  min: number;
  max: number;
};
type UnitConversionContext = {
  context: "unit_conversion";
  value: number;
  fromUnit: string;
  toUnit: string;
  formatter?: string;
};

type MainContext =
  | PercentageContext
  | AddContext
  | SubtractContext
  | DivideContext
  | MultiplyContext
  | TrigonometricContext
  | HyperbolicTrigonometricContext
  | LogarithmicContext
  | ExponentialContext
  | PowerAndRootContext
  | AbsoluteValueContext
  | RoundingContext
  | StatisticalContext
  | MatrixAddContext
  | MatrixMultiplyContext
  | MatrixDeterminantContext
  | MatrixInvertContext
  | PrimeCheckContext
  | PrimeGenerateContext
  | GCDContext
  | LCMContext
  | ComplexAddContext
  | ComplexSubtractContext
  | ComplexMultiplyContext
  | ComplexDivideContext
  | ComplexConjugateContext
  | ComplexModulusContext
  | DerivativeContext
  | IntegralContext
  | LimitContext
  | ContinuityContext
  | RandomUniformContext
  | RandomNormalContext
  | RandomIntegerContext
  | UnitConversionContext;

export const v1 = (
  context: MainContext["context"],
  decimalSeparator: "." | "," = ".",
  ...args: any[]
): string | number => {
  const convertToString = (result: number | string): string => {
    return typeof result === "number" ? result.toString() : result;
  };

  if (typeof context !== "string") {
    return `ERR: useMath | Type "string" is not assignable to variable context. Please check the context list. EXIT_CODE: 403_context_does_not_exist`
  }

  switch (context) {
    case "get_percentage": {
      const [part, whole, decimal_places = 0, formatter = "[n]%"] = args;
      if (
        args.length < 2 ||
        typeof part !== "number" ||
        typeof whole !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const percentage = (part / whole) * 100;
      return applyFormatter(
        formatter,
        percentage.toFixed(decimal_places)
      ).replace(".", decimalSeparator);
    }
    case "add": {
      const [addend_one, addend_two, decimal_places = 0, formatter = "[n]"] =
        args;
      if (
        args.length < 2 ||
        typeof addend_one !== "number" ||
        typeof addend_two !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const sum = (addend_one + addend_two).toFixed(decimal_places);
      return applyFormatter(formatter, sum).replace(".", decimalSeparator);
    }
    case "subtract": {
      const [minuend_one, minuend_two, decimal_places = 0, formatter = "[n]"] =
        args;
      if (
        args.length < 2 ||
        typeof minuend_one !== "number" ||
        typeof minuend_two !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const difference = (minuend_one - minuend_two).toFixed(decimal_places);
      return applyFormatter(formatter, difference).replace(
        ".",
        decimalSeparator
      );
    }
    case "divide": {
      const [dividend, divisor, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 2 ||
        typeof dividend !== "number" ||
        typeof divisor !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const quotient = (dividend / divisor).toFixed(decimal_places);
      return applyFormatter(formatter, quotient).replace(".", decimalSeparator);
    }
    case "multiply": {
      const [factor_one, factor_two, decimal_places = 0, formatter = "[n]"] =
        args;
      if (
        args.length < 2 ||
        typeof factor_one !== "number" ||
        typeof factor_two !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const product = (factor_one * factor_two).toFixed(decimal_places);
      return applyFormatter(formatter, product).replace(".", decimalSeparator);
    }
    case "sin": {
      const [angle, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof angle !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.sin(angle);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "cos": {
      const [angle, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof angle !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.cos(angle);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "tan": {
      const [angle, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof angle !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.tan(angle);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "sinh": {
      const [angle, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof angle !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.sinh(angle);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "cosh": {
      const [angle, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof angle !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.cosh(angle);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "tanh": {
      const [angle, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof angle !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.tanh(angle);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "ln": {
      const [value, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof value !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.log(value);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "log10": {
      const [value, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof value !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.log10(value);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "exp": {
      const [value, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof value !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.exp(value);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "pow": {
      const [base, exponent_or_degree, decimal_places = 0, formatter = "[n]"] =
        args;
      if (
        args.length < 2 ||
        typeof base !== "number" ||
        typeof exponent_or_degree !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.pow(base, exponent_or_degree);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "sqrt": {
      const [base, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof base !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.sqrt(base);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "root": {
      const [base, exponent_or_degree, decimal_places = 0, formatter = "[n]"] =
        args;
      if (
        args.length < 2 ||
        typeof base !== "number" ||
        typeof exponent_or_degree !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.pow(base, 1 / exponent_or_degree);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "abs": {
      const [value, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof value !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.abs(value);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "ceil": {
      const [value, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof value !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.ceil(value);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "floor": {
      const [value, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof value !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = Math.floor(value);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "round": {
      const [value, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        typeof value !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result =
        Math.round(value * 10 ** decimal_places) / 10 ** decimal_places;
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "mean": {
      const [data, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        !Array.isArray(data) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const sum = data.reduce((acc: number, value: number) => acc + value, 0);
      const mean = sum / data.length;
      return applyFormatter(formatter, mean.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "median": {
      const [data, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        !Array.isArray(data) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const sortedData = data.slice().sort((a: number, b: number) => a - b);
      const middleIndex = Math.floor(sortedData.length / 2);
      const median =
        sortedData.length % 2 === 0
          ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
          : sortedData[middleIndex];
      return applyFormatter(formatter, median.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "mode": {
      const [data, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        !Array.isArray(data) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const frequencyMap = new Map<number, number>();
      data.forEach((value: number) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });

      let mode: number | null = null;
      let maxFrequency = 0;
      frequencyMap.forEach((frequency: number, value: number) => {
        if (frequency > maxFrequency) {
          mode = value;
          maxFrequency = frequency;
        }
      });

      // Explicitly assert the type of 'mode'
      return mode !== null
        ? applyFormatter(
            formatter,
            (mode as number).toFixed(decimal_places)
          ).replace(".", decimalSeparator)
        : "No mode";
    }

    case "variance": {
      const [data, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        !Array.isArray(data) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const mean =
        data.reduce((acc: number, value: number) => acc + value, 0) /
        data.length;
      const squaredDifferences = data.map(
        (value: number) => (value - mean) ** 2
      );
      const variance =
        squaredDifferences.reduce(
          (acc: number, value: number) => acc + value,
          0
        ) / data.length;
      return applyFormatter(
        formatter,
        variance.toFixed(decimal_places)
      ).replace(".", decimalSeparator);
    }
    case "std_dev": {
      const [data, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 1 ||
        !Array.isArray(data) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const mean =
        data.reduce((acc: number, value: number) => acc + value, 0) /
        data.length;
      const squaredDifferences = data.map(
        (value: number) => (value - mean) ** 2
      );
      const variance =
        squaredDifferences.reduce(
          (acc: number, value: number) => acc + value,
          0
        ) / data.length;
      const stdDev = Math.sqrt(variance);
      return applyFormatter(formatter, stdDev.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }
    case "matrix_add": {
      const [matrixA, matrixB, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 2 ||
        !(Array.isArray(matrixA) && Array.isArray(matrixA[0])) ||
        !(Array.isArray(matrixB) && Array.isArray(matrixB[0])) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = addMatrices(matrixA, matrixB);
      return formatMatrix(result, decimal_places, formatter, decimalSeparator);
    }
    case "matrix_multiply": {
      const [matrix1, matrix2, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 2 ||
        !(Array.isArray(matrix1) && Array.isArray(matrix1[0])) ||
        !(Array.isArray(matrix2) && Array.isArray(matrix2[0])) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = multiplyMatrices(matrix1, matrix2);
      return formatMatrix(result, decimal_places, formatter, decimalSeparator);
    }
    case "matrix_invert": {
      const [matrix, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 2 ||
        !(Array.isArray(matrix) && Array.isArray(matrix[0])) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = invertMatrix(matrix);
      return formatMatrix(result, decimal_places, formatter, decimalSeparator);
    }

    case "matrix_determinant": {
      const [matrix, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 2 ||
        !(Array.isArray(matrix) && Array.isArray(matrix[0])) ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = calculateDeterminant(matrix);
      return applyFormatter(formatter, result.toFixed(decimal_places)).replace(
        ".",
        decimalSeparator
      );
    }

    case "is_prime": {
      const [number] = args;
      if (args.length < 1 || typeof number !== "number")
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      const result = isPrime(number);
      return result ? "Prime" : "Not Prime";
    }
    case "generate_primes": {
      const [upTo] = args;
      if (args.length < 1 || typeof upTo !== "number")
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      const result = generatePrimes(upTo);
      return result.join(", ");
    }

    case "gcd": {
      const [numbers] = args;
      if (args.length < 1 || !Array.isArray(numbers))
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      const result = calculateGCD(numbers);
      return result.toString();
    }

    case "lcm": {
      const [numbers] = args;
      if (args.length < 1 || !Array.isArray(numbers))
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      const result = calculateLCM(numbers);
      return result.toString();
    }
    case "complex_add": {
      const [
        real1,
        imag1,
        real2,
        imag2,
        decimal_places = 0,
        formatter = "[n] + [i]i",
      ] = args;
      if (
        args.length < 4 ||
        typeof real1 !== "number" ||
        typeof imag1 !== "number" ||
        typeof real2 !== "number" ||
        typeof imag2 !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = addComplex(real1, imag1, real2, imag2);
      return formatComplex(result, decimal_places, formatter, decimalSeparator);
    }

    case "complex_subtract": {
      const [
        real1,
        imag1,
        real2,
        imag2,
        decimal_places = 0,
        formatter = "[n] + [i]i",
      ] = args;
      if (
        args.length < 4 ||
        typeof real1 !== "number" ||
        typeof imag1 !== "number" ||
        typeof real2 !== "number" ||
        typeof imag2 !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = subtractComplex(real1, imag1, real2, imag2);
      return formatComplex(result, decimal_places, formatter, decimalSeparator);
    }

    case "complex_multiply": {
      const [
        real1,
        imag1,
        real2,
        imag2,
        decimal_places = 0,
        formatter = "[n] + [i]i",
      ] = args;
      if (
        args.length < 4 ||
        typeof real1 !== "number" ||
        typeof imag1 !== "number" ||
        typeof real2 !== "number" ||
        typeof imag2 !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = multiplyComplex(real1, imag1, real2, imag2);
      return formatComplex(result, decimal_places, formatter, decimalSeparator);
    }

    case "complex_divide": {
      const [
        real1,
        imag1,
        real2,
        imag2,
        decimal_places = 0,
        formatter = "[n] + [i]i",
      ] = args;
      const result = divideComplex(real1, imag1, real2, imag2);
      if (
        args.length < 4 ||
        typeof real1 !== "number" ||
        typeof imag1 !== "number" ||
        typeof real2 !== "number" ||
        typeof imag2 !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      return formatComplex(result, decimal_places, formatter, decimalSeparator);
    }

    case "complex_conjugate": {
      const [real, imag, decimal_places = 0, formatter = "[n] - [i]i"] = args;
      if (
        args.length < 2 ||
        typeof real !== "number" ||
        typeof imag !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = conjugateComplex(real, imag);
      return formatComplex(result, decimal_places, formatter, decimalSeparator);
    }

    case "complex_modulus": {
      const [real, imag, decimal_places = 0, formatter = "[n]"] = args;
      if (
        args.length < 2 ||
        typeof real !== "number" ||
        typeof imag !== "number" ||
        typeof decimal_places !== "number" ||
        typeof formatter !== "string"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      const result = { real: modulusComplex(real, imag), imag: 0 }; // Imaginary part is 0 for modulus
      return formatComplex(result, decimal_places, formatter, decimalSeparator);
    }

    case "derivative": {
      const [func, point, h = 1e-5] = args;
      if (
        args.length < 2 ||
        typeof func !== "function" ||
        typeof point !== "number"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      return derivative(func, point, h);
    }

    case "integral": {
      const [func, a, b, n = 1000] = args;
      if (
        args.length < 3 ||
        typeof func !== "function" ||
        typeof a !== "number" ||
        typeof b !== "number"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      return integral(func, a, b, n);
    }

    case "limit": {
      const [func, point, approaching = "both"] = args;
      if (
        args.length < 2 ||
        typeof func !== "function" ||
        typeof point !== "number"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      return limit(func, point, approaching);
    }

    case "continuity": {
      const [func, point] = args;
      if (
        args.length < 2 ||
        typeof func !== "function" ||
        typeof point !== "number"
      ) {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      return isContinuous(func, point);
    }

    case "random_uniform": {
      const [min, max, formatter = "[n]"] = args;
      if (typeof min !== "number" || typeof max !== "number") {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      return applyFormatter(formatter, convertToString(randomUniform(min, max)));
    }

    case "random_normal": {
      const [formatter = "[n]"] = args;
      const result = generateRandomNormal();
      return applyFormatter(formatter, convertToString(result));
    }

    case "random_integer": {
      const [min, max, formatter = "[n]"] = args;
      if (typeof min !== "number" || typeof max !== "number") {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }
      return applyFormatter(formatter, convertToString(randomInteger(min, max)));
    }

    case "unit_conversion": {
      const [value, fromUnit, toUnit, formatter = "[n]"] = args;
      if (typeof value !== "number") {
        return `ERR: useMath | Invalid usage at ${context}. Double check your arguments and types. EXIT_CODE: 404_args`
      }

      const conversionFactors: Record<string, number | ((value: number) => number)> = {
        // Length
        "meters_to_feet": 3.28084,
        "meters_to_miles": 0.000621371,
        "meters_to_yards": 1.09361,
        "meters_to_inches": 39.3701,

        // Mass
        "kilograms_to_pounds": 2.20462,
        "kilograms_to_grams": 1000,
        "pounds_to_kilograms": 0.453592,
        "grams_to_kilograms": 0.001,

        // Volume
        "liters_to_gallons": 0.264172,
        "liters_to_quarts": 1.05669,
        "liters_to_pints": 2.11338,
        "liters_to_cups": 4.22675,
        "liters_to_milliliters": 1000,

        // Temperature
        "celsius_to_fahrenheit": (celsius: number) => (celsius * 9/5) + 32,
        "fahrenheit_to_celsius": (fahrenheit: number) => (fahrenheit - 32) * 5/9,

        // Add more units as needed
      };

      const conversionKey = `${fromUnit}_to_${toUnit}`;
      if (!(conversionKey in conversionFactors)) {
        return `ERR: useMath | Can't resolve operation "${conversionKey}" at ${context}. Operation invalid or not supported. EXIT_CODE: 402_unsupported`
      }

      const conversionFactor = conversionFactors[conversionKey];
      const result = typeof conversionFactor === "function" ? conversionFactor(value) : value * conversionFactor;
      return applyFormatter(formatter, convertToString(result));
    }

    default:
      return `ERR: useMath | Can't resolve context "${context}". Check if your context is in the context list. EXIT_CODE: 403_context_does_not_exist`;
  }
};

const addMatrices = (matrixA: number[][], matrixB: number[][]): any => {
  // Matrix addition logic
  // Ensure matrices have the same dimensions

  if (matrixA.length < 1 || matrixB.length < 1) {
    return `ERR: useMath | Matrix invalid at matrix_add. EXIT_CODE: 402_unsupported`;
  }

  const result: number[][] = [];
  for (let i = 0; i < matrixA.length; i++) {
    result[i] = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      result[i][j] = matrixA[i][j] + matrixB[i][j];
    }
  }
  return result;
};

const multiplyMatrices = (
  matrix1: number[][],
  matrix2: number[][]
): any => {
  const rows1 = matrix1.length;
  const cols1 = matrix1[0].length;
  const rows2 = matrix2.length;
  const cols2 = matrix2[0].length;

  // Check if the matrices can be multiplied
  if (cols1 !== rows2) {
    return `ERR: useMath | Matrices invalid at "function multiplyMatrices()". EXIT_CODE: 500_internal_library_error`
  }

  // Initialize the result matrix with zeros
  const result: number[][] = new Array(rows1)
    .fill(0)
    .map(() => new Array(cols2).fill(0));

  // Perform matrix multiplication
  for (let i = 0; i < rows1; i++) {
    for (let j = 0; j < cols2; j++) {
      for (let k = 0; k < cols1; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
};

const invertMatrix = (matrix: number[][]): any => {
  const n = matrix.length;

  // Check if the matrix is square
  if (n !== matrix[0].length) {
    return `ERR: useMath | Matrices invalid at "funciton invertMatrix()". EXIT_CODE: 500_internal_library_error`;
  }

  // Create an identity matrix
  const identityMatrix: number[][] = [];
  for (let i = 0; i < n; i++) {
    identityMatrix[i] = Array(n).fill(0);
    identityMatrix[i][i] = 1;
  }

  // Copy the original matrix to avoid modifying it
  const augmentedMatrix: number[][] = matrix.map((row) => [
    ...row,
    ...identityMatrix[matrix.indexOf(row)],
  ]);

  // Perform Gaussian elimination to transform the left half into the identity matrix
  for (let i = 0; i < n; i++) {
    // Find pivot
    let pivot = augmentedMatrix[i][i];
    let pivotRow = i;
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(augmentedMatrix[j][i]) > Math.abs(pivot)) {
        pivot = augmentedMatrix[j][i];
        pivotRow = j;
      }
    }

    // Swap rows to make the pivot the greatest element
    [augmentedMatrix[i], augmentedMatrix[pivotRow]] = [
      augmentedMatrix[pivotRow],
      augmentedMatrix[i],
    ];

    // Scale the row to make the pivot 1
    const scale = 1 / augmentedMatrix[i][i];
    for (let j = 0; j < 2 * n; j++) {
      augmentedMatrix[i][j] *= scale;
    }

    // Eliminate other rows
    for (let k = 0; k < n; k++) {
      if (k !== i) {
        const factor = augmentedMatrix[k][i];
        for (let j = 0; j < 2 * n; j++) {
          augmentedMatrix[k][j] -= factor * augmentedMatrix[i][j];
        }
      }
    }
  }

  // Extract the right half of the augmented matrix, which should be the inverted matrix
  const invertedMatrix = augmentedMatrix.map((row) => row.slice(n));

  return invertedMatrix;
};

const calculateDeterminant = (matrix: number[][]): any => {
  const n = matrix.length;

  // Check if the matrix is square
  if (n !== matrix[0].length) {
    return `ERR: useMath | Invalid matrix for determinant calculation. EXIT_CODE: 500_internal_library_error`;
  }

  // Create a copy of the matrix to avoid modifying it
  const augmentedMatrix: number[][] = matrix.map((row) => [...row]);

  // Perform Gaussian elimination to transform the matrix into upper triangular form
  for (let i = 0; i < n; i++) {
    // Find pivot
    let pivot = augmentedMatrix[i][i];
    for (let j = i + 1; j < n; j++) {
      const factor = augmentedMatrix[j][i] / pivot;
      for (let k = 0; k < n; k++) {
        augmentedMatrix[j][k] -= factor * augmentedMatrix[i][k];
      }
    }
  }

  // Multiply the diagonal elements to get the determinant
  let det = 1;
  for (let i = 0; i < n; i++) {
    det *= augmentedMatrix[i][i];
  }

  return det;
};

const formatMatrix = (
  matrix: number[][],
  decimal_places: number,
  formatter: string,
  decimalSeparator: "." | ","
): string => {
  const formattedRows = matrix.map((row) =>
    row.map((val) => val.toFixed(decimal_places))
  );
  const formattedMatrix = formattedRows.map((row) => row.join(", ")).join("; ");
  return applyFormatter(formatter, formattedMatrix).replace(
    ".",
    decimalSeparator
  );
};

const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const generatePrimes = (upTo: number): number[] => {
  const primes: number[] = [];
  for (let i = 2; i <= upTo; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
};

const calculateGCD = (numbers: number[]): number => {
  if (numbers.length < 2) {
    throw new Error("GCD requires at least two numbers");
  }

  let gcd = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    gcd = calculateTwoNumbersGCD(gcd, numbers[i]);
  }
  return gcd;
};

const calculateTwoNumbersGCD = (a: number, b: number): number => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
};

const calculateLCM = (numbers: number[]): number => {
  if (numbers.length < 2) {
    throw new Error("LCM requires at least two numbers");
  }

  let lcm = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    lcm = calculateTwoNumbersLCM(lcm, numbers[i]);
  }
  return lcm;
};

const calculateTwoNumbersLCM = (a: number, b: number): number => {
  return Math.abs((a * b) / calculateTwoNumbersGCD(a, b));
};

const addComplex = (
  real1: number,
  imag1: number,
  real2: number,
  imag2: number
): { real: number; imag: number } => {
  return {
    real: real1 + real2,
    imag: imag1 + imag2,
  };
};

const subtractComplex = (
  real1: number,
  imag1: number,
  real2: number,
  imag2: number
): { real: number; imag: number } => {
  return {
    real: real1 - real2,
    imag: imag1 - imag2,
  };
};

const multiplyComplex = (
  real1: number,
  imag1: number,
  real2: number,
  imag2: number
): { real: number; imag: number } => {
  return {
    real: real1 * real2 - imag1 * imag2,
    imag: real1 * imag2 + imag1 * real2,
  };
};

const divideComplex = (
  real1: number,
  imag1: number,
  real2: number,
  imag2: number
): { real: number; imag: number } => {
  const denominator = real2 * real2 + imag2 * imag2;
  return {
    real: (real1 * real2 + imag1 * imag2) / denominator,
    imag: (imag1 * real2 - real1 * imag2) / denominator,
  };
};

const conjugateComplex = (
  real: number,
  imag: number
): { real: number; imag: number } => {
  return {
    real,
    imag: -imag,
  };
};

const modulusComplex = (real: number, imag: number): number => {
  return Math.sqrt(real * real + imag * imag);
};

const formatComplex = (
  complex: { real: number; imag: number },
  decimal_places: number,
  formatter: string,
  decimalSeparator: string
): string => {
  const formattedReal = complex.real
    .toFixed(decimal_places)
    .replace(".", decimalSeparator);
  const formattedImag = complex.imag
    .toFixed(decimal_places)
    .replace(".", decimalSeparator);

  return formatter
    .replace(/\[n\]/g, formattedReal)
    .replace(/\[i\]/g, formattedImag);
};

const derivative = (
  func: (x: number) => number,
  x: number,
  h: number = 1e-5
): string => {
  const result = (func(x + h) - func(x)) / h;
  return result.toString(); // Convert the result to a string
};

const integral = (
  func: (x: number) => number,
  a: number,
  b: number,
  n: number = 1000
): number => {
  const h = (b - a) / n;
  let result = (func(a) + func(b)) / 2;

  for (let i = 1; i < n; i++) {
    const x = a + i * h;
    result += func(x);
  }

  return result * h;
};

const limit = (
  func: (x: number) => number,
  x: number,
  approaching: "left" | "right" | "both" = "both"
): number => {
  const h = 1e-5;

  switch (approaching) {
    case "left":
      return func(x - h);
    case "right":
      return func(x + h);
    default:
      return (func(x - h) + func(x + h)) / 2;
  }
};

const isContinuous = (func: (x: number) => number, x: number): string => {
  const leftLimit = limit(func, x, "left");
  const rightLimit = limit(func, x, "right");

  return (func(x) === leftLimit && func(x) === rightLimit).toString();
};

const randomUniform = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const generateRandomNormal = (): number => {
  // Using Box-Muller transform to generate random numbers from a standard normal distribution
  const u1 = Math.random();
  const u2 = Math.random();
  const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return z1;
};

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const applyFormatter = (format: string, value1: string): string => {
  return format.replace(/\[n\]/g, value1);
};
