export class CourseModel {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public teacherId: number,
        // public createdAt: Date,
        // public updatedAt: Date
    ) {}
}