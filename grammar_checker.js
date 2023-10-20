let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";
let longWords = [];
const wordLenLim = 10;
const sentLim = 3;
var count = 0;
let dotCount = 0;

//console.log(storyWords);

storyWords.forEach((word) => {
  count++;
});
storyWords = storyWords.filter((word) => {
  return word !== unnecessaryWord;
});
storyWords = storyWords.map((word) => {
  /*if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }*/
  return word === misspelledWord ? "beautiful" : word;
});
const badWordId = storyWords.findIndex((word) => {
  return word === badWord;
});
const lengthCheck = storyWords.every((word) => {
  return word.length <= 10;
});
storyWords = storyWords.map((word) => {
  if (word.length > wordLenLim) {
    longWords.push(word);
    return "stunning";
  } else {
    return word;
  }
});
// checks whether the story is splitted into ${sentLim} and formats accordingly
storyWords = storyWords.map((word) => {
  let lastWordChar = word[word.length - 1];
  let isMark =
    lastWordChar === "." || lastWordChar === "!" || lastWordChar === "?";
  if (isMark) {
    if (dotCount === sentLim) {
      dotCount = 0;
      return word + "\n\n    ";
    } else {
      dotCount++;
      return word;
    }
  } else if (storyWords.indexOf(word) === 0) {
    return "    " + word;
  } else {
    return word;
  }
});

console.log(`
Paragraph contents:\n
=========\n
${storyWords.join(" ")}
_________\n
Paragraph metadata:
Words count: count = ${count}
Word length check: lengthCheck = ${lengthCheck}
Bad word: badWordId = ${badWordId} \('${badWord}' replaced by '${
  storyWords[badWordId]
}'\)
Words longer than ${wordLenLim}: \n
${longWords.join("; ")}
`);
