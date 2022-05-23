INSERT INTO department (department_name)
VALUES 
    ("executive"),
    ("accounting"),
    ("parks"),
    ("media");

INSERT INTO role (title, salary, department_id)
VALUES
    ("CEO", 1000000, 1),
    ("COO", 850000, 1),
    ("Accountant", 150000, 2),
    ("Parks Director", 200000, 3),
    ("Media Director", 100000, 4),

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Kendall", "Roy", 1, 1),
    ("Roman", "Roy", 2, 2),
    ("Connor", "Roy", 3, 3),
    ("Tom", "Wabsgans", 4, 4),
    ("Siobahn", "Roy", 5, 5),
    ("Greg", "Hirsch", 5, 6);