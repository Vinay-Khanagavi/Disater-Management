import React from 'react';
import './ContentBox.css';
import { DisasterEvent } from '../entities/DisasterEvent';

interface ContentBoxProps {
    onSubmit: (id: number) => void;
    event: DisasterEvent;
}

const DeleteContentBox: React.FC<ContentBoxProps> = ({ onSubmit, event }) => {

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = () => {
        onSubmit(event.id);
    };

    return (
        <div className="content-box">
            {/* Display disaster event details */}
            <p>Name of the Disaster: {event.name}</p>
            <p>Type: {event.type}</p>
            <p>Reporter Name: {event.name}</p>
            <p>Address: {event.address}</p>
            <p>Date: {formatDate(event.date)}</p>
            <p>Severity: {event.severityLevel}</p>
            <p>Description: {event.description}</p>

            <button onClick={handleSubmit}>Delete</button>
        </div>
    );
};

export default DeleteContentBox;