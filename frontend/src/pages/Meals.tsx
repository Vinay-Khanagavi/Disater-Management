import React from "react";
import "./Meals.css";

const Meals: React.FC = () => {
    // Hardcoded array of meals for the week
    const meals = [
        {
            id: 1,
            name: "Breakfast (Monday)",
            date: new Date(2023, 5, 12),
            items: ["Poha", "Tea", "Fruit Salad"],
        },
        {
            id: 2,
            name: "Lunch (Monday)",
            date: new Date(2023, 5, 12),
            items: ["Rice", "Dal Makhani", "Mixed Vegetables", "Roti"],
        },
        {
            id: 3,
            name: "Dinner (Monday)",
            date: new Date(2023, 5, 12),
            items: ["Chicken Biryani", "Raita", "Salad"],
        },
        // ... Add more meals for the rest of the week
    ];

    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long", // Specify "long" format for weekday
            year: "numeric",  // Specify "numeric" format for year
            month: "long",    // Specify "long" format for month
            day: "numeric"    // Specify "numeric" format for day
        };
        return date.toLocaleDateString(undefined, options);
    };


    return (
        <div className="meals-container">
            <h2>Meals for the Week</h2>
            <ul>
                {meals.map((meal) => {
                    try {
                        return (
                            <li key={meal.id} className="meal-item">
                                <h3>{meal.name} - {formatDate(meal.date)}</h3>
                                <ul>
                                    {meal.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </li>
                        );
                    } catch (error) {
                        console.error("Error rendering meal:", error);
                        return null; // Don't render the meal if there's an error
                    }
                })}
            </ul>
        </div>
    );
};

export default Meals;
