export {};

import query from "..";

const createWorkoutTable = () => {
  return query(
    "CREATE TABLE IF NOT EXISTS workouts (id TEXT, name TEXT, description TEXT, difficulty TEXT);"
  );
};

const createExerciseTable = () => {
  return query(
    "CREATE TABLE IF NOT EXISTS exercises (id SERIAL PRIMARY KEY, name TEXT, sets INT, reps INT, rest_period TEXT, workout_ref TEXT);"
  );
};

createWorkoutTable();
createExerciseTable();
