let countA = 0;
let countB = 0;

const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const result = document.getElementById('result');
const totalDisplay = document.getElementById('total');

buttonA.addEventListener('click', () => {
    countA++;
    updateDisplay();
});

buttonB.addEventListener('click', () => {
    countB++;
    updateDisplay();
});

function updateDisplay() {
    buttonA.textContent = `星５：${countA}`;
    buttonB.textContent = `星４：${countB}`;
    const total = countA + countB;
    const percentA = total === 0 ? 0 : ((countA / total) * 100).toFixed(2);
    result.textContent = `星５音骸：${percentA}%`;
    totalDisplay.textContent = `合計： ${total}`;
}
