const { Trie } = require('../ds/Tree');

describe('Test Trees Work', () => {
  const words = ['black', 'tense', 'morgan', 'tan', 'weyrey'];

  test('a word can be added | list of words can be returned', () => {
    const trie = Trie.from(words);
    const returnedWords = trie.words();
    expect(returnedWords.length).toBe(5);
    for (const word of returnedWords) expect(words.includes(word)).toBeTruthy();
  });

  test('isWord() checks for added words', () => {
    const trie = Trie.from(words);
    const nonWords = ['panabaker', 'gustin', 'gustchavo', 'bla', 'mor'];
    for (const word of words) expect(trie.isWord(word)).toBeTruthy();
    for (const word of nonWords) expect(trie.isWord(word)).toBe(false);
  });

  test('wordsByPrefix() finds words a specific prefix', () => {
    const trie = Trie.from(['apple', 'mouse', 'mousepad', 'mousessack', 'emote', 'mourn']);
    const prefixedWords = trie.wordsByPrefix('mou');
    console.log(prefixedWords);
    const expectedWords = ['mouse', 'mousepad', 'mousessack', 'mourn'];
    expect(prefixedWords.length).toBe(expectedWords.length);
    for (const word of prefixedWords) expect(expectedWords.includes(word)).toBeTruthy();
  });

});

