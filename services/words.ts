import wordDictionary from "../data/wordList.json";

export function wordContainsAll(word: string, letters: string[]): boolean {
  let upperCaseWord = word.toUpperCase();
  let match = false;

  if (letters.length < 1) {
    return true;
  }

  // if letter is in word, remove that letter from word
  for (let letter of letters) {
    letter = letter.toUpperCase();
    const index = upperCaseWord.indexOf(letter);

    if (index >= 0) {
      const wordArr = upperCaseWord.split("");
      wordArr.splice(index, 1);
      upperCaseWord = wordArr.join("");
      match = true;
    } else {
      return false;
    }
  }

  return match;
}

export function wordContainsAny(word: string, letters: string[]): boolean {
  if (letters.length < 1) {
    return true;
  }

  return letters.some((letter: string) =>
    word.toUpperCase().includes(letter.toUpperCase())
  );
}

export function computeScore(
  matchingWord: string,
  optionalLetters: string[]
): number {
  let score = 0;
  let upperCaseWord = matchingWord.toUpperCase();

  if (optionalLetters.length < 1) {
    return score;
  }

  // computes score and orders by highest score
  // for each optional letter score += 10
  // if letter is in word, remove letter so not counted multiple times
  for (let letter of optionalLetters) {
    letter = letter.toUpperCase();
    if (upperCaseWord.includes(letter)) {
      const index = upperCaseWord.indexOf(letter);
      score += 10;

      if (index >= 0) {
        const wordArr = upperCaseWord.split("");
        wordArr.splice(index, 1);
        upperCaseWord = wordArr.join("");
      }
    }
  }

  return score;
}

export function getWords(
  letters: string[],
  include: string[],
  exclude: string[]
): string[] {
  const matchingWords = [];

  for (let i = 0; i < wordDictionary.length; i++) {
    const currentWord = wordDictionary[i].toUpperCase();

    // ensure all required letters are present and excluded letters are not
    if (wordContainsAll(currentWord, include)) {
      if (exclude.length > 0) {
        if (!wordContainsAny(currentWord, exclude)) {
          matchingWords.push(currentWord);
        }
      } else {
        matchingWords.push(currentWord);
      }
    }
  }

  // score and sort all matching words
  matchingWords.sort(
    (a, b) => computeScore(b, letters) - computeScore(a, letters)
  );

  // return first thousand results
  const maxResults = 200;

  return matchingWords.slice(0, maxResults || 500);
}
