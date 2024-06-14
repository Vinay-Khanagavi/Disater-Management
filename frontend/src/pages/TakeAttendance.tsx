import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateContentBox from "../content-box/UpdateContentBox";
import DeleteContentBox from "../content-box/DeleteContentBox";
import ReadContentBox from "../content-box/ReadContentBox";
import { Student } from "../entities/Student";

const TakeAttendance: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [editingStudentId, setEditingStudentId] = useState<number | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/students');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
            setErrorMessage('An error occurred while fetching student data.');
        }
    };

    const handleUpdateSubmit = async (updatedStudent: Student) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/students/${updatedStudent.id}/attendance`, null, {
                params: { isPresent: updatedStudent.totalAttendance > (selectedStudent?.totalAttendance ?? 0) },

            });
            if (response.status === 200) {
                setStudents(students.map(s => s.id === updatedStudent.id ? response.data : s));
                setEditingStudentId(null); // Clear editing state after update
                setErrorMessage('');
            } else {
                throw new Error('Failed to update student attendance.');
            }
        } catch (error) {
            console.error('Error updating student attendance:', error);
            setErrorMessage('An error occurred while updating attendance.');
        }
    };

    const handleDeleteClick = async (id: number) => {
        // ... (same as before)
    };

    const handleEditClick = (student: Student) => {
        setSelectedStudent(student);
        setEditingStudentId(student.id); // Set the ID of the student being edited
    };


    return (
        <div>
            <h2>Take Attendance</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {students.map((student) => (
                <div key={student.id}>
                    <ReadContentBox
                        student={student}
                        onEdit={() => handleEditClick(student)}
                        onDelete={() => handleDeleteClick(student.id)}
                    />
                    {editingStudentId === student.id && ( // Use editingStudentId for conditional rendering
                        <UpdateContentBox student={student} onSubmit={handleUpdateSubmit} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default TakeAttendance;
