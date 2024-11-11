// Dummy data for demonstration
const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Sam Johnson' }
];

// Function to load student list for attendance
function loadStudentList() {
    const studentListDiv = document.getElementById('student-list');
    studentListDiv.innerHTML = ''; // Clear previous list

    students.forEach(student => {
        const studentRow = document.createElement('div');
        studentRow.classList.add('student-row');
        studentRow.innerHTML = `
            <span>${student.name}</span>
            <label>
                <input type="radio" name="attendance-${student.id}" value="present" required> Present
            </label>
            <label>
                <input type="radio" name="attendance-${student.id}" value="absent"> Absent
            </label>
        `;
        studentListDiv.appendChild(studentRow);
    });
}

// Function to submit attendance
function submitAttendance() {
    const attendanceData = [];
    
    students.forEach(student => {
        const attendanceStatus = document.querySelector(`input[name="attendance-${student.id}"]:checked`);
        if (attendanceStatus) {
            attendanceData.push({
                studentId: student.id,
                status: attendanceStatus.value
            });
        }
    });

    // Here you can make an AJAX call to save attendanceData to the database
    console.log("Submitted Attendance Data:", attendanceData);
    alert("Attendance submitted successfully!");
}

// Function to load attendance history
function loadAttendanceHistory() {
    const historyClass = document.getElementById('history-class').value;
    const historyDate = document.getElementById('history-date').value;
    const attendanceHistoryDiv = document.getElementById('attendance-history');
    
    if (historyClass && historyDate) {
        // Fetch and display attendance history from server or database
        attendanceHistoryDiv.innerHTML = `<p>Loading attendance history for ${historyClass} on ${historyDate}...</p>`;
        
        // Example data display
        setTimeout(() => {
            attendanceHistoryDiv.innerHTML = `
                <ul>
                    <li>John Doe - Present</li>
                    <li>Jane Smith - Absent</li>
                    <li>Sam Johnson - Present</li>
                </ul>
            `;
        }, 1000);
    } else {
        attendanceHistoryDiv.innerHTML = `<p>Please select class and date to view history.</p>`;
    }
}
