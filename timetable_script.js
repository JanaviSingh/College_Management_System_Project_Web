// Example timetable data
const timetableData = {
    semester1: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS101', courseName: 'Data Structures', credits: 4, professor: 'Dr. A. Smith', room: 'Room 101' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS102', courseName: 'Algorithms', credits: 4, professor: 'Dr. B. Johnson', room: 'Room 102' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS103', courseName: 'Software Engineering', credits: 3, professor: 'Dr. C. Williams', room: 'Room 103' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS104', courseName: 'Database Management Systems', credits: 4, professor: 'Dr. D. Brown', room: 'Room 104' },
        { day: 'Thursday', time: '11:30 - 12:30', course: 'CS105', courseName: 'Computer Networks', credits: 4, professor: 'Dr. E. Davis', room: 'Room 105' },
        { day: 'Friday', time: '1:00 - 2:00', course: 'CS106', courseName: 'Operating Systems', credits: 4, professor: 'Dr. F. Garcia', room: 'Room 106' },
    ],
    // Add additional semesters with similar structure
};

// Function to update the timetable display
function updateTimetable() {
    const semester = document.getElementById('semesterSelect').value;
    const timetable = timetableData[semester];
    const timetableBody = document.querySelector('#timetable tbody');
    
    // Clear existing timetable rows
    timetableBody.innerHTML = '';

    // Populate the table with timetable data
    timetable.forEach(classEntry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${classEntry.day}</td>
            <td>${classEntry.time}</td>
            <td>${classEntry.course}</td>
            <td>${classEntry.courseName}</td>
            <td>${classEntry.credits}</td>
            <td>${classEntry.professor}</td>
            <td>${classEntry.room}</td>
        `;
        timetableBody.appendChild(row);
    });
}

// Initialize timetable display on page load
document.addEventListener('DOMContentLoaded', updateTimetable);
