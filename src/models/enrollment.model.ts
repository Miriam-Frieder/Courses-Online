export class EnrollmentModel {
    constructor(
        public id: number,
        public userId: number,
        public courseId: number,
        public enrolledAt: Date
    ) {}
}