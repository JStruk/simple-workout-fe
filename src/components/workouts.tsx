import axios from 'axios'
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Exercise } from "../types/Exercise";
import ExerciseDisplay from "./ExerciseDisplay";
import BottomBar from "./BottomBar";

export const ExerciseNumberContext = createContext<[number, Dispatch<SetStateAction<number>>, number]>([0, () => null, 0])

function Workouts(): JSX.Element {
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [exerciseIndex, setExerciseIndex] = useState<number>(0)

    useEffect(() => {
        (async () => {
            // const { data: workouts } = await axios.get(`${process.env.REACT_APP_SIMPLE_WORKOUT_API}/scheduled_workouts?workoutId=1`)
            const { data: result } = await axios.get(`${process.env.REACT_APP_SIMPLE_WORKOUT_API}/scheduled_workouts?workoutId=1`)
            // const { data: result } = await axios.get('http://localhost:3005/scheduled_workouts?workoutId=1')
            console.log(result);
            setExercises(result.exercises)
        })()
    }, [])


    return (
        <div className="flex flex-col">
            {exercises.length > 0 && <ExerciseDisplay exercise={exercises[exerciseIndex]}/>}

            <ExerciseNumberContext.Provider value={[exerciseIndex, setExerciseIndex, exercises.length]}>
                <BottomBar/>
            </ExerciseNumberContext.Provider>
        </div>
    )
}

export default Workouts