import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  plugins: [typescript(/*{ plugin options }*/)],
  external: ["vue"],
  output: [{ file: pkg.module, format: "es" }],
};
