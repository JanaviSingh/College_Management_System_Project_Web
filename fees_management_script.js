// Simulated payment history
let paymentHistory = [];

// Handle fee payment
document.getElementById('feePaymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount').value;
    const receiptId = 'REC' + Math.floor(Math.random() * 10000);
    const date = new Date().toLocaleDateString();
    
    // Add payment to history
    paymentHistory.push({ receiptId, amount, date });
    
    // Clear form and alert user
    alert('Payment successful! Receipt ID: ' + receiptId);
    this.reset();
    
    // Update payment history table
    updatePaymentHistory();
});

// Handle receipt download
document.getElementById('downloadReceiptForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const receiptId = document.getElementById('receiptId').value;
    const payment = paymentHistory.find(item => item.receiptId === receiptId);
    
    if (payment) {
        const receiptContent = `Receipt ID: ${payment.receiptId}\nAmount: $${payment.amount}\nDate: ${payment.date}`;
        
        // Create a blob and download it as a text file
        const blob = new Blob([receiptContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `Receipt_${receiptId}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        alert('Receipt downloaded successfully!');
    } else {
        alert('Invalid Receipt ID. Please try again.');
    }
});

// Function to update payment history table
function updatePaymentHistory() {
    const tableBody = document.getElementById('paymentHistoryTable').querySelector('tbody');
    tableBody.innerHTML = ''; // Clear the table
    
    paymentHistory.forEach(payment => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${payment.receiptId}</td><td>$${payment.amount}</td><td>${payment.date}</td>`;
        tableBody.appendChild(row);
    });
}
