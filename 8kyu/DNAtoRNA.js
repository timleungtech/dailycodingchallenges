function DNAtoRNA(dna) {
    let dnaArr = dna.split('')
    for(let i = 0; i < dnaArr.length; i++){
      if(dnaArr[i] === "T"){
        dnaArr[i] = "U"
      }
    }
    let rnaArr = dnaArr.join('')
    return rnaArr
}