const billInput = document.getElementById('billAmount');
const tipAmountOutput = document.getElementById('tipAmount');
const totalAmountOutput = document.getElementById('totalAmount');
const resetBtn = document.querySelector('.reset-btn');
const customContainer = document.querySelector('.custom-tip-container');

let selectedTip = null;
let customInput = null;

// Create and show the custom button initially
function createCustomButton() {
  const button = document.createElement('button');
  button.textContent = 'Custom';
  button.classList.add('tip-btn');
  button.id = 'customBtn';
  customContainer.innerHTML = '';
  customContainer.appendChild(button);

  button.addEventListener('click', () => {
    showCustomInput();
  });
}

// Show the input field and remove the button
function showCustomInput() {
  customContainer.innerHTML = '';
  customInput = document.createElement('input');
  customInput.type = 'number';
  customInput.placeholder = '%';
  customInput.classList.add('custom-input');
  customContainer.appendChild(customInput);
  customInput.focus();

  customInput.addEventListener('input', () => {
    selectedTip = customInput.value;
    calculate();
  });
}

// Remove active states and handle custom reset
function clearActiveStates() {
  document.querySelectorAll('.tip-btn').forEach(btn => btn.classList.remove('active'));

  // If custom input exists, replace it with the button again
  if (customInput) {
    customInput = null;
    createCustomButton();
  }
}

// Perform calculation
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

// Handle percentage button clicks
document.querySelectorAll('.tip-btn').forEach(btn => {
  if (btn.id !== 'customBtn') {
    btn.addEventListener('click', () => {
      clearActiveStates();
      btn.classList.add('active');
      selectedTip = btn.dataset.percent;
      calculate();
    });
  }
});

// Bill input calculation
billInput.addEventListener('input', calculate);

// Reset button logic
resetBtn.addEventListener('click', () => {
  billInput.value = '';
  selectedTip = null;
  clearActiveStates();
  tipAmountOutput.textContent = '0.00';
  totalAmountOutput.textContent = '0.00';
});

// Initial setup
createCustomButton();
