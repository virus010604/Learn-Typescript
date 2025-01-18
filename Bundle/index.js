"use strict";
// let nama_saya: string = "Juan";
// let umur: number = 20;
// const a:number | string= 8.6 
function create(processor) {
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
const ryzen5 = {
    brand: "AMD",
    baseModel: "Ryzen",
    modelName: "5 5600X",
    clockSpeed: 4.6,
    core: "hayuk",
    precisionBoostOverdrive: true,
};
const intelCoreI5 = {
    brand: "intel",
    baseModel: "core i5",
    modelName: "i5-11350F",
    clockSpeed: 4.2,
    core: 11,
};
create(ryzen5);
