import axios from 'axios'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Exercise } from "../types/Exercise";
import ExerciseDisplay from "./ExerciseDisplay";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import { ScheduledWorkoutPayload } from "../types/ScheduledWorkout";
import { Workout } from "../types/Workout";
import Progress from "./Progress";

export const ExerciseNumberContext = createContext<[number, Dispatch<SetStateAction<number>>, number]>([0, () => null, 0])

function Workouts(): JSX.Element {
    const [workout, setWorkout] = useState<Workout>()
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [exerciseIndex, setExerciseIndex] = useState<number>(0)

    useEffect(() => {
        (async () => {
            // const { data: result } = await axios.get<ScheduledWorkoutPayload>(`${process.env.REACT_APP_SIMPLE_WORKOUT_API}/scheduled_workouts?workoutId=1`)

            const result: ScheduledWorkoutPayload = {
                "workout": {
                    "_id": 1,
                    "date": "1",
                    "title": "Chest & Abs"
                },
                "exercises": [
                    {
                        "_id": 1,
                        "title": "Incline Barbell Bench Press",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/incline-bench-press.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 2,
                        "title": "Dumbbell Fly",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/dumbbell-flys.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 3,
                        "title": "Weighted Triceps Dip",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/weighted-tricep-dips.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 4,
                        "title": "Pec Dec",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/pec-dec.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 5,
                        "title": "Cable Crossover",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/cable-crossovers.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 6,
                        "title": "Pushups",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/push-up.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 7,
                        "title": "Hanging Leg Raise",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/hanging-leg-raise.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 8,
                        "title": "Decline Situp",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/decline-situp.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 9,
                        "title": "Dumbbell Side Bends",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/dumbbell-side-bends.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 10,
                        "title": "Plank",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/hover.html",
                        "scheduled_workout_id": 1
                    },
                    {
                        "_id": 11,
                        "title": "Cable Crunch",
                        "recommended_sets": 3,
                        "recommended_reps": "8-12",
                        "demo_link": "https://www.muscleandstrength.com/exercises/cable-crunch.html",
                        "scheduled_workout_id": 1
                    }
                ]
            }
            setExercises(result.exercises)
            setWorkout(result.workout)
            console.log(result.workout);
        })()
    }, [])


    return (
        <div className="flex flex-col">
            {workout && <TopBar workout={workout} /> }

            {exercises.length > 0 &&
            <ExerciseDisplay
                exercise={exercises[exerciseIndex]}
                index={exerciseIndex}
                total={exercises.length}
            />}

            <hr/>

            <Progress />

            <ExerciseNumberContext.Provider value={[exerciseIndex, setExerciseIndex, exercises.length]}>
                <BottomBar/>
            </ExerciseNumberContext.Provider>
        </div>
    )
}

export default Workouts
