class BinaryTreeNode {
  value;
  left;
  right;

  constructor (value) {
    this.value = value;
  }
}

class TreeNode {
  value;
  children;

  constructor (value) {
    this.value = value;
  }
}

class TrieNode {
  keys = new Map();
  end = false;

  setEnd () {
    this.end = true;
  }

  isEnd () {
    return this.end;
  }
}

class Trie {
  /**
   * root of trie
   * @type {TrieNode}
   */
  root = new TrieNode();

  /**
   * Adds a word to Trie
   * @param word
   */
  add (word) {
    let curr = this.root;
    while (word.length > 0) {
      if (!curr.keys.has(word[0])) curr.keys.set(word[0], new TrieNode());
      if (word.length === 1) curr.keys.get(word[0]).setEnd();

      const next = curr.keys.get(word[0]);
      word = word.substring(1);
      curr = next;
    }
  }

  /**
   * Adds an array of words to the Trie
   * @param wordArray
   */
  addMany (wordArray) {
    for (const word of wordArray) this.add(word);
  }

  /**
   * Checks that a word exists in the Trie
   * @param word
   * @returns {boolean}
   */
  isWord (word) {
    let currentNode = this.root, i = 0;
    while (i < word.length) {
      if (!currentNode.keys.has(word[i])) return false;
      if (i === word.length - 1) return currentNode.keys.get(word[i]).isEnd();

      currentNode = currentNode.keys.get(word[i++]);
    }
    return false;
  }

  /**
   * A recursive algorithm to get all words in the trie from a specific node-point
   * @param currentPrefix
   * @param node
   * @param wordsArray
   */
  search (currentPrefix, node, wordsArray) {
    for (const [currentLetter, currentNode] of node.keys) {
      if (currentNode.isEnd()) {
        wordsArray.push(currentPrefix + currentLetter);
      }
      this.search(currentPrefix + currentLetter, currentNode, wordsArray);
    }
  };

  /**
   * Returns all the words in the Trie
   * @returns {string[]}
   */
  words () {
    const _words = [];
    this.search('', this.root, _words);
    return _words;
  }

  /**
   * Finds words that start with a specific prefix
   * @param prefix
   * @returns {string[]}
   */
  wordsByPrefix (prefix) {
    let wordsContainer = [], current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!current.keys.has(prefix[i])) return wordsContainer;
      current = current.keys.get(prefix[i]);
    }
    this.search(prefix, current, wordsContainer);
    return wordsContainer;
  }

  /**
   * Creates a Trie from an array of words.
   * @param arr
   * @returns {Trie}
   */
  static from (arr) {
    let trie = new Trie();
    trie.addMany(arr);
    return trie;
  }
}

module.exports = { TreeNode, BinaryTreeNode, TrieNode, Trie };