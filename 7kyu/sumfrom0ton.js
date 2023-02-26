//Sum of numbers from 0 to N
var SequenceSum = (function() {
  function SequenceSum() {}
  SequenceSum.showSequence = function(count) {
    let sum = 0
    let sequence = ''
    if (count === 0) return '0=0'
    if (count < 0) return `${count}<0`
    for (let i = 0; i <= count; i++){
      sequence += i + '+'
      sum += Number(i)
    }
    sequence = sequence.slice(0, -1) + ' = '
    return sequence + sum
  };
  return SequenceSum;
})();