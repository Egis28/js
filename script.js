// let vardas = "Egis";
// let amzius = 20;
// let grupe = "JS1s";

// console.log (`mano ${vardas} , mano amzius yra ${amzius}, mano grupe yra ${grupe}`);







// let vidurkis = 8.1;
// let lankomumas = true;

// if(vidurkis>=8.5 && lankomumas) {

// console.log(`Jusu vidurkis yra ${vidurkis} ir lankomumas geras, todel stipendija gausite`);

// } else {

// console.log ("deja, stipendija jums nepriklauso");

// }




// let pajamos = 800;
// let vaikai = 2;

// if (pajamos >= 800 && vaikai === 0) {
//     console.log("sveikinu, paskola gausite");
// } else if(pajamos >= 100 && vaikai === 1) {
//     console.log("paskola gausite");
// } else if (pajamos >= 1200 && vaikai === 2) {
//     console.log ("sveikinu gavus paskola taip pat");
// } else{
//     console.log("paskola negausite");
// }



// if(pajamos === true) {
//     console.log("nesuprantu");
// }



// let menesis = "Spalis";
// switch (menesis) {
//     case "Gruodis":
//     case "Sausis" :
//     case "Vasaris":
//         console.log(`tu ivedei ${menesis}, o tai yra ziemos menesis`);
// break;
//     case "Kovas":
//     case "Balandis":
//     case "Geguze":
//         console.log(`tu ivedei ${menesis}, o tai yra pavasario menesis`);
// break;
//     case "Birzelis":
//     case "Liepa":
//     case "Rugpjutis":
//         console.log(`tu ivedei ${menesis}, o tai yra vasaros menesis`);
// break;
//     case "Rugsejis":
//     case "Spalis":
//     case "Lapkritis":
//         console.log(`tu ivedei ${menesis}, o tai yra rudens menesis`);
// break;
// default:
//     console.log("Netaisyklingai ivestas menesis")

// }


// let vardas = "martynas";
// let alga = 100;

// function pasisveikinimas(a) {
//     console.log("Labas " +a);
// }


// pasisveikinimas(vardas);


// let gyvunas ="dramblys";
//     console.log("pirmas deklaravimas " + gyvunas);
//  gyvunas ="ozka";
//     console.log ("antras deklaravimas " + gyvunas);



function calculator(numeris1,numeris2,specialus) {
 if(specialus == "*") {
    return console.log (numeris1 * numeris2);
 }

 else if(specialus =="/") {
    return console.log (numeris1 / numeris2);
 }

 else if(specialus == "+") {
     return console.log (numeris1 + numeris2);
 }

 else if(specialus == "-") {
    return console.log (numeris1 - numeris2);
 }

 else {
    return console.log ("ivedete neteisingai");
 }

}

 calculator(1141, 5, "/"); 
 calculator(20, 5, "*");
 calculator(255, 5, "+");
 calculator(1141, 5, "-");
 calculator(10, 5, "/");
 

 


