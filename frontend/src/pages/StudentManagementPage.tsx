import React, { useState, useEffect } from 'react';
import './IncidentReportingPage.css';
import { Student } from '../entities/Student';
import CreateContentBox from '../content-box/CreateContentBox';
import ReadContentBox from '../content-box/ReadContentBox';
import UpdateContentBox from '../content-box/UpdateContentBox';
import DeleteContentBox from '../content-box/DeleteContentBox';

const StudentManagementPage: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        setErrorMessage(''); // Reset error before fetching
        try {
            const response = await fetch('http://localhost:8080/api/students');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data: Student[] = await response.json();
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
            setErrorMessage('An error occurred while fetching student data.');
        }
    };

    const handleCreateSubmit = async (newStudent: Omit<Student, 'id'>) => {
        try {
            const response = await fetch('http://localhost:8080/api/students', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newStudent),
            });

            if (response.ok) {
                const createdStudent: Student = await response.json();
                setStudents([createdStudent, ...students]);
                setErrorMessage('');
            } else {
                throw new Error('Failed to create student.');
            }
        } catch (error) {
            console.error('Error creating student:', error);
            setErrorMessage('An error occurred while creating the student.');
        }
    };

    const handleEditClick = (student: Student) => {
        setSelectedStudent(student);
        setIsEditing(true);
    };

    const handleUpdateSubmit = async (updatedStudent: Student) => {
        try {
            const response = await fetch(`http://localhost:8080/api/students/${updatedStudent.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedStudent),
            });

            if (response.ok) {
                const updatedStudentFromServer: Student = await response.json();
                setStudents(students.map(s => s.id === updatedStudentFromServer.id ? updatedStudentFromServer : s));
                setIsEditing(false);
                setSelectedStudent(null);
                setErrorMessage('');
            } else {
                throw new Error('Failed to update student.');
            }
        } catch (error) {
            console.error('Error updating student:', error);
            setErrorMessage('An error occurred while updating the student.');
        }
    };

    const handleDeleteClick = (id: number) => {
        fetch(`http://localhost:8080/api/students/${id}`, { method: 'DELETE' })
            .then(() => {
                setStudents(students.filter(e => e.id !== id));
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error deleting student:', error);
                setErrorMessage('Failed to delete student.');
            });
    };

    return (
        <div className="incident-reporting-page">
            {/* Section for adding/editing a student */}
            <section className="report-form-section">
                <h2 className="page-title">
                    {isEditing ? 'Edit Student Information' : 'Add New Student'}
                </h2>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {isEditing ? (
                    <UpdateContentBox student={selectedStudent!} onSubmit={handleUpdateSubmit} />
                ) : (
                    <CreateContentBox onSubmit={handleCreateSubmit} />
                )}
            </section>

            {/* List of Students */}
            <section className="event-list-section">
                <h2 className="page-title">Student List</h2>
                <ul className="event-list">
                    {students.map((student) => (
                        <li key={student.id} className="event-item">
                            <ReadContentBox
                                student={student}
                                onEdit={() => handleEditClick(student)}
                                onDelete={() => handleDeleteClick(student.id)}
                            />
                            {selectedStudent?.id === student.id && !isEditing && (
                                <DeleteContentBox
                                    student={student}
                                    onSubmit={handleDeleteClick}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default StudentManagementPage;
