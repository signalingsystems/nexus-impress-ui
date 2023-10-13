export default interface ProfileState{
    name:string;
    description?:string;
    profilePic?:string;
    tags:string[];
    quizzesTaken:number;
    badges:string[];
    email:string;
    score:number;
    
}