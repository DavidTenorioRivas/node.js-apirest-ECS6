/**
 * Created by user on 26/03/2017.
 */
var davidPromesa=new Promise((resolve,reject)=>{
    var first=-5;
    var second = 10;
    if (first<0 ){
        reject('Fail');
    }
    var suma = first+second;
    resolve(suma);
});

davidPromesa.then((suma)=>{
   console.log(suma);
}).catch((msg)=>{
    console.log(msg);
});