//usage

//test: /\.ts$/,
//    loader: './webpack/loadercustom-tsc-loader',
//query:  {
//    target: 'es5',
//    module : 'commonjs'
//}

const ts = require('typescript');

const getModuleKinds = () => {
    return {
        commonjs: 1,
        amd: 2,
        umd: 3,
        system: 4,
        es2015: 5
    };
}

const getTargets = () => {
    return {
        es3: 0,
        es5: 1,
        es6: 2,
        es2015: 2,
        es2016: 3,
    };
}
module.exports = function (content) {

    let targetModule = getModuleKinds()[this.query.module];
    let target = getTargets()[this.query.target];

    if (!targetModule || !target) {
        throw Error("Bad module or target configuration");
    }

    let transpileOptions = {
        targetModule,
        target,
        sourceMap: true
    };

    let transpiledModule = ts.transpileModule(content, { compilerOptions: transpileOptions });
    return transpiledModule.outputText;
}

