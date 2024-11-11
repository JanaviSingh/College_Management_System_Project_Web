function showInfo(section) {
    const infoContent = document.getElementById("infoContent");

    if (section === 'attendance') {
        infoContent.innerHTML = `
            <h4>Attendance</h4>
            <p>Semester 1: 90%</p>
            <p>Semester 2: 85%</p>
            <p>Semester 3: 88%</p>
        `;
    } else if (section === 'timetable') {
        infoContent.innerHTML = `
            <h4>Timetable</h4>
            <p>Monday - Math, English, Computer Science</p>
            <p>Tuesday - Physics, Chemistry, Programming</p>
            <p>...</p>
        `;
    } else if (section === 'grades') {
        infoContent.innerHTML = `
            <h4>Grades</h4>
            <p>Semester 1 - Math: A, Computer Science: B</p>
            <p>Semester 2 - Physics: A, Chemistry: B+</p>
            <p>...</p>
        `;
    } else if (section === 'fees') {
        infoContent.innerHTML = `
            <h4>Fees</h4>
            <p>Total Fees: $10,000</p>
            <p>Paid: $8,000</p>
            <p>Outstanding: $2,000</p>
            <button onclick="payFees()">Pay Now</button>
        `;
    }
}

function payFees() {
    alert("Redirecting to payment gateway...");
}
