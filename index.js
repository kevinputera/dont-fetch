const oneSecond = document.getElementById('one-second-timeout');
const fiveSeconds = document.getElementById('five-seconds-timeout');
const print = document.getElementById('print');

let useCancel = false;
const cancellation = document.getElementById('cancellation');
cancellation.addEventListener('change', () => useCancel = cancellation.checked);

oneSecond.addEventListener('click', () => printDelayed('one', 1000));
fiveSeconds.addEventListener('click', () => printDelayed('five', 5000));

let latestTimeoutId = 0;
let counter = 0;
function printDelayed(message, time) {
  if (useCancel) {
    const timeoutId = counter++;
    latestTimeoutId = timeoutId;
    setTimeout(() => {
      if (latestTimeoutId === timeoutId) {
        print.innerHTML = message;
      }
    }, time);
  } else {
    setTimeout(() => print.innerHTML = message, time);
  }
}

const clear = document.getElementById('clear');
clear.addEventListener('click', () => print.innerHTML = '');

