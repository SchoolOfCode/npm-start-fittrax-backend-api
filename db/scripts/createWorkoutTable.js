import query from "..";

function createWorkoutTable() {
  return query(
    "CREATE TABLE IF NOT EXISTS workouts (id SERIAL PRIMARY KEY, name text, description text, difficulty text, exercise json )"
  );
}
