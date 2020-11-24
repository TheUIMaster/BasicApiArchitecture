import { Fetch } from "../fetch";

export const requestInProgress = {};

let endpoints = { 
    getUser: "/Users/getProfile?id"
}

export const users = {
    getUser: (id) => { 
        return Fetch("/Users/getprofile?id=" + id,  );
    }
}