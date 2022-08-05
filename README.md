# Get file name from google links
* Use Google Sheets
* Useful for getting file name of links obtained from file sumbit with google form.

# Usage
* Create an new google sheet, and two sheets with name "data" and "output".
* Put all the links in the column A of "data" sheet. The tested format of link is https://drive.google.com/open?id=XXXXX, where XXXXX is an ID.
* Click "Extensions" and then "Apps Script". Copy and paste the function `getFileName()` in `Code.gs`, and specify `numRow`.
* Click "Run" to execute the function. The file names will be appeared in column B of "output" sheet.
