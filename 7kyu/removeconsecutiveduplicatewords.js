//Remove consecutive duplicate words
const removeConsecutiveDuplicates = s => s.split(' ').filter((x, i, a) => x !== a[i + 1]).join(' ')