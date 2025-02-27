export type Role = 'admin' | 'student' | 'teacher';
export class UserModel {
    constructor(
        public id: number,
        public username: string,
        public email: string,
        public password: string,
        public role: Role) { }
}

