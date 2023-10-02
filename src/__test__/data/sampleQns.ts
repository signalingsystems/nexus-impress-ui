import Question from "../../redux/models/question";

 const sampleQns:Question[] =[
 {
    qn:'What country has the highest life expectancy?',
    choices:{
        choices:['Hong Kong','Canada','Austria','USA'],
        correct: 'Hong Kong'
    },
    tag:'general',
    flagged:false

 },
 {
    qn:'Where would you be if you were standing on the Spanish Steps?',
    choices:{
        choices:['Rome','Spain','Bogota','Egypt'],
        correct: 'Rome'
    },
    tag:'general',
    flagged:false

 },
 {
    qn:'Which language has the more native speakers: English or Spanish?',
    choices:{
        choices:['Spanish','English'],
        correct: 'Spanish'
    },
    tag:'general',
    flagged:true

 },
 {
    qn:'Which planet in the Milky Way is the hottest?',
    choices:{
        choices:['Mercury','Venus','Earth','Mars'],
        correct: 'Venus'
    },
    tag:'general',
    flagged:true

 }
];
export default sampleQns;