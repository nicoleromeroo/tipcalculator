const billInput = document.getElementById('billAmount');
const tipButtons = document.querySelectorAll('.tip-btn');
const tipAmountOutput = document.getElementById('tipAmount');
const totalAmountOutput = document.getElementById('totalAmount');
const resetBtn = document.querySelector('.reset-btn');
const customBtn = document.getElementById('customBtn');
const customContainer = customBtn.parentElement;

let selectedTip = null;
let customInput = null;

// Function to clear active classes
function clearActiveStates() {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  if (customInput) {
    customInput.remove();
    customInput = null;
  }
}

// Function to calculate tip and total
function calculate() {
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(selectedTip);

  if (isNaN(bill) || bill <= 0 || isNaN(tipPercent)) {
    tipAmountOutput.textContent = '0.00';
    totalAmountOutput.textContent = '0.00';
    return;
  }

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;

  tipAmountOutput.textContent = tip.toFixed(2);
  totalAmountOutput.textContent = total.toFixed(2);
}

// Tip button clicks (excluding custom)
tipButtons.forEach(btn => {
  if (btn.id !== 'customBtn') {
    btn.addEventListener('click', () => {
      clearActiveStates();
      btn.classList.add('active');
      selectedTip = btn.dataset.percent;
      calculate();
    });
  }
});

// Custom button logic
customBtn.addEventListener('click', () => {
  clearActiveStates(); // deactivate others
  customBtn.classList.add('active');

  // Create new input
  customInput = document.createElement('input');
  customInput.type = 'number';
  customInput.placeholder = '%';
  customInput.classList.add('custom-input', 'active');
  customInput.value = '';
  customBtn.parentElement.appendChild(customInput);
  customInput.focus();

  // Handle custom input changes
  customInput.addEventListener('input', () => {
    selectedTip = customInput.value;
    calculate();
  });
});

// Recalculate when bill amount changes
billInput.addEventListener('input', calculate);

// Reset everything
resetBtn.addEventListener('click', () => {
  billInput.value = '';
  selectedTip = null;
  clearActiveStates();
  tipAmountOutput.textContent = '0.00';
  totalAmountOutput.textContent = '0.00';
});
