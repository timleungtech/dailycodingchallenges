//If you can read this...
function to_nato(words) {
    const nato = s => {
    let h = {
      "A": "Alfa", "B": "Bravo", "C": "Charlie",
      "D": "Delta", "E": "Echo", "F": "Foxtrot",
      "G": "Golf", "H": "Hotel", "I": "India",
      "J": "Juliett", "K": "Kilo", "L": "Lima",
      "M": "Mike", "N": "November", "O": "Oscar",
      "P": "Papa", "Q": "Quebec", "R": "Romeo",
      "S": "Sierra", "T": "Tango", "U": "Uniform",
      "V": "Victor", "W": "Whiskey", "X": "Xray",
      "Y": "Yankee", "Z": "Zulu", ",": ",", "?": "?", ".": ".", "!": "!" 
    }
    return [...s.toUpperCase()].map(x => h[x]).join(' ')
    }
    return nato(words.split(' ').join(''))
}