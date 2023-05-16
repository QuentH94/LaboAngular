

export interface User{
    id: number,
    firstname: string,
    lastname: string,
    pseudo: string,
    email: string,
    phoneNumber: string,
    role: Role,
}
export interface Role{
    user : number,
    admin : number,
    modo : number
}