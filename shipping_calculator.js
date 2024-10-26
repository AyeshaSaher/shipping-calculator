// shipping_calculator.js

document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    
    calculateButton.addEventListener('click', function () {
        const weight = parseFloat(document.getElementById('weight').value);
        const destination = document.getElementById('destination').value;

        if (isNaN(weight) || weight <= 0) {
            resultDiv.textContent = 'Please enter a valid weight.';
            return;
        }

        const shippingCost = calculateShippingCost(weight, destination);
        resultDiv.textContent = `Estimated Shipping Cost: $${shippingCost.toFixed(2)}`;
    });

    function calculateShippingCost(weight, destination) {
        let costPerPound;

        switch (destination) {
            case 'domestic':
                costPerPound = 5.00; // Example rate for domestic shipping
                break;
            case 'international':
                costPerPound = 15.00; // Example rate for international shipping
                break;
            default:
                costPerPound = 0;
        }

        return weight * costPerPound;
    }
});
