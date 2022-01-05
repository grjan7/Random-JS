/**
 * 
 * @param sourceNumber {string} a string for which some of numbers need to be hidden.
 * @param startCount {number} number of digits need to be set visible at the start.
 * @param endCount {number} number of digits need to be set visible at the end.
 * @param hideChar {string} charcter used to hide the digits.
 * @returns {string} the resultant string  will have hidden digits with selected character.
 * 
 */
function hideNumbers(sourceNumber, startCount, endCount, hideChar) {

  let digitIndex = 0;
  let hiddenNumberString = "";
  let _startCount = startCount || 0;
  let _endCount = endCount || 0;
  let _hideChar = hideChar || "x";
  let digitsLength = sourceNumber.match(/\d+/g).join("").length;
  let endCountPos = digitsLength - _endCount;
  let isNonDigit = false;
  let isVisibleStart = false;
  let isVisibleEnd = false;
  let isEligible = false;

  for (let i of sourceNumber) {

    isNonDigit = (i.match(/\d/g) == null);
    isVisibleStart = digitIndex < _startCount;
    isVisibleEnd = digitIndex >= endCountPos;

    isEligible = (isVisibleStart || isVisibleEnd || isNonDigit);

    hiddenNumberString += isEligible ? i : _hideChar;
    digitIndex += !isNonDigit ? 1 : 0;

  }
  return hiddenNumberString;
}

(function hideNumbersTest() {

  let hasPassedTest = "";
  let evalTest = false;
  let ifTrue = "";
  let ifFalse = "";
  let scenario = {};
  let sourceNumber = "";
  let startCount = 0;
  let endCount = 0;
  let hideChar = "";
  let result = "";

  let testScenarios = [{
    scenario: ["9302025363", 2, 4, "x"],
    result: "93xxxx5363"
  },
  {
    scenario: ["4012 4251 9035", 4, 4, "*"],
    result: "4012 **** 9035"
  },
  {
    scenario: ["4012-4251-9035", 3, 5, "$"],
    result: "401$-$$$1-9035"
  },
  {
    scenario: ["4012-a241-6031", 5, 2, "%"],
    result: "4012-a2%%-%%31"
  },
  {
    scenario: ["91-25125 20215", 3, 4, "#"],
    result: "91-2#### #0215"
  },
  {
    scenario: ["91#25125-20215%", 3, 4, "@"],
    result: "91#2@@@@-@0215%"
  }
  ];

  for (let i of testScenarios) {

    scenario = i["scenario"];
    sourceNumber = i["scenario"][0];
    startCount = i["scenario"][1];
    endCount = i["scenario"][2];
    hideChar = i["scenario"][3];
    result = i["result"];

    evalTest = (hideNumbers(sourceNumber, startCount, endCount, hideChar) == result);

    ifTrue = `Scenario: ${scenario}\n Result: ${result}\n Status: passed\n\n`;
    ifFalse = `Scenario: ${scenario}\n Result: ${result}\n Status: failed\n\n`;

    hasPassedTest += evalTest ? ifTrue : ifFalse;

  }
  return hasPassedTest;
})();