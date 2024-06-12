export interface Student {
    id: number;
    name: string;
    rollNumber: string;
    department: string; // Optional
    batch: string;      // Optional
    dateOfJoining: Date;
    contactInfo: string;
    totalAttendance: number; // New field to track attendance
}
