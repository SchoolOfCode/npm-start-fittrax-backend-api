import query from "..";

export {};
import { data } from "./dummyData";

const populateWorkoutTable = async () => {
  data.forEach(async (el) => {
    const result = await query(
      "INSErt INTO workouts (name, description, difficulty) VALUES ($1, $2, $3)",
      [el.name, el.description, el.difficulty]
    );
  });
};
