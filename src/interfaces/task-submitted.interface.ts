export interface ITaskSubmitted {
    id?: string;
    taskCode: string;
    studentId?: string;
    studentName?: string;
    url?: string;
    taskName?: string;
    dateOfSubmission?: string;
    remarks?: string;
    score?: string;
    organizationId?: string;
}