export class LessonModel {
    constructor(
        public id: number,
        public title: string,
        public content: string,
        public courseId: number,
        // public createdAt: Date,
        // public updatedAt: Date
    ) {}
}