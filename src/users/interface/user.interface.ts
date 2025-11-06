export interface Users {
    id: number
    name: string
    email: string
    password: string 
    // createdAt DateTime @default(now())

}

export interface User {
  email: string;
  name: string;
}