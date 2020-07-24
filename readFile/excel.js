if(typeof require !== 'undefined') XLSX = require('xlsx');
const path = require('path');
const filePath = path.join(__dirname,'..','..','wdio','inputFile','TestCase.xlsx')
var workbook = XLSX.readFile(filePath);
class readFileExcel{
  //Đọc một sheet trong file excel 
  read(sheetName){
    var ws = workbook.Sheets[sheetName];
    if(ws == null)
      {
          throw "The sheet is not exist";
      }
    var range = XLSX.utils.decode_range(ws['!ref']);
    var num_rows = range.e.r - range.s.r + 1;
    var num_cols = range.e.c - range.s.c + 1;
    for (var row = 1; row <= num_rows; row++){

    }
    
  }  
}
module.exports = new readFileExcel();
