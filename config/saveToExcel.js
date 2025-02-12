const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const EXCEL_FILE_PATH = path.join(__dirname, "..", "data", "contact_data.xlsx");

const saveToExcel = (data, sheetName) => {
  try {
    let workbook;
    let worksheet;

    if (fs.existsSync(EXCEL_FILE_PATH)) {
      workbook = xlsx.readFile(EXCEL_FILE_PATH);
      worksheet = workbook.Sheets[sheetName] || xlsx.utils.aoa_to_sheet([]);
    } else {
      workbook = xlsx.utils.book_new();
      worksheet = xlsx.utils.aoa_to_sheet([]);
    }

    let jsonData = xlsx.utils.sheet_to_json(worksheet);
    jsonData.push(data);

    const newWorksheet = xlsx.utils.json_to_sheet(jsonData);
    workbook.Sheets[sheetName] = newWorksheet;
    xlsx.writeFile(workbook, EXCEL_FILE_PATH);

    console.log(`✅ Data saved to "${sheetName}" successfully!`);
  } catch (error) {
    console.error("❌ Error saving to Excel:", error);
  }
};

module.exports = { saveToExcel };
