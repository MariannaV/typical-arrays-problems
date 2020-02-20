exports.min = function min(arr = []) {
    if (!arr.length) return 0;
    return Math.min(...arr);
}

exports.max = function max(arr = []) {
    if (!arr.length) return 0;
    return Math.max(...arr);
}

exports.avg = function avg(array = []) {
    if (!array.length) return 0;
    return array.reduce((avgNumber, el) => (avgNumber + el), 0) / array.length;
}
