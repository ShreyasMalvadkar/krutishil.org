const fs = require("fs");

const filePath = "data.json"; // Replace with the path to your JSON file

// Load the JSON data from the file
const rawData = fs.readFileSync(filePath);
const jsonData = JSON.parse(rawData);

// Function to delete an object from the JSON data
function deleteObject(key) {
  if (jsonData.hasOwnProperty(key)) {
    delete jsonData[key];
    return true;
  }
  return false;
}

const objectToDelete = "objectKey"; // Replace with the key of the object you want to delete

if (deleteObject(objectToDelete)) {
  // Object was deleted successfully, now write the updated JSON back to the file
  const updatedData = JSON.stringify(jsonData, null, 2); // The third argument adds indentation for readability
  fs.writeFileSync(filePath, updatedData);
  console.log(`Object with key "${objectToDelete}" was deleted.`);
} else {
  console.log(`Object with key "${objectToDelete}" not found.`);
}
