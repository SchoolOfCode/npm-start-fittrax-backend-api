export {};

import query from "..";

const createWorkoutTable = () => {
  return query(
    "CREATE TABLE IF NOT EXISTS workouts (id SERIAL PRIMARY KEY, name TEXT, description TEXT, difficulty TEXT, exercises BJSON)"
  );
};

createWorkoutTable();
