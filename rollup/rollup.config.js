import { nodeResolve as node } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import cjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
    input: "src/app.js",
    output: {
        dir: "build/",
        format: "cjs",
    },
    plugins: [json(), cjs(), node(), terser()],
};
