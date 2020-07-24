// const xlsxFile = require('read-excel-file/node');
// const path = require('path');
// const filePath = path.join(__dirname,'..','..','wdio','inputFile','InputTest.xlsx')

 
// xlsxFile(filePath, {sheet: 'Config'}).then((rows) => {
//     for (i in rows){
//       for (j in rows[i]){
//           console.table(rows[i][j]);
//         }
//       }
// })

if(typeof require !== 'undefined') XLSX = require('xlsx');
const path = require('path');
const filePath = path.join(__dirname,'..','..','wdio','inputFile','TestCase.xlsx')
var workbook = XLSX.readFile(filePath);
/* DO SOMETHING WITH workbook HERE */
var first_sheet_name = workbook.SheetNames[0];
// var address_of_cell = 'A1';

/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];
console.log(worksheet)
// /* Find desired cell */
// var desired_cell = worksheet[address_of_cell];
// console.log(desired_cell)
// /* Get the value */
// var desired_value = (desired_cell ? desired_cell.v : undefined);
// console.log(desired_value)

// var sheet_name_list = workbook.SheetNames;
//         let count = [];
//         for (var sheetIndex = 0; sheetIndex < sheet_name_list.length; sheetIndex++) {
//             var worksheet = workbook.Sheets[sheet_name_list[sheetIndex]];
//             console.log(sheet_name_list)
//             var range = XLSX.utils.decode_range(worksheet['!ref']);
//             var num_rows = range.e.r - range.s.r + 1;
//             count.push({
//                 data_count: num_rows
//             }); 
//         }
//         return console.log(count);
