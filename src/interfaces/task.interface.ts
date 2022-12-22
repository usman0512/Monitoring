export interface ITask {
    id?: string;
    taskCode: string;
    taskName: string;
    description?: string;
    deadline: string;
    studentsId?: string;
    url?: string;
    passed?: string;
    organizationId?: string;
}