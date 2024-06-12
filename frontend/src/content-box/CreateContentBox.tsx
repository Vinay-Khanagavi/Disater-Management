import React, { useState } from "react";
import "./ContentBox.css";
import { Student } from "../entities/Student";
import axios from "axios";

// Define an interface for the component's props
interface CreateContentBoxProps {
    onSubmit: (student: Omit<Student, "id">) => void;
}

const CreateContentBox: React.FC<CreateContentBoxProps> = ({ onSubmit }) => {
    // Initialize the student state with empty values
    const [student, setStudent] = useState<Omit<Student, "id">>({
        name: "",
        rollNumber: "",
        department: "",
        batch: "",
        dateOfJoining: new Date(),
        contactInfo: "",
        totalAttendance: 0, // Initialize attendance to 0
    });

    // Function to handle changes in input fields
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;

        // Update the student state based on the changed input field
        setStudent((prevState) => ({
            ...prevState,
            [name]: name === "dateOfJoining" ? new Date(value) : value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            // Send a POST request to your Spring Boot backend to create the student
            const response = await axios.post("http://localhost:8080/api/students", student); // Assuming your API endpoint is /api/students

            if (response.status === 201) { // 201 Created status indicates success
                // Clear the form after successful submission
                setStudent({
                    name: "",
                    rollNumber: "",
                    department: "",
                    batch: "",
                    dateOfJoining: new Date(),
                    contactInfo: "",
                    totalAttendance: 0,
                });

                // Call the onSubmit prop to notify the parent component (e.g., App.js)
                onSubmit(response.data);
            } else {
                // Handle other response statuses (e.g., errors)
                console.error("Failed to create student:", response.statusText);
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Error creating student:", error);
        }
    };

    return (
        <div className="content-box">
            <h2>Add New Student</h2>

            {/* Input fields for student information */}
            <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Student Name" />
            <input type="text" name="rollNumber" value={student.rollNumber} onChange={handleChange} placeholder="Roll Number" />
            {/* ... other input fields for department, batch, dateOfJoining, contactInfo */}
            <input
                type="text"
                name="department"
                value={student.department}
                onChange={handleChange}
                placeholder="Department"
            />

            <input
                type="text"
                name="batch"
                value={student.batch}
                onChange={handleChange}
                placeholder="Batch (e.g., 2025)"
            />

            <input
                type="date"
                name="dateOfJoining"
                value={student.dateOfJoining.toISOString().split("T")[0]} // Format date
                onChange={handleChange}
            />

            <input
                type="text"
                name="contactInfo"
                value={student.contactInfo}
                onChange={handleChange}
                placeholder="Contact Information (Email or Phone)"
            />

            <button onClick={handleSubmit}>Add Student</button>
        </div>
    );
};

export default CreateContentBox;
