// Dummy data for grades
const gradeData = [
    { course: 'Data Structures and Algorithm', semester: 'semester1', grade: 'A' },
    { course: 'Computer Networks', semester: 'semester2', grade: 'B+' },
    { course: 'Database Management System', semester: 'semester2', grade: 'A-' },
    { course: 'Database Management System', semester: 'semester3', grade: 'B' },
    { course: 'Computer Networks', semester: 'semester1', grade: 'C+' },
    { course: 'Engineering Mathematics', semester: 'semester3', grade: 'B' },
    { course: 'Computer Organization and Architecture', semester: 'semester3', grade: 'C+' },
];

// Function to load grades based on selected semester and course
function loadGrades() {
    const selectedSemester = document.getElementById('semester').value;
    const selectedCourse = document.getElementById('course').value;
    const gradesRecordDiv = document.getElementById('grades-record');

    // Clear previous records
    gradesRecordDiv.innerHTML = '';

    // Filter grade data based on selected filters
    const filteredGrades = gradeData.filter(record => 
        record.semester === selectedSemester && record.course === selectedCourse
    );

    // Display filtered grade data
    if (filteredGrades.length > 0) {
        filteredGrades.forEach(record => {
            const recordItem = document.createElement('div');
            recordItem.classList.add('grade-record-item');
            recordItem.innerHTML = `
                <span>Course:</span> ${record.course} |
                <span>Grade:</span> ${record.grade}
            `;
            gradesRecordDiv.appendChild(recordItem);
        });
    } else {
        gradesRecordDiv.innerHTML = '<p>No grade records found for the selected filters.</p>';
    }
}
