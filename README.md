# Get file name from google drive URLs
* Get the file names from google drive URLs, https://drive.google.com/open?id=XXXXX.
* Run a function using Apps Script under Google Sheets

# Usage
* Create an new google sheet, and two sheets with name "data" and "output".
* Put all the links in the column A of "data" sheet. The tested format of link is https://drive.google.com/open?id=XXXXX, where XXXXX is an ID.
* Click "Extensions" and then "Apps Script". Copy and paste the function `getFileName()` in `Code.gs`, and specify `numRow`.
* Click "Run" to execute the function. The file names will be appeared in column B of "output" sheet.
