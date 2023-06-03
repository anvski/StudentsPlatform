import { Course } from './course';
import { Student } from './student';

export interface Event {
  /*
    Integer eventId;
    String name;
    Date dateCreated;
    Date dateScheduled;
    @OneToOne
    Student createdBy;
    @ManyToOne
    Course course;
    String location;
    Integer numOfStudents; */

  eventId: number;
  name: string;
  dateCreated: Date;
  dateScheduled: Date;
  createdBy: Student;
  course: Course;
  location: string;
  numOfStudents: number;
}
