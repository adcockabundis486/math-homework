let express = require('express');

let app = express();

app.use(express.json());

let data = {
  "name": "Alice",
  "age": 30,
  "is_student": true
};

app.post('/api/data', (req, res) => {
  let { name, age, is_student } = req.body;
  
  if (!name || !age || !is_student) {
    return res.status(400).send("Invalid data");
  }
  
  let person = { name: name, age: age, is_student: is_student };
  
  try {
    person.save((error) => {
      if (error) {
        return res.status(500).send(error);
      }
      
      res.send(person);
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while saving the data");
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
