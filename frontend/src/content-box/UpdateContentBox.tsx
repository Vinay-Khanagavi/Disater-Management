import React from "react";
import "./ContentBox.css";
import { Student } from "../entities/Student";

interface ContentBoxProps {
    onSubmit: (student: Student) => void;
    student: Student;
}

const UpdateContentBox: React.FC<ContentBoxProps> = ({ onSubmit, student }) => {
    const [updatedStudent, setUpdatedStudent] = React.useState<Student>(student);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setUpdatedStudent((prevState) => ({
            ...prevState,
            [name]: name === "dateOfJoining" ? new Date(value) : value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(updatedStudent); // Submit the updated student data
    };

    return (
        <div className="content-box">
            <label htmlFor="attendance">Attendance:</label>
            <select
                id="attendance"
                name="totalAttendance"
                value={updatedStudent.totalAttendance}
                onChange={handleChange}
            >
                {/* You can dynamically generate options for attendance values */}
                {[...Array(31)].map((_, i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </select>

            <button onClick={handleSubmit}>Update Attendance</button>
        </div>
    );
};

export default UpdateContentBox;
