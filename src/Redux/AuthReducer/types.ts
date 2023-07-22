
 export interface data{
    email: string;
   username: string;
   image: string;

}

export interface AuthState {
    isAuth: boolean;
    isLoading: boolean;
    isError: boolean;
    userData:data;
    isAdmin: boolean;
  }