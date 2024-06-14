import React from "react";
import CreateContentBox from "../content-box/CreateContentBox";
import { Student } from "../entities/Student";
import axios from "axios";

const AddStudent: React.FC = () => {
    const handleCreateSubmit = async (newStudentData: Omit<Student, "id">) => {
        try {
            // Send the newStudentData to your backend API using axios (or fetch)
            const response = await axios.post(
                "http://localhost:8080/api/students", // Replace with your actual API endpoint
                newStudentData
            );

            if (response.status === 201) {
                // Handle success (e.g., update student list, show success message)
                console.log("Student created successfully:", response.data);
            } else {
                // Handle error response
                console.error("Failed to create student:", response.data);
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Error creating student:", error);
        }
    };

    return (
        <div>
            <h2>Add New Student</h2>
            <CreateContentBox onSubmit={handleCreateSubmit} />
        </div>
    );
};

export default AddStudent;
