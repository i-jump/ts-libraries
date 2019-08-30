/**
 * 数组最小值
 * @param {Array} arr
 * @return {Number}
 */
var minArray = function(arr) {
  return Math.min.apply(null, arr);
};

function demoFun(obj) {
  return obj.b;
}

/**
 * 数字四舍五入(可以指定保留几位小数)
 * @param {Number} value    数值
 * @param {Number} position 保留几位小数
 * @return {String}
 */
var demoRound = function(value, position) {
  if (position === void 0) {
    position = 0;
  }

  var tmp = Math.pow(10, position);
  var result = (Math.round(value * tmp) / tmp).toString();
  var num = result.split('.')[1] ? result.split('.')[1].length : 0;

  while (num < position) {
    result += !result.includes('.') ? '.0' : '0';
    num++;
  }

  return result;
};

/**
 * 去除空格
 * @param {string} str
 * @param {number} type all-所有空格(不传), around-前后空格，left-前空格，right-后空格
 */
var demoTrim = function demoTrim(str, type) {
  if (type === void 0) {
    type = 'all';
  }

  var types = {
    all: /\s*/g,
    around: /(^\s*)|(\s*$)/g,
    left: /(^\s*)/g,
    right: /(\s*$)/g,
  };
  return str.replace(types[type], '');
};

export { demoFun, demoRound, demoTrim, minArray };
//# sourceMappingURL=ts-lib.esm.js.map
