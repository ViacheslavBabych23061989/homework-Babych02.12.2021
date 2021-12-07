let debet = [
  {name: 'ЗП', summ: '2000', data: '02.12.2021'},
  {name: 'дод. робота', summ: '1000', data: '04.12.2021'},
  {name: 'премія', summ: '7000', data: '05.12.2021'},
  {name: 'надбавка', summ: '300', data: '05.12.2021'},
  {name: 'девіденти', summ: '900', data: '06.12.2021'},
  {name: 'відсотки', summ: '100', data: '07.12.2021'},
  {name: 'чайові', summ: '300', data: '07.12.2021'},
];
let credit = [
  {name: 'АТБ', summ: '300', data: '02.12.2021'},
  {name: 'кафе', summ: '500', data: '04.12.2021'},
  {name: 'кіно', summ: '200', data: '04.12.2021'},
  {name: 'АЗС', summ: '1000', data: '05.12.2021'},
  {name: 'ремонт', summ: '2000', data: '06.12.2021'},
  {name: 'кредит', summ: '1000', data: '08.12.2021'},
  {name: 'АЗС', summ: '1000', data: '10.12.2021'},
];
console.log(credit[0].data);
console.log('Прибуток:');
for (let i = 0; i < debet.length; i++) {
  if ('02.12.2021' === debet[i].data) {
    console.log(`${debet[i].name}: ${debet[i].summ}`);
  }
}
console.log('Витрати:');
for (let i = 0; i < credit.length; i++) {
  if ('02.12.2021' === credit[i].data) {
    console.log(`${credit[i].name}: ${credit[i].summ}`);
  }
}
console.log(credit[1].data);
console.log('Прибуток:');
for (let i = 0; i < debet.length; i++) {
  if ('04.12.2021' === debet[i].data) {
    console.log(`${debet[i].name}: ${debet[i].summ}`);
  }
}
console.log('Витрати:');
for (let i = 0; i < credit.length; i++) {
  if ('04.12.2021' === credit[i].data) {
    console.log(`${credit[i].name}: ${credit[i].summ}`);
  }
}
console.log(credit[3].data);
console.log('Прибуток:');
for (let i = 0; i < debet.length; i++) {
  if ('05.12.2021' === debet[i].data) {
    console.log(`${debet[i].name}: ${debet[i].summ}`);
  }
}
console.log('Витрати:');
for (let i = 0; i < credit.length; i++) {
  if ('05.12.2021' === credit[i].data) {
    console.log(`${credit[i].name}: ${credit[i].summ}`);
  }
}
console.log(credit[4].data);
console.log('Прибуток:');
for (let i = 0; i < debet.length; i++) {
  if ('06.12.2021' === debet[i].data) {
    console.log(`${debet[i].name}: ${debet[i].summ}`);
  }
}
console.log('Витрати:');
for (let i = 0; i < credit.length; i++) {
  if ('06.12.2021' === credit[i].data) {
    console.log(`${credit[i].name}: ${credit[i].summ}`);
  }
}
console.log(debet[5].data);
console.log('Прибуток:');
for (let i = 0; i < debet.length; i++) {
  if ('07.12.2021' === debet[i].data) {
    console.log(`${debet[i].name}: ${debet[i].summ}`);
  }
}
console.log('Витрати:');
for (let i = 0; i < credit.length; i++) {
  if ('07.12.2021' === credit[i].data) {
    console.log(`${credit[i].name}: ${credit[i].summ}`);
  }
}
console.log(credit[5].data);
console.log('Прибуток:');
for (let i = 0; i < debet.length; i++) {
  if ('08.12.2021' === debet[i].data) {
    console.log(`${debet[i].name}: ${debet[i].summ}`);
  }
}
console.log('Витрати:');
for (let i = 0; i < credit.length; i++) {
  if ('08.12.2021' === credit[i].data) {
    console.log(`${credit[i].name}: ${credit[i].summ}`);
  }
}
console.log(credit[6].data);
console.log('Прибуток:');
for (let i = 0; i < debet.length; i++) {
  if ('10.12.2021' === debet[i].data) {
    console.log(`${debet[i].name}: ${debet[i].summ}`);
  }
}
console.log('Витрати:');
for (let i = 0; i < credit.length; i++) {
  if ('10.12.2021' === credit[i].data) {
    console.log(`${credit[i].name}: ${credit[i].summ}`);
  }
}
//let dates = [debet[0].data, debet[1].data, debet[2].data, debet[3].data, debet[4].data, debet[5].data, debet[6].data];
//for (let i = 0; i < debet.length; i++) {
    
  
//let date = dates[0][1];

   // if (date => 8) {
   //     console.log(date);
   /// } else {
  //      console.log(debet[0][1][2][3]);
  //  }
  
    
    
//}




//console.log(debet[0].data);
//onsole.log(debet[2].summ);
//console.log(debet[2].name);


/*
02.12.2021
прибуток:
ЗП: 2000
витрати:
кіно: 300
АТБ: 500




let students = [
    {name: 'Vasya', tel: 0986545654},
    {name: 'Kolya', tel: 0986545222},
    {name: 'Petya', tel: 0986545333},
];



function checkName(name) {
    let isPresent = false;

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        if (name === student.name) {
            isPresent = true;
        }
    }

    return isPresent;
}




let student = {
    name: 'Vasya', 
    age: 15, 
    tel: 0986545654, 
    avgMurk: 11, 
    rate: 123
};
let name = student.name
console.log('имя:' + name);



console.log(student);

for (let key in student) {
    console.log(key);
    console.log(student[key]);
}



    

/*console.log(`имя: ${student.name}`);
    console.log(`возраст: ${student.age}`);
    console.log(`тел.: ${student.tel}`);
    console.log(`ср.бал.: ${student.avgMurk}`);
    console.log(`номер в рейтинге: ${student.rate}`);






/*let tests = [
    ['2+2=5?', false],
    ['2*2=4?', true],
    ['3*3=10?', false],
    ['5-2=1', false],
];


for (let i = 0; i < tests.length; i++) {
    let question = tests[i][0];
    let correctAnswer = tests[i][1];
    let userAnswer = confirm(question);

    if (userAnswer === correctAnswer) {
        alert('правильно');
    } else {
        alert ('неправильно');
    }
}*/


/*let users = [
    ['Dima', 2000],
    ['Vasya', 1997],
    ['Kolya', 1995]
];

for (let i = 0; i < users.length; i++) {
    console.log(`имя: ${users[i][0]}, год рождения: ${users[i][1]}`);
}*/

/* function checkName() {
    let isPresent = false;

    for (let i = 0; i < 10; i++) {
        
        console.log(i === 5);
        if (i === 5) {
            isPresent = true;
            
        }
    }

    return isPresent;
}
console.log(checkName()); */