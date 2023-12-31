import { StudySet } from "../../redux/models/state.models";

export const studySetList:StudySet[] =[ 
    {
    date: 'sept ,2023',
    title: 'Disease mechanismes Exam 5',
    owner: 'Flemming',
    score: 34.5,
    url:"path/to/quiz",
    tags:['science','history','epidemiology','general','Any']
},
{
    date: 'sept ,2023',
    title: 'Cybersecurity: penetration testing exam ',
    owner: 'Flemming',
    score: 74.83,
    url:"path/to/quiz",
    tags:['geography','security','it','cybersecurity','compsci']
},
]
export const sampleProfileTags = [... studySetList[0].tags! ,... studySetList[1].tags! ]