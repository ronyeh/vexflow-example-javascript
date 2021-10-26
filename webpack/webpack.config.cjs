const path = require("path");

function normalizeName(name) {
    return name
        .replace(/[\-_.|]+/g, " ")
        .replace(/\b(vendors|node_modules|js|modules|es)\b/g, "")
        .trim()
        .replace(/ +/g, "-");
}

module.exports = {
    mode: "development",
    context: __dirname,
    entry: {
        app: "./src/app.js",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        library: {
            name: "Demo",
            type: "umd",
        },
        globalObject: "(typeof self !== 'undefined' ? self : this)",
    },
    resolve: {
        extensions: [".js"],
    },
    module: {},
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //         name(module, chunks, cacheGroupKey) {
    //             // const allChunksNames = chunks.map((item) => item.name).join("-");
    //             // return allChunksNames;

    //             const moduleFileName = module
    //                 .identifier()
    //                 .split("/")
    //                 .reduceRight((item) => item);
    //             return normalizeName(moduleFileName.replace(/[\/]/g, "-"));
    //         },
    //     },
    // },
};
