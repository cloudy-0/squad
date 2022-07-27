let data = [
{
    name : 'Raghad' ,
    age : '65' ,
    nickname : 'Cloudy' ,
},

{
    name : 'Tanuj' ,
    age : '70' ,
    nickname : 'Teddymon' ,
},

{
    name : 'Rachely' ,
    age : '19' ,
    nickname : 'Seachelle' ,
},

{
    name : 'Sham' ,
    age : '15' ,
    nickname : 'SugarMommy' ,
},

{
    name : 'Adel' ,
    age : '17' ,
    nickname : 'titanSlayer' ,
},

{
    name : 'Sunayana' ,
    age : '21' ,
    nickname : 'EatBullets' ,
},
{
    name : 'Lena' ,
    age : '27' ,
    nickname : 'Clouds' ,
},
{
    name : 'Shikha' ,
    age : '20' ,
    nickname : 'Kenaoii' ,
},
];


const info = document.querySelector('#info')

let details = data.map(function(item){
return (
    '<div>' + item.nickname + ' is ' + item.age + ' years old' + '</div>'
)
})

info.innerHTML = details.join('\n');

