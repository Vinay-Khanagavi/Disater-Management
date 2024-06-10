import React from 'react';
import './ContentBox.css';
import { DisasterEvent } from '../entities/DisasterEvent';

interface ContentBoxProps {
    onSubmit: (event: DisasterEvent) => void;
    event: DisasterEvent;
}

const UpdateContentBox: React.FC<ContentBoxProps> = ({ onSubmit, event }) => {
    const [disasterEvent, setDisasterEvent] = React.useState<DisasterEvent>(event);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDisasterEvent({
            ...disasterEvent,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
        onSubmit(disasterEvent);
    };

    return (
        <div className="content-box">
            <input
                type="text"
                name="type"
                value={disasterEvent.type}
                onChange={handleChange}
                placeholder="Disaster Type"
            />
            <input
                type="text"
                name="name"
                value={disasterEvent.name}
                onChange={handleChange}
                placeholder="Reporter Name"
            />
            <input
                type="text"
                name="address"
                value={disasterEvent.address}
                onChange={handleChange}
                placeholder="Address"
            />
            <textarea
                name="description"
                value={disasterEvent.description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                type="text"
                name="severityLevel"
                value={disasterEvent.severityLevel}
                onChange={handleChange}
                placeholder="Severity Level (Low, Medium, High)"
            />
            <button onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default UpdateContentBox;
