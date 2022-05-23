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
    ("Kendall", "Roy", 1, null),
    ("Roman", "Roy", 2, null),
    ("Connor", "Roy", 3, 1),
    ("Tom", "Wabsgans", 4, 2),
    ("Siobahn", "Roy", 5, 2),
    ("Greg", "Hirsch", 5, 2);