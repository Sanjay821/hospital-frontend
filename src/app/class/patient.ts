import { Doctor } from './doctor';
export class Patient {
   id?: number | undefined;
   name?: string;
   date?: string;
   age?: number;
   doc?: Doctor | undefined;
}
