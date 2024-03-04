const amount = <HTMLInputElement>document.getElementById('amount');
const period = <HTMLInputElement>document.getElementById('period');
const percentage = <HTMLInputElement>document.getElementById('percentage');
const countBtn = document.getElementById('count');
const periodResult = document.getElementById('period-result');
const overallResult = document.getElementById('overall-result');

type Value = number | null;

let amountValue: Value;
let periodValue: Value;
let percentageValue: Value;

function getValue(element: HTMLInputElement): Value {
  const value: number = Number(element.value);
  if (value && !isNaN(value)) {
    if (element.classList.contains('error')) {
      element.classList.toggle('error');
    }
    return value;
  } else {
    element.classList.add('error');
    return null;
  }
}

function count(): void {
  amountValue = getValue(amount);
  periodValue = getValue(period);
  percentageValue = getValue(percentage);

  if (
    periodResult &&
    overallResult &&
    amountValue &&
    periodValue &&
    percentageValue
  ) {
    const calculationPeriod: number = Math.round(
      (amountValue + amountValue * (percentageValue / 100)) / periodValue
    );
    periodResult.innerHTML = String(calculationPeriod);

    const calculationOverall: number = calculationPeriod * periodValue;
    overallResult.innerHTML = String(calculationOverall);
  }
}

countBtn?.addEventListener('click', count);
amount.addEventListener('input', count);
period.addEventListener('input', count);
percentage.addEventListener('input', count);
