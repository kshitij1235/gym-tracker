-- Create the 'exercises' table
CREATE TABLE exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Create the 'tblset' table
CREATE TABLE tblset (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    exercise_id INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    unit TEXT NOT NULL,
    logged_at DATETIME NOT NULL,
    FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);
