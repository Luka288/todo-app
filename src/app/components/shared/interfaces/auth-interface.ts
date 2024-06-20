import { JwtResponse } from "./index";

export interface authInter {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    address: string;
    phone: string;
    zipcode: string;
    avatar: string;
    gender: UserGender;
    _id: string;
}

export type excludeUser = 'password'

export type UserGender = "MALE" | "FEMALE" | "OTHER";

export interface user extends Omit<authInter, excludeUser>, JwtResponse{
    _id: string;
    role: role;
    verified: boolean;
}

export type role = 'default' | 'moderator' | 'admin'