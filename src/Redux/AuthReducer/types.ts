
 export interface data{
    email: string;
   username: string;
   image: string;
id?:number
}

export interface AuthState {
    isAuth: boolean;
    isLoading: boolean;
    isError: boolean;
    userData:data;
    isAdmin: boolean;
  }