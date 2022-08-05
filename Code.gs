function getFileName() {

  numRow = 20 // # number of rows
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  for( var rn = 1; rn <= numRow; rn = rn + 1 ){
    // get file id from "data" sheet
    dataSheet = ss.getSheetByName("data")
    driveUrl = dataSheet.getRange("A" + rn.toString() ).getValue()
    tmp = driveUrl.split("=")
    fileId = tmp[1]
    console.info(fileId)

    // get file name  
    var file=DriveApp.getFileById(fileId);
    fileName = file.getName()
    
    // set file name to "output" sheet
    var sh = ss.getSheetByName("output") 
    sh.getRange("A" + rn.toString()).setValue(driveUrl)
    sh.getRange("B" + rn.toString()).setValue(fileName)
  }
}
