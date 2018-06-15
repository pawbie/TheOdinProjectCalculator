/* 

1. User needs to be able to type number and see it on the display:

- variable to store the currently typed number - done
- number rendered when typed - done
- accepts only numbers (decimal and float), "+" etc needs to be added/used in equation only - done

- if "0" is displayed, pressing "0" will not add anything, unless user clicks start typing float number - done
- when user click on a ".", he starts to type float number - done
- when user is typing float number, "." cannot be typed until user goes back to decimal - done
- when user deletes the ".", he goes back to typing decimal - done

- values must separated by a whitespace every 4 chars (examples: "1 234", "345 678" etc) - done

2. User needs to be able to perform mathematical equations and see curren equation above the displayed number (with current operator at the end of it)

- variables to store two numbers for the mathematical operations - done
- variable to store the information about current operation type - done
- variable to store the current equation result - done

- if current valueA is empty, pressing operator button will assign displayed number to valueA variable and wait for valueB before performing any math operation - done
- if valueB isn't defined, app will wait for the user to provide the number - pressing operator button will not trigger any action - done
- after every mathematical operation, current equation result will need to be assigned to valueA - done
- after every mathematical operation, valueB will be set to null - done
- after every mathematival operation, current equation value is assigned as the currently displayed number - done
- after every mathematical operation, if user will start typing her/his own number, current equation value will be replaced by user's input - for inputB as well as displayed number - done
- if float mode is on, performing mathematical operation will reverse the app back to integer mode - done

- current equation will start to be displayed as soon as user will press the operator button - done
- current equation will be rendered to the latest operator character, valueB will be displayed as the main number - done
- current equation will be stored as an array, however it will be rendered as text - done
- every chain of same of same precedense operations in the equation should be enclosed in parenthesis when displayed if a higher precendense operation is listed after them

- if user didn't typed another value after pressing the operator button, pressing the operator button will only change the current operation to be performed - done
- if displayed value is supposed to be a float, but no number is present after '.' (examples, "0." or "1."), the integer before '.' will be added
- at a start of the application, the initial "0" can be added to the equation - done

3. User needs to be able to siwtch between negative and positive value when typing the number

- it should work by removing/adding "minus" ('-') sign before the number
- it shouldn't work when "0" is displayed
- it should work even on displayed equation result
- if applied on displayed equation result, pressing any number will result in replacing the equation result with this number

4. User needs to be able to use percentage values with "%" button

Available scenarios:

1. Application in start up -> no equation result, no added number yet to the equation -> will result in 0
2. Current equation result displayed -> pressing "%" will result computing "equation%" from the current equation result
3. No result displayed, but number ryped -> pressing "%" will result in computing "typedNumber%" from the current equation result
4. No result yet, only one number in the current equation -> pressing "%" while typing the second number will result in computing "typedNumber%" from the first number in the equation




*/



var controller = gameController();
var view = gameView();
var model = gameModel();

view.allNumElements()
  .forEach(button => {
    button.addEventListener('click', controller.testTypeNumber);
});

view.deleteButton().addEventListener('click', controller.testRemoveNumber);
view.enableFloatModeButton().addEventListener('click', controller.testActivateFloatMode);
view.switchPlusMinusButton().addEventListener('click', controller.switchTypedValuePlusMinus);

view.mathOperationButtons().forEach(button => {
  button.addEventListener('click', controller.addMathOperationValues);
  button.addEventListener('click', controller.performMathOperation);
  button.addEventListener('click', controller.changeCurrentOperator);
});


/*

function addWhiteSpace (str) {
  let tempArrayToExtractInteger = str.split('.'),
      tempArrayOnlyInteger = tempArrayToExtractInteger[0].split(''),
      tempArrayOnlyIntegerReversed = [];

  for (let i = 0; i < tempArrayOnlyInteger.length; i++) {
    tempArrayOnlyIntegerReversed.unshift(tempArrayOnlyInteger[i]);
  }
  
  return tempArrayOnlyIntegerReversed
    .reduce((arrayWithWhiteSpace, currentDigit) => {
      arrayWithWhiteSpace.push(currentDigit)
      if (arrayWithWhiteSpace.length % 3 === 0) {
        arrayWithWhiteSpace.push(' ');
      }
      return arrayWithWhiteSpace;
  }, [])
    .join('');
}

*/