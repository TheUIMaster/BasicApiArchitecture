import { getToken } from "./token";

export const getDefaultHeaders = function (){
    return {
        "Content-Type": "application/json",
        "Authorization": "Bearer " +  getToken(),
    }
}