/**
 * Given a string input, returns a string made of:
 *  - the reversed input
 *  - the alphabetically earliest character in the input
 *  - "open" if the vowel count is odd, otherwise "rent"
 */

function reverseText(text) {
  return text
    .split("")
    .reverse()
    .join("")
}

function findEarliestAlphabetChar(text) {
  return text
    .split("")
    .reduce((earliest, current) =>
      earliest.toLowerCase() < current.toLowerCase() ? earliest : current
    )
}

function countVowels(text) {
  const vowelSet = new Set(["a", "e", "i", "o", "u"])

  return text
    .split("")
    .reduce(
      (vowelCount, character) =>
        vowelSet.has(character.toLowerCase())
          ? vowelCount + 1
          : vowelCount,
      0
    )
}

function buildTransformedString(inputText) {
  const reversed = reverseText(inputText)
  const earliestChar = findEarliestAlphabetChar(inputText)
  const vowelCount = countVowels(inputText)

  const paritySuffix = vowelCount % 2 === 0 ? "rent" : "open"

  return `${reversed}${earliestChar}${paritySuffix}`
}

// --- Simple Test ---
function testBuildTransformedString() {
  const testCases = [
    { input: "nepo", expected: "openerent" },
    { input: "aBc", expected: "cBaaopen" },
    { input: "HELLO", expected: "OLLEHErent" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = buildTransformedString(input);
    console.log(
      `Test ${index + 1}: input="${input}" | result="${result}" | ${
        result === expected ? "PASS" : `FAIL (expected ${expected})`
      }`
    );
  });
}

testBuildTransformedString();
