module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  return matrix.reduce((acc, cur, index) => {
     if ((index + 1)%2 == 0) {
       cur.reverse();
     }
     acc.push(...cur);
     return acc;
   }, []);
}