// Updated dummy data for timetable records divided into 8 semesters
const timetableData = {
    semester1: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS101', courseName: 'Data Structures', credits: 4, professor: 'Dr. A. Smith' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS102', courseName: 'Algorithms', credits: 4, professor: 'Dr. B. Johnson' },
        { day: 'Monday', time: '11:30 - 12:30', course: 'CS103', courseName: 'Software Engineering', credits: 3, professor: 'Dr. C. Williams' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS104', courseName: 'Database Management Systems', credits: 4, professor: 'Dr. D. Brown' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS105', courseName: 'Computer Networks', credits: 4, professor: 'Dr. E. Davis' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS106', courseName: 'Operating Systems', credits: 4, professor: 'Dr. F. Garcia' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS107', courseName: 'Java Programming', credits: 3, professor: 'Dr. G. Martinez' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS108', courseName: 'Object-Oriented Programming', credits: 3, professor: 'Dr. H. Johnson' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'MA101', courseName: 'Engineering Mathematics', credits: 3, professor: 'Dr. I. Lee' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS109', courseName: 'Theory of Computation', credits: 3, professor: 'Dr. J. White' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS110', courseName: 'Discrete Mathematics', credits: 3, professor: 'Dr. K. Green' },
    ],
    semester2: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS201', courseName: 'Data Structures II', credits: 4, professor: 'Dr. M. Smith' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS202', courseName: 'Advanced Algorithms', credits: 4, professor: 'Dr. N. Johnson' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS203', courseName: 'Database Systems', credits: 4, professor: 'Dr. O. Williams' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS204', courseName: 'Computer Networks II', credits: 4, professor: 'Dr. P. Brown' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS205', courseName: 'Software Testing', credits: 3, professor: 'Dr. Q. Davis' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS206', courseName: 'Human-Computer Interaction', credits: 3, professor: 'Dr. R. Garcia' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS207', courseName: 'Compiler Design', credits: 4, professor: 'Dr. S. Martinez' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'CS208', courseName: 'Network Security', credits: 3, professor: 'Dr. T. Lee' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS209', courseName: 'Cloud Computing', credits: 4, professor: 'Dr. U. Green' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS210', courseName: 'Mobile App Development', credits: 3, professor: 'Dr. V. Brown' },
    ],
    semester3: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS301', courseName: 'Artificial Intelligence', credits: 4, professor: 'Dr. W. Smith' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS302', courseName: 'Machine Learning', credits: 4, professor: 'Dr. X. Johnson' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS303', courseName: 'Big Data Analytics', credits: 4, professor: 'Dr. Y. Williams' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS304', courseName: 'Game Development', credits: 4, professor: 'Dr. Z. Brown' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS305', courseName: 'Distributed Systems', credits: 4, professor: 'Dr. A. Garcia' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS306', courseName: 'Web Technologies', credits: 3, professor: 'Dr. B. Martinez' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS307', courseName: 'Data Mining', credits: 4, professor: 'Dr. C. Lee' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'CS308', courseName: 'Ethical Hacking', credits: 3, professor: 'Dr. D. Green' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS309', courseName: 'Blockchain Technology', credits: 4, professor: 'Dr. E. Brown' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS310', courseName: 'Computer Graphics', credits: 3, professor: 'Dr. F. Smith' },
    ],
    semester4: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS401', courseName: 'Advanced Software Engineering', credits: 4, professor: 'Dr. G. Johnson' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS402', courseName: 'Cloud Application Development', credits: 4, professor: 'Dr. H. Smith' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS403', courseName: 'IoT Systems', credits: 4, professor: 'Dr. I. Davis' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS404', courseName: 'Cybersecurity', credits: 4, professor: 'Dr. J. Brown' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS405', courseName: 'Mobile Computing', credits: 3, professor: 'Dr. K. White' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS406', courseName: 'Web Services', credits: 3, professor: 'Dr. L. Garcia' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS407', courseName: 'Robotics', credits: 4, professor: 'Dr. M. Green' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'CS408', courseName: 'Advanced Databases', credits: 3, professor: 'Dr. N. Lee' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS409', courseName: 'Project Management', credits: 3, professor: 'Dr. O. Brown' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS410', courseName: 'Placement Training', credits: 2, professor: 'Dr. P. Smith' },
    ],
    semester5: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS501', courseName: 'Capstone Project', credits: 4, professor: 'Dr. Q. Johnson' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS502', courseName: 'Data Visualization', credits: 3, professor: 'Dr. R. Lee' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS503', courseName: 'Artificial Intelligence in Business', credits: 4, professor: 'Dr. S. Brown' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS504', courseName: 'Digital Forensics', credits: 4, professor: 'Dr. T. Green' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS505', courseName: 'Game Design', credits: 4, professor: 'Dr. U. White' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS506', courseName: 'Ethics in Technology', credits: 3, professor: 'Dr. V. Johnson' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS507', courseName: 'Software Development Lifecycle', credits: 3, professor: 'Dr. W. Smith' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'CS508', courseName: 'Advanced Networking', credits: 3, professor: 'Dr. X. Davis' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS509', courseName: 'Business Intelligence', credits: 3, professor: 'Dr. Y. Brown' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS510', courseName: 'Placement Training', credits: 2, professor: 'Dr. Z. Garcia' },
    ],
    semester6: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS601', courseName: 'Advanced Topics in AI', credits: 4, professor: 'Dr. A. White' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS602', courseName: 'Blockchain Applications', credits: 4, professor: 'Dr. B. Johnson' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS603', courseName: 'Mobile Development Frameworks', credits: 4, professor: 'Dr. C. Lee' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS604', courseName: 'E-Commerce Technologies', credits: 3, professor: 'Dr. D. Green' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS605', courseName: 'Cloud Infrastructure', credits: 4, professor: 'Dr. E. Brown' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS606', courseName: 'IT Project Management', credits: 3, professor: 'Dr. F. Smith' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS607', courseName: 'Data Ethics', credits: 3, professor: 'Dr. G. Johnson' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'CS608', courseName: 'Mobile Device Security', credits: 3, professor: 'Dr. H. Davis' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS609', courseName: 'System Integration', credits: 3, professor: 'Dr. I. Brown' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS610', courseName: 'Placement Training', credits: 2, professor: 'Dr. J. Smith' },
    ],
    semester7: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS701', courseName: 'Project Development', credits: 4, professor: 'Dr. K. Johnson' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS702', courseName: 'Systems Analysis', credits: 3, professor: 'Dr. L. Lee' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS703', courseName: 'Digital Innovation', credits: 4, professor: 'Dr. M. Brown' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS704', courseName: 'Agile Methodologies', credits: 4, professor: 'Dr. N. Green' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS705', courseName: 'Industry Practices', credits: 4, professor: 'Dr. O. White' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS706', courseName: 'Data Governance', credits: 3, professor: 'Dr. P. Johnson' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS707', courseName: 'Cloud Technologies', credits: 3, professor: 'Dr. Q. Lee' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'CS708', courseName: 'Final Project Preparation', credits: 3, professor: 'Dr. R. Brown' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS709', courseName: 'Career Development', credits: 3, professor: 'Dr. S. Johnson' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS710', courseName: 'Internship Placement', credits: 2, professor: 'Dr. T. Green' },
    ],
    semester8: [
        { day: 'Monday', time: '9:00 - 10:00', course: 'CS801', courseName: 'Final Year Project', credits: 6, professor: 'Dr. U. White' },
        { day: 'Monday', time: '10:15 - 11:15', course: 'CS802', courseName: 'Advanced Data Analysis', credits: 4, professor: 'Dr. V. Johnson' },
        { day: 'Tuesday', time: '9:00 - 10:00', course: 'CS803', courseName: 'Entrepreneurship in Tech', credits: 3, professor: 'Dr. W. Smith' },
        { day: 'Tuesday', time: '10:15 - 11:15', course: 'CS804', courseName: 'Strategic IT Management', credits: 3, professor: 'Dr. X. Davis' },
        { day: 'Wednesday', time: '9:00 - 10:00', course: 'CS805', courseName: 'Advanced Software Architecture', credits: 4, professor: 'Dr. Y. Brown' },
        { day: 'Wednesday', time: '10:15 - 11:15', course: 'CS806', courseName: 'Project Presentation', credits: 3, professor: 'Dr. Z. Green' },
        { day: 'Thursday', time: '9:00 - 10:00', course: 'CS807', courseName: 'Research Methods', credits: 3, professor: 'Dr. A. Smith' },
        { day: 'Thursday', time: '10:15 - 11:15', course: 'CS808', courseName: 'Job Preparation Workshop', credits: 2, professor: 'Dr. B. Johnson' },
        { day: 'Friday', time: '9:00 - 10:00', course: 'CS809', courseName: 'Industry Internship', credits: 4, professor: 'Dr. C. White' },
        { day: 'Friday', time: '10:15 - 11:15', course: 'CS810', courseName: 'Final Review and Assessment', credits: 3, professor: 'Dr. D. Brown' },
    ],
};

// Function to load timetable based on selected semester
function loadTimetable() {
    const selectedSemester = document.getElementById('semester').value;
    const timetableRecordDiv = document.getElementById('timetable-record');

    // Clear previous records
    timetableRecordDiv.innerHTML = '';

    // Check if data exists for selected semester
    if (timetableData[selectedSemester]) {
        const timetableTable = document.createElement('table');
        timetableTable.classList.add('timetable-table');

        // Create table headers
        timetableTable.innerHTML = `
            <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Credits</th>
                <th>Professor</th>
            </tr>
        `;

        // Populate table rows
        timetableData[selectedSemester].forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.day}</td>
                <td>${record.time}</td>
                <td>${record.course}</td>
                <td class="course-info">${record.courseName}</td>
                <td>${record.credits}</td>
                <td>${record.professor}</td>
            `;
            timetableTable.appendChild(row);
        });

        timetableRecordDiv.appendChild(timetableTable);
    } else {
        timetableRecordDiv.innerHTML = '<p>No timetable records found for the selected semester.</p>';
    }
}
