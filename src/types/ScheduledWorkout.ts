import { Exercise } from "./Exercise";
import { Workout } from "./Workout";

export type ScheduledWorkout = {
    '_id': number
    title: string
    date: string
}

export interface ScheduledWorkoutPayload {
    workout: Workout,
    exercises: Array<Exercise>
}