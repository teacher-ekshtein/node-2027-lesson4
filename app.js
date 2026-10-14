// ייבוא אחרי שהתקנו את הספריה
// const hebrewDate = require("hebrew-date");
import hebrewDate from "hebrew-date";

// When not providing a date object, the months are one-indexed
console.log(hebrewDate(2016, 10, 2));
// { year: 5776, month: 13, date: 29, month_name: 'Elul' }

console.log(hebrewDate(new Date()));
// { year: 5787, month: 2, date: 3, month_name: 'Heshvan' }


// ======== CommonJS Modules (sync) ========
// require
// module.exports

// ======== ES6 Modules (async) ========
// import
// export, export default