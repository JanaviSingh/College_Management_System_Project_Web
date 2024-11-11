// Dummy data for attendance records
const attendanceData = [
    { date: '2024-10-01', course: 'course1', semester: 'semester1', status: 'Present' },
    { date: '2024-10-02', course: 'course1', semester: 'semester1', status: 'Absent' },
    { date: '2024-10-03', course: 'course2', semester: 'semester2', status: 'Present' },
    { date: '2024-10-04', course: 'course3', semester: 'semester3', status: 'Present' },
    { date: '2024-10-05', course: 'course2', semester: 'semester2', status: 'Absent' },
];

// Function to load attendance based on selected semester and course
function loadAttendance() {
    const selectedSemester = document.getElementById('semester').value;
    const selectedCourse = document.getElementById('course').value;
    const attendanceRecordDiv = document.getElementById('attendance-record');

    // Clear previous records
    attendanceRecordDiv.innerHTML = '';

    // Filter attendance data based on selected filters
    const filteredData = attendanceData.filter(record => 
        record.semester === selectedSemester && record.course === selectedCourse
    );

    // Display filtered attendance data
    if (filteredData.length > 0) {
        filteredData.forEach(record => {
            const recordItem = document.createElement('div');
            recordItem.classList.add('attendance-record-item');
            recordItem.innerHTML = `
                <span>Date:</span> ${record.date} |
                <span>Status:</span> ${record.status}
            `;
            attendanceRecordDiv.appendChild(recordItem);
        });
    } else {
        attendanceRecordDiv.innerHTML = '<p>No attendance records found for the selected filters.</p>';
    }
}
