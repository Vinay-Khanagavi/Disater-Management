import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Create this CSS file for styling
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import { Student } from "../entities/Student";


const HomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalStudents, setTotalStudents] = useState(0);
    const [totalAttendance, setTotalAttendance] = useState(0);
    const [todaysMeals, setTodaysMeals] = useState([]);
    const onChange = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const studentsResponse = await axios.get('http://localhost:8080/api/students');
                const students = studentsResponse.data as Student[];
                setTotalStudents(students.length);
                setTotalAttendance(students.reduce((sum, student) => sum + student.totalAttendance, 0));

                const mealsResponse = await axios.get('http://localhost:8080/api/meals'); // Assuming you have an API endpoint for meals
                setTodaysMeals(mealsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle errors appropriately (e.g., set an error message state)
            }
        };

        fetchStats(); // Fetch data when the component mounts
    }, []); // Empty dependency array ensures this runs only once after initial render

    return (
        <div className="home-page">
            <h1>Welcome to the Mess Management System</h1>

            {/* Carousel */}
            <section className="carousel-section">
                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={3000} // Change slide every 3 seconds
                    className="custom-carousel" // Optional class for further styling
                >
                    <div>
                        <img src="https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2023%2F07%2F24%2Fhunger-istokc-1154495-1666058165-1239988-1690168908.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop" alt="Mess Image 1" /> {/* Add your actual image URL */}
                        <p className="legend">Delicious and Nutritious Meals</p>
                    </div>
                    <div>
                        <img src="data:image/jpeg;base64,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" alt="Mess Image 2" /> {/* Add your actual image URL */}
                        <p className="legend">Hygienic and Well-Maintained Mess</p>
                    </div>
                    <div>
                        <img src="https://d13loartjoc1yn.cloudfront.net/article/1683266155_1.jpg" alt="Mess Image 3" /> {/* Add your actual image URL */}
                        <p className="legend">Variety of Food Options</p>
                    </div>
                </Carousel>
            </section>

            {/* Overview Section */}
            <section className="overview">
                <h2>Overview</h2>
                <p>
                    This Mess Management System is designed to help you efficiently manage your college mess operations, reduce food wastage, and promote a sustainable dining experience.
                </p>
                <p>
                    Our system provides tools to track student attendance, plan and organize weekly meals, and monitor food consumption patterns to minimize waste.
                </p>
            </section>

            {/* Quick Links Section */}
            <section className="quick-links">
                {/* ... your existing quick links content ... */}
            </section>

            {/* Today's Stats Section */}
            <section className="statistics">
                <h2>Today's Stats</h2>
                <div>
                    <p>Total Students: {totalStudents}</p>
                    <p>Total Attendance: {totalAttendance}</p>
                </div>
            </section>



            {/* ... (your other optional sections for Announcements, Waste Reduction Tips) ... */}
        </div>
    );
};

export default HomePage;
