module.exports = function check(str, bracketsConfig) {
  const state = [];
  const openingBraces = bracketsConfig.map((pare) => pare[0]);
  const closingBraces = bracketsConfig.map((pare) => pare[1]);

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    const isOpeningBrace = openingBraces.includes(char);
    const  isClosingBrace = closingBraces.includes(char);

    if (isOpeningBrace && isClosingBrace) {
      if (state.length > 0 && state[state.length - 1] === char) {
        state.pop();
      } else {
        state.push(char);
      }
    } else if (isOpeningBrace) {
      state.push(char);
    } else if (isClosingBrace) {
      const lastOpeningBracket = state.pop();
      if (!lastOpeningBracket || (openingBraces.indexOf(lastOpeningBracket) !== closingBraces.indexOf(char))) { return false; }
    }
  }

  return state.length === 0;
}
