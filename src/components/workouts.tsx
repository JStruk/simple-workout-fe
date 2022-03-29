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
            const { data: result } = await axios.get<ScheduledWorkoutPayload>(`${process.env.REACT_APP_SIMPLE_WORKOUT_API}/scheduled_workouts?workoutId=1`)

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