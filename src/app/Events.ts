export interface Events {
  eventId: number;
  name: string;
  dateCreated: string;
  dateScheduled: string;
  createdBy: {
    studentId: number;
    name: string;
    surname: string;
    email: string;
  };
  course: {
    courseId: number;
    name: string;
    participants: number;
    done: boolean;
  };
  location: string;
  numOfStudents: number;
}
