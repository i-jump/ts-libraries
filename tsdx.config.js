module.exports = {
  rollup(config, options) {
    /** format: 可构架 cjs、umd、ems等规范*/
    config.output.format = 'esm'
    return config;
  },
};
