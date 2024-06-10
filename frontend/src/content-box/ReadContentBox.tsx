import React from 'react';
import './ContentBox.css';
import { DisasterEvent } from '../entities/DisasterEvent';

interface ReadContentBoxProps {
    event: DisasterEvent;
    onEdit: () => void;
    onDelete: () => void;
}

const ReadContentBox: React.FC<ReadContentBoxProps> = ({ event, onEdit, onDelete }) => {
    const formatDate = (dateString: Date): string => {
        if (!dateString) return "Invalid Date";
        const date = new Date(dateString);

        if (isNaN(date.getTime())) { // Check if the date is valid
            return 'Invalid Date'; // or some other error message
        }

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is 0-indexed
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    return (
        <div className="content-box">
            <p>Name of the Disaster: {event.name}</p>
            <p>Type: {event.type}</p>
            <p>Location: {event.address}</p>
            <p>Date: {formatDate(event.date)}</p>
            <p>Severity: {event.severityLevel}</p>
            <p>Description: {event.description}</p>
            {/* Edit and Delete Buttons */}
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default ReadContentBox;

