const express = require('express');
const app = express();

// 1. CRITICAL: This middleware parses the incoming JSON request body
app.use(express.json());

// Initial array of students
let students = [
  { id: 1, name: 'Nikhil', branch: 'CSE', age: 20 },
  { id: 2, name: 'Piyush', branch: 'IT', age: 21 },
  { id: 3, name: 'Priya', branch: 'CSE', age: 20 },
  { id: 4, name: 'Prashant', branch: 'ECE', age: 120 }
];

// 2. GET route to see all students (Open http://localhost:3006/students in browser)
app.get('/students', (req, res) => {
  res.json(students);
});

// 3. POST route to add a new student
app.post('/students', (req, res) => {
  const newStudent = req.body;
  
  // Basic check to make sure the body isn't empty
  if (!newStudent || Object.keys(newStudent).length === 0) {
    return res.status(400).json({ error: "Request body cannot be empty" });
  }

  students.push(newStudent);
  
  // Fixed typo (newStudent) and fixed comma to a dot (.json)
  res.status(201).json({ 
    message: "Student added successfully", 
    student: newStudent 
  });
});

// Start the server
app.listen(3006, () => {
  console.log('Server running at http://localhost:3006');
});
