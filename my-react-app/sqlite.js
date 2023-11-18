const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('myDatabaseFile.db');

db.serialize(() => {
  db.run(`CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    CustomerName VARCHAR(50),
    Phone INT,
    Email VARCHAR(100),
    Food VARCHAR(10000)
  )`);

  db.run(`INSERT INTO Orders (OrderID, CustomerID, CustomerName, Phone, Email, Food) VALUES (0, 1, 'Test User', '111-111-1111', 'test@gmail.com', '2 Edamame 2 California Roll 1 Tempura')`);

  db.each("SELECT * FROM Orders", (err, row) => {
      console.log(row);
  });
});

db.close();