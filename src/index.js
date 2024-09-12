// You should implement your task here.

module.exports = function towelSort(matrix) {
    return Array.isArray(matrix) && matrix.length > 0
        ? matrix
              .map((el, i) => (i == 0 || i % 2 === 0 ? el : el.reverse()))
              .flat()
        : [];
};
