export class TodoDto {
    status: 'active' | 'completed';
    title: string;
    description: string;
    id: number;
}