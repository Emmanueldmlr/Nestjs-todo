import {IsNotEmpty } from 'class-validator';

export class TodoDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  id: number;
  status: 'active' | 'completed';
}
