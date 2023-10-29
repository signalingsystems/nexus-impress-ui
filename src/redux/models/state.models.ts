export interface ProfileState{
    name:string;
    description?:string;
    profilePic?:string;
    tags:string[];
    quizzesTaken:number;
    badges:string[];
    email:string;
    score:number;
    studySets: StudySet[]
    
}
export  interface StudySet{
    date:string;
    title:string;
    owner:string;
    score:number;
    url?:string
    tags?:string[]
}