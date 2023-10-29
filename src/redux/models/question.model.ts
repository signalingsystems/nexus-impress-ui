export default interface Question {
    qn:string;
    choices:Choice;
    tag:string;
    flagged:boolean;

}
export interface Choice{
    choices:string[]
    correct:string;

}
export type UserChoice ={qn:string,ans:string}