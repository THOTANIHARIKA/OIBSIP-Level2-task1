let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let displayValue = "";

for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);

    if (buttonText == 'X') {
      buttonText = '*';
      displayValue += buttonText;
      screen.value = displayValue;
    } else if (buttonText == 'AC') {
      displayValue = "";
      screen.value = displayValue;
    } else if (buttonText == '=') {
      if (displayValue.includes('√')) {
        let rootIndex = displayValue.indexOf('√');
        let rootValue = displayValue.slice(rootIndex + 1, displayValue.length);
        let result = Math.sqrt(eval(rootValue));
        displayValue = displayValue.replace('√' + rootValue, result);
        screen.value = displayValue;
      } else if (displayValue.includes('log(')) {
        let logIndex = displayValue.indexOf('log(');
        let logValue = displayValue.slice(logIndex + 4, displayValue.length - 1);
        let result = Math.log10(logValue);
        displayValue = displayValue.replace('log(' + logValue + ')', result);
        screen.value = displayValue;
      }
      else if (displayValue.includes('ln(')) {
        let logIndex = displayValue.indexOf('ln(');
        let logValue = displayValue.slice(logIndex + 3, displayValue.length - 1);
        let result = Math.log(logValue);
        displayValue = displayValue.replace('ln(' + logValue + ')', result);
        screen.value = displayValue;
      } else {
        screen.value = eval(displayValue);
      }
    } else {
      displayValue += buttonText;
      screen.value = displayValue;
    }
  });
}
