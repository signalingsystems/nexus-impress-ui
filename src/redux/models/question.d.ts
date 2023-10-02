export default interface Question {
    qn:string;
    choices:Choice;
    tag:string;
    flagged:boolean;

};
export interface Choice{
    choices:{}
    correct:string;

};