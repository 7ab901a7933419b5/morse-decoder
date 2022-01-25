const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const WHITESPACE = "**********";
const CHARS = {
  "00": "",
  "10": ".",
  "11": "-"
}

String.prototype.toChunks = function(n) {
  let chunks = [];
  for (let i = 0; i < this.length; i += n) {
    chunks.push(this.substr(i, n));
  }
  return chunks;
}

function decode(expr) {
  let decodeBlock = block => {
    if (block == WHITESPACE) { return " "; }
    let code = block.toChunks(2)
      .map(x => CHARS[x])
      .join("");
    return MORSE_TABLE[code];
  }
  return expr.toChunks(10)
    .map(decodeBlock)
    .join("");
}

module.exports = {
    decode
}
