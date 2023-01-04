import { useState } from "react";
import LowerCase from "./LowerCase";
import UpperCase from "./UpperCase";
import LightToDark from "./LightToDark";

function vowelCounter(charArray) {
  for (let i = 0; i < charArray.length; i++) {
    const vowels = charArray.filter(
      (vowel) =>
        vowel === "a" ||
        vowel === "e" ||
        vowel === "i" ||
        vowel === "o" ||
        vowel === "u"
    );
    return vowels.length;
  }
}

function consonantCounter(charArray) {
  for (let i = 0; i < charArray.length; i++) {
    const consonants = charArray.filter(
      (consonant) =>
        consonant.charCodeAt() >= 98 &&
        consonant.charCodeAt() <= 122 &&
        consonant !== "e" &&
        consonant !== "i" &&
        consonant !== "o" &&
        consonant !== "u"
    );

    return consonants.length;
  }
}

function digitCounter(charArray) {
  for (let i = 0; i < charArray.length; i++) {
    const digits = charArray.filter(
      (digit) => digit.charCodeAt() >= 48 && digit.charCodeAt() <= 57
    );

    return digits.length;
  }
}

function Main({ lightToDarkThemeChanger, setLightToDarkThemeChanger }) {
  const [count, setCount] = useState(0);
  const [countNoSpace, setCountNoSpace] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [vowelCount, setVowelCount] = useState(0);
  const [consonantCount, setConsonantCount] = useState(0);
  const [digitCount, setDigitCount] = useState(0);
  return (
    <main>
      <div className="textField">
        <textarea
          type="text"
          name="char"
          rows="15"
          cols="30"
          id="char"
          onChange={(event) => {
            const inputVal = event.target.value;

            const wordArray = inputVal.split(" ");

            setCount(inputVal.split("").length);

            const strNoSpace = wordArray.join("");
            const strNoSpaceCount = strNoSpace.length;
            setCountNoSpace(strNoSpaceCount);

            function wordCounter() {
              if (wordArray.join("") === "") {
                setWordCount(0);
              } else {
                setWordCount(wordArray.length);
              }
            }

            wordCounter();

            //const vowels = ["a", "e", "i", "o", "u"];
            const stringLowerCase = inputVal.toLowerCase();
            const charArr = stringLowerCase.split("");

            setVowelCount(vowelCounter(charArr));

            setConsonantCount(consonantCounter(charArr));

            /*(consonant.charCodeAt() >= 102 &&
                    consonant.charCodeAt() <= 104) ||
                  (consonant.charCodeAt() >= 106 &&
                    consonant.charCodeAt() <= 110) ||
                  (consonant.charCodeAt() >= 112 &&
                    consonant.charCodeAt() <= 116) ||
                  (consonant.charCodeAt() >= 118 &&
                    consonant.charCodeAt() <= 122)
              );*/

            //const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            setDigitCount(digitCounter(charArr));
          }}
        ></textarea>
      </div>
      <div className="charCounter">
        <p>Character Count with Spaces: {count}</p>
        <p>Character Count without Spaces: {countNoSpace}</p>
        <p>Word Count: {wordCount}</p>
        <p id="vowels">Vowel Count: {vowelCount}</p>
        <p id="consonants">Consonant Count: {consonantCount}</p>
        <p>Digit Count: {digitCount}</p>
        <div className="buttons">
          <LowerCase />
          <UpperCase />
          <LightToDark
            lightToDarkThemeChanger={lightToDarkThemeChanger}
            setLightToDarkThemeChanger={setLightToDarkThemeChanger}
          />
        </div>
      </div>
      {/*<div className="buttons">
        <LowerCase />
        <UpperCase />
        <LightToDark />
      </div>*/}
      <p id="text"></p>
    </main>
  );
}

export default Main;
