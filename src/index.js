const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
}

function decode(expr) {
  let array = []
  let iterim = ''
  for (let i = 0; i < expr.length + 1; i++) {
    if (i > 0 && i % 10 == 0) {
      array.push(iterim)
      iterim = ''
    }
    iterim = iterim + expr[i]
  }
  console.log(array)
  iterim = ''
  let iterimFull = ''
  let star = ''
  const newArr = []
  array.forEach(el => {
    for (let i = 0; i <= el.length; i++) {
      if (i > 0 && i % 2 == 0) {
        if (iterim == '10') {
          iterimFull = iterimFull + '.'
        } else if (iterim == '11') {
          iterimFull = iterimFull + '-'
        } else if (iterim == '**') {
          star = star + iterim
          if (star == '**********') {
            iterimFull = iterimFull + ' '
            star = ''
          }
        }
        iterim = ''
      }
      if (el[i] != undefined) {
        iterim = iterim + el[i]
      }
    }
    newArr.push(iterimFull)
    iterimFull = ''
  })
  let finalWord = ''
  newArr.forEach(el => {
    if (el == '' || el == ' ') finalWord = finalWord + ' '
    for (const key in MORSE_TABLE) {
      if (el == key) finalWord = finalWord + MORSE_TABLE[key]
    }
  })
  return finalWord
}

module.exports = {
  decode,
}
