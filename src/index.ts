// let nama_saya: string = "Juan";
// let umur: number = 20;
// const a:number | string= 8.6 

// let z: number[];
// z = [1,2]

// const x: [string, number] = ["hello", 10];

// const arr = [{a:1},{a:4}]
// const data = {
//     hallo: "Hallo",
// }

// console.log(z[1])
// console.log(x)
// console.log(data)
// console.log(a)
// console.log(arr[1])
// console.log(arr[1].a)
// console.log(data.hallo)
// console.log({nama_saya});
// console.log({umur});


// type UserType = {
//     name: string;
//     age: number;
//     address?: string;
// }

// let user: UserType;

// user = {
//     name: "Juan",
//     age: 20,
// }

// console.log(user)


// const mahasiswa = (a: number,b:string) =>{
//     return b + a;
// }
// console.log(mahasiswa(2,"mahasiswa"))
type numcore = 2 | 3 | 8 ;
type strcore = "dual core" | "one core";
type core = numcore | strcore;
interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    core: core;
    clockSpeed: number;
  }
  

  interface AMD extends IProcessor{
    precisionBoostOverdrive: boolean;
  }
  
  function create(processor: AMD): void {
    console.log(`
    ----
    terimakasih ${processor.brand} ✨
    ----
    anda telah berhasil membuat prosesor dengan detail berikut: 👇
    
    nama base model: ${processor.baseModel} ❤️
    core: ${processor.core} ❤️
    nama model: ${processor.modelName} 🎉
    kecepatan clock: ${processor.clockSpeed} 🔥
    precisionBoostOverdrive: ${processor.precisionBoostOverdrive}
    `);
  }
  

    const ryzen5: AMD = {
        brand: "AMD",
        baseModel: "Ryzen",
        modelName: "5 5600X",
        clockSpeed: 4.6,
        core: 2,
        precisionBoostOverdrive: true,
    };

  const intelCoreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    clockSpeed: 4.2,
    core: 3, 
  };
  
  create(ryzen5);  