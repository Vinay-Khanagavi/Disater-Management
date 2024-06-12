import React from 'react';
import './ContentBox.css';
import { Student } from '../entities/Student';

interface ReadContentBoxProps {
    student: Student;  // Change from 'event' to 'student'
    onEdit: () => void;
    onDelete: () => void;
}

const ReadContentBox: React.FC<ReadContentBoxProps> = ({ student, onEdit, onDelete }) => {

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="content-box">
            {/* Display student details */}
            <p>Name: {student.name}</p>
            <p>Roll Number: {student.rollNumber}</p>
            <p>Department: {student.department}</p>
            <p>Batch: {student.batch}</p>
            <p>Date of Joining: {formatDate(student.dateOfJoining)}</p>
            <p>Contact Information: {student.contactInfo}</p>
            <p>Total Attendance: {student.totalAttendance}</p> {/* Display total attendance */}

            {/* Edit and Delete Buttons */}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ReadContentBox;
