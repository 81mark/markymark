// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function(e) {
	// Hide results
	document.querySelector('#results').style.display = 'none';
	// Show loader
	document.querySelector('#loading').style.display = 'block';

	setTimeout(calculateResults, 2000);

	e.preventDefault();
});

// Create Dropdow For the Years To Repay
const years = document.querySelector('#yearsSelect');

// Reset Form
document.querySelector('#resetForm').addEventListener('click', function(e) {
	// Hide Results & Loader
	document.querySelector('#results').style.display = 'none';
	document.querySelector('#loading').style.display = 'none';
	// Clear Forms
	document.querySelector('#amount').value = '';
	document.querySelector('#interest').value = '';
	years.value = 1;

	e.preventDefault();
});

// Years Select Object
const repayYears = [1, 2, 3, 4, 5];
// Create Years Select Dropdown
const select = years;
repayYears.forEach(function(item) {
	const option = document.createElement('option');
	option.value = item;
	option.text = item === 1 ? item + ' Year' : item + ' Years';
	select.appendChild(option);
});

// Calculate Results
function calculateResults() {
	// UI vars
	const amount = document.querySelector('#amount');
	const interest = document.querySelector('#interest');
	const monthlyPayment = document.querySelector('#monthly-payment');
	const totalPayment = document.querySelector('#total-payment');
	const totalInterest = document.querySelector('#total-interest');

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	// Compute monthly payments
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest) / (x - 1);

	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

		// Show results
		document.querySelector('#results').style.display = 'block';

		// Hide Loader
		document.querySelector('#loading').style.display = 'none';
	} else {
		showError('Please check your numbers');
	}
}

// Show errors
function showError(error) {
	// Hide Results (8)flow
	document.querySelector('#results').style.display = 'none';
	// Hide Loader  (8)flow
	document.querySelector('#loading').style.display = 'none';

	// Create div (1)flow
	const errorDiv = document.createElement('div');

	// Get Elements (4)flow
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	// Add class (2)flow
	errorDiv.className = 'alert alert-danger';

	// Create text node and append to div (3)flow
	errorDiv.appendChild(document.createTextNode(error));

	// Insert error above heading (5)flow
	card.insertBefore(errorDiv, heading);

	// Clear error after 3 seconds (6)flow
	setTimeout(clearError, 3000);

	// Clear error (7)flow
	function clearError() {
		document.querySelector('.alert').remove();
	}
}
