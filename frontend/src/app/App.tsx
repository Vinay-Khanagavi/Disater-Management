import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import CreateContentBox from "../content-box/CreateContentBox";
import ReadContentBox from "../content-box/ReadContentBox";
import UpdateContentBox from "../content-box/UpdateContentBox";
import DeleteContentBox from "../content-box/DeleteContentBox";
import Meals from "../pages/Meals";
import { Student } from "../entities/Student";
import AboutPage from "../pages/AboutPage";

const App: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/students');
            setStudents(response.data);
            setErrorMessage('');
        } catch (error) {
            console.error('Error fetching students:', error);
            setErrorMessage('An error occurred while fetching student data.');
        }
    };

    const handleCreateSubmit = async (newStudent: Omit<Student, 'id'>) => {
        try {
            const response = await axios.post('http://localhost:8080/api/students', newStudent);
            if (response.status === 201) {
                setStudents([response.data, ...students]); // Add new student to list
                setErrorMessage('');
            } else {
                throw new Error('Failed to create student.');
            }
        } catch (error) {
            console.error('Error creating student:', error);
            setErrorMessage('An error occurred while creating the student.');
        }
    };

    const handleUpdateSubmit = async (updatedStudent: Student) => {
        try {
            const initialAttendance = selectedStudent?.totalAttendance || 0; // Default to 0 if not found
            const response = await axios.put(
                `http://localhost:8080/api/students/${updatedStudent.id}/attendance`,
                null,
                {
                    params: {
                        isPresent: updatedStudent.totalAttendance > initialAttendance,
                    },
                }
            );
        } catch (error) {
            console.error('Error updating student attendance:', error);
            setErrorMessage('An error occurred while updating attendance.');
        }
    };

    const handleEditClick = (student: Student) => {
        setSelectedStudent(student);
        setIsEditing(true);
    };

    const handleDeleteClick = async (id: number) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/students/${id}`);
            if (response.status === 204) { // No Content on successful delete
                setStudents(students.filter(e => e.id !== id));
                setErrorMessage('');
            } else {
                throw new Error('Failed to delete student.');
            }
        } catch (error) {
            console.error('Error deleting student:', error);
            setErrorMessage('An error occurred while deleting the student.');
        }
    };

    return (
        <div className="app">
            <Navbar />

            <main className="app-container">
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-student" element={<CreateContentBox onSubmit={handleCreateSubmit} />} />
                    <Route
                        path="/take-attendance"
                        element={
                            <div className="page-content">
                                {/* Conditionally render UpdateContentBox only for the selected student */}
                                {students.map((student) => (
                                    <React.Fragment key={student.id}>
                                        <ReadContentBox
                                            student={student}
                                            onEdit={() => handleEditClick(student)}
                                            onDelete={() => handleDeleteClick(student.id)}
                                        />

                                        {selectedStudent?.id === student.id && isEditing ? (
                                            <UpdateContentBox student={student} onSubmit={handleUpdateSubmit} />
                                        ) : null}
                                        {selectedStudent?.id === student.id && !isEditing ? (
                                            <DeleteContentBox student={student} onSubmit={handleDeleteClick} />
                                        ) : null}
                                    </React.Fragment>
                                ))}
                            </div>
                        }
                    />
                    <Route path="/meals" element={<Meals />} />
                    <Route path="/about-us" element={<AboutPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;