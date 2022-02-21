export {};
export const data = [
  {
    name: "Push workout",
    description: "trains: chest, shoulders, triceps",
    difficulty: "Intermediate",
    exercise: [
      { name: "pushups", sets: 2, reps: 20, restPeriod: "60 seconds" },
      {
        name: "Shoulder press (dumbbells)",
        sets: 3,
        reps: 10,
        restPeriod: "90 seconds",
      },
      {
        name: "tri-angle pushups",
        sets: 3,
        reps: 20,
        restPeriod: "90 seconds",
      },
    ],
  },
  {
    name: "Pull workout",
    description: "trains: lats, biceps and rear-delts",
    difficulty: "intermediate",
    exercise: [
      { name: "pullups", sets: 2, reps: 8, restPeriod: "60 seconds" },
      {
        name: "rear-delt flys (dumbbells)",
        sets: 4,
        reps: 12,
        restPeriod: "60 seconds",
      },
      {
        name: "bicep curls (dumbbels)",
        sets: 2,
        reps: 15,
        restPeriod: "60 seconds",
      },
    ],
  },
  {
    name: "legs workout",
    description: "trains: hamstrings, glutes, spinal erectors",
    difficulty: "beginner",
    exercise: [
      {
        name: "squats (bodyweight)",
        sets: 2,
        reps: 20,
        restPeriod: "60 seconds",
      },
      { name: "jumping jacks", sets: 1, reps: 30, restPeriod: "60 seconds" },
      { name: "good mornings", sets: 2, reps: 10, restPeriod: "45 seconds" },
    ],
  },
];
