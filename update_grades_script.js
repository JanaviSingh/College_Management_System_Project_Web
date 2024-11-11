// Sample student data
const studentsData = {
    CS101: [
        { id: 'S001', name: 'Alice Johnson', currentGrade: 'B+' },
        { id: 'S002', name: 'Bob Smith', currentGrade: 'A' },
        { id: 'S003', name: 'Charlie Brown', currentGrade: 'B' },
    ],
    CS102: [
        { id: 'S001', name: 'Alice Johnson', currentGrade: 'A' },
        { id: 'S002', name: 'Bob Smith', currentGrade: 'B+' },
        { id: 'S004', name: 'David Wilson', currentGrade: 'C' },
    ],
    // Add more courses and respective students here
};

// Load students for the selected course
function loadStudents() {
    const course = document.getElementById('courseSelect').value;
    const studentsTableBody = document.querySelector('#studentsTable tbody');
    
    // Clear existing rows
    studentsTableBody.innerHTML = '';

    // Populate the table with student data
    studentsData[course].forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.currentGrade}</td>
            <td><input type="text" placeholder="New Grade" class="grade-input" data-id="${student.id}" /></td>
        `;
        studentsTableBody.appendChild(row);
    });
}

// Update grades based on the new input
function updateGrades() {
    const course = document.getElementById('courseSelect').value;
    const inputs = document.querySelectorAll('.grade-input');

    inputs.forEach(input => {
        const studentId = input.getAttribute('data-id');
        const newGrade = input.value;
        
        // Here you can handle the logic to update the grades in your database or data structure
        console.log(`Updating grade for Student ID: ${studentId} in Course: ${course} to New Grade: ${newGrade}`);
        
        // Ideally, you would perform an update in your database here
        alert(`Updated grade for ${studentId} to ${newGrade}`);
    });
}

// Initialize the students list when the page loads
document.addEventListener('DOMContentLoaded', loadStudents);
