//Pick peaks
function pickPeaks(arr){
  let pos = []
  let peaks = []
  let adj = 0
  for (let i = 1; i < arr.length - 1; i++) {
    if (adj > 0 && arr[i] < arr[i+1]){
      adj = 0
    }
    if (arr[i - 1 - adj] < arr[i] && arr[i] > arr[i + 1]) {
      pos.push(i - adj)
      peaks.push(arr[i])
      adj = 0
    }
    if (arr[i] === arr[i + 1]) {
      adj++
    }
  }
  return { pos: pos, peaks: peaks }
}