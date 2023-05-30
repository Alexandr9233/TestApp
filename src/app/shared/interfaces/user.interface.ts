export interface UserI {
    avatar: string,
    email: string,
    first_name: string,
    id: number,
    last_name: string
}

export interface UserResI {
    data: UserI[]
}

export interface UaserNameI {
    first_name: string,
    last_name: string
}