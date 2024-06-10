import React from 'react';
import CreateContentBox from '../content-box/CreateContentBox';
import { useState } from 'react';
import {DisasterEvent} from "../entities/DisasterEvent";
// import UpdateContentBox from '../components/ContentBox/UpdateContentBox';
// import ReadContentBox from '../components/ContentBox/ReadContentBox';


const IncidentReportingPage: React.FC = () => {
    const [disasterEvents, setDisasterEvents] = useState<DisasterEvent[]>([]);
    const [selectedEvent, setSelectedEvent] = useState<DisasterEvent | null>(null);
    const [editing, setEditing] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleCreateSubmit = (newDisasterEvent: Omit<DisasterEvent, 'id'>) => {
        // ... (rest of the code will be the same)
    };
    return (
        <div>
            <CreateContentBox onSubmit={handleCreateSubmit} />
        </div>

    );
};
export default IncidentReportingPage;
