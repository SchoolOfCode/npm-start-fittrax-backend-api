import query from "..";

export {};
import { workoutData } from "./dummyData";
import { exerciseData } from "./dummyData";

const populateWorkoutTable = async () => {
  workoutData.forEach(async (el) => {
    const result = await query(
      "INSERT INTO workouts (id, name, description, difficulty) VALUES ($1, $2, $3, $4);",
      [el.id, el.name, el.description, el.difficulty]
    );
  });
};

const populateExerciseTable = async () => {
  exerciseData.forEach(async (el) => {
    const result = await query(
      "INSERT INTO exercises (name, sets, reps, rest_period, work_ref) VALUES ($1, $2, $3, $4, $5);",
      [el.name, el.sets, el.reps, el.restPeriod, el.workout_ref]
    );
  });
};

populateWorkoutTable();
populateExerciseTable();
