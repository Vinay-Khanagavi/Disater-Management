import React from 'react';
import './ContentBox.css';
import { Student } from '../entities/Student';

interface ReadContentBoxProps {
    student: Student;
    onEdit: () => void;
    onDelete: () => void;
}

const ReadContentBox: React.FC<ReadContentBoxProps> = ({ student, onEdit, onDelete }) => {

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString); // Convert to Date object
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
            <p>Date of Joining: {formatDate(student.dateOfJoining.toString())}</p> {/* Convert to string before formatting */}
            <p>Contact Information: {student.contactInfo}</p>
            <p>Total Attendance: {student.totalAttendance}</p>

            {/* Edit and Delete Buttons */}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ReadContentBox;