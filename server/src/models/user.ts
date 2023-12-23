import { Schema, model } from "mongoose";


//Interfaces allow use to define the types of our objects, since we're using typescript
export interface User {
    _id?: string;
    username: string; 
    password: string; 
    followers: number; 
    following: number;   
    userDetails: {
        BusinessName: string;
        //Cuisine: string;
        //contactNumber: number;
        //averageCost: string;
    }
}



//Create the Schema/Collection 
const UserSchema = new Schema<User>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    followers: {type: Number, default: 0},
    following: {type: Number, default: 0}, 
    userDetails: {
        BusinessName: {type: String, required: true},
        //Cuisine: {type: String},
        //contactNumber: {type: Number, required: true},
        //averageCost: {type: String, required: true},
    }
});

//Export the scehiem ("name of the collection", "our actual schema")

export const UserModel = model<User>("user", UserSchema);