import React from 'react';
import './ContentBox.css';
import { Student } from '../entities/Student';

interface ContentBoxProps {
    onSubmit: (id: number) => void;
    student: Student;  // Change from 'event' to 'student'
}

const DeleteContentBox: React.FC<ContentBoxProps> = ({ onSubmit, student }) => { // Change from 'event' to 'student'

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = () => {
        onSubmit(student.id);
    };

    return (
        <div className="content-box">
            {/* Display student details */}
            <p>Name: {student.name}</p>
            <p>Roll Number: {student.rollNumber}</p>
            <p>Department: {student.department}</p>
            <p>Batch: {student.batch}</p>
            <p>Date of Joining: {formatDate(student.dateOfJoining)}</p>
            <p>Contact Information: {student.contactInfo}</p> {/* Add this line */}

            <button onClick={handleSubmit}>Delete</button>
        </div>
    );
};

export default DeleteContentBox;
