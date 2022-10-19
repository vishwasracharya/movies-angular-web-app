export interface UserModelData {
    result: UserModel;
}

export class UserModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
    isAdmin: boolean;
    movies: string | number | any;
}