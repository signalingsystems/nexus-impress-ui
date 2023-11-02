import Question from "../../redux/models/question.model";

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

 },
 {
    qn:'Which African country was formerly known as Abyssinia?',
    choices:{
        choices:['Sudan','Ethiopia','Malawi','Egypt'],
        correct:'Ethiopia'
    },
    tag:'geography',
    flagged:false
},
{
    qn:'What is the softest mineral in the world?',
    choices:{
        choices:['Feldspar','Talc','Calscite','Gypsum'],
        correct:'Talc'
    },
    tag:'Geology',
    flagged:false
},
{
    qn:'Which two countries share the longest international border?',
    choices:{
        choices:['Canada and the USA','Kazakhstan and Rusiia','Argentina and Chile','China and Mongolia'],
        correct:'Canada and the USA'
    },
    tag:'geography',
    flagged:false
},
{
    qn:'What was the first US state?',
    choices:{
        choices:['Massachusetts','New Jersey','Virginia','Delaware',],
        correct:'Delaware'
    },
    tag:'history',
    flagged:false
},
{
    qn:'What’s the most expensive home in the world?',
    choices:{
        choices:['Buckingham Palace','Antilia','Villa Leopolda','Les Palais Bulles'],
        correct:'Buckingham Palace'
    },
    tag:'general',
    flagged:false
},
{
    qn:'What country has the world’s most ancient forest?',
    choices:{
        choices:['Brazil','Australia','Japan','USA'],
        correct:'Australia'
    },
    tag:'general',
    flagged:false
}
];
export default sampleQns;