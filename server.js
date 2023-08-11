// server.js
const express = require("express");
const fs = require("fs");
var cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001; // Change this to your desired port

const filename = "suggestion.json";

app.use(cors());

app.use(bodyParser.json());

const users = [
  { username: "admin", password: "admin123" },
  { username: "krutishil", password: "krutishil" },
  // Add more users as needed
];

app.post("/api/saveSuggestion", (req, res) => {
  const { name, suggestion } = req.body;

  // Perform any additional validation on the server-side if needed
  const date = new Date();
  // Save the data to a JSON file
  const dataToSave = { name, suggestion, date };
  const jsonData = dataToSave;
  saveObjectToFile(filename, jsonData);
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists and the password matches
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // User is authenticated
    res.sendStatus(200);
    console.log("Logged in");
  } else {
    // Authentication failed
    res.status(401).send("Invalid username or password");
  }
});

app.get("/api/suggestions", (req, res) => {
  // Read the suggestions from the JSON file
  fs.readFile("suggestion.json", (err, data) => {
    if (err) {
      console.error("Failed to read suggestion:", err);
      res.status(500).send("Failed to fetch suggestion");
    } else {
      try {
        const suggestions = JSON.parse(data);
        res.json({ suggestions });
      } catch (error) {
        console.error("Failed to parse suggestions:", error);
        res.status(500).send("Failed to fetch suggestions");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function saveObjectToFile(filename, dataObject) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        // File does not exist, create a new JSON file and save the object
        fs.writeFile(filename, JSON.stringify([dataObject]), "utf8", (err) => {
          if (err) {
            console.error("Error creating file:", err);
          } else {
            console.log("Object saved to", filename);
          }
        });
      } else {
        console.error("Error reading file:", err);
      }
    } else {
      // File exists, append the object to the existing JSON array or create a new array
      let existingData;
      try {
        existingData = JSON.parse(data);
        if (!Array.isArray(existingData)) {
          existingData = [existingData]; // Convert to array if it's not an array
        }
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
        return;
      }

      existingData.push(dataObject);

      fs.writeFile(filename, JSON.stringify(existingData), "utf8", (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Object appended to", filename);
        }
      });
    }
  });
}
