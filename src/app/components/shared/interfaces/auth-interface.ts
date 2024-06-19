
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


export type UserGender = "MALE" | "FEMALE" | "OTHER";