//Complementary DNA
function DNAStrand(dna){
  dna = dna.split('')
  for (let i = 0; i < dna.length; i++){
    if (dna[i] === 'A'){
      dna.splice(i, 1, 'T')
    } else if (dna[i] === 'T'){
      dna.splice(i, 1, 'A')
    } else if (dna[i] === 'C'){
      dna.splice(i, 1, 'G')
    } else if (dna[i] === 'G'){
      dna.splice(i, 1, 'C')
    }
  }
  return dna.join('')
}