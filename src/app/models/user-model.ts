

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

export interface createUser{
    email : string,
    password : string,
    passwordConfirmation : string,
    pseudo : string,
}
export interface login{
    email : string,
    password : string,
}

export interface changeData{
    firstname: string,
    lastname: string,
    pseudo: string,
}