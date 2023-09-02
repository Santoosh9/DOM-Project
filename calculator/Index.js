let screen = document.getElementById('screen');

buttons = document.querySelectorAll('button');

let screenValue = '';

for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('button text is', buttonText);

    if (buttonText == 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == 'C') {
      screen.value = '';
      screenValue = '';
    } else if (buttonText == '=') {
      screen.value = eval(screenValue);
    } else {
      screenValue = screenValue + buttonText; // sv=8 , 8+ 9
      screen.value = screenValue; //s.v = 17
    }
  });
}
