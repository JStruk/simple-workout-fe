import axios from 'axios'
import {useEffect, useState} from "react";

export type Exercise = {
    ID: number
    title: string
    recommended_sets: number
    recommended_reps: string
    demo_link: string
    scheduled_workout_id: number
}

export type ScheduledWorkout = {
    '_id': number
    Title: string
    Date: string
}

function Workouts(): JSX.Element {
    const [exercises, setExercises] = useState<Exercise[]>([])

    useEffect(() => {
        (async () => {
            // const { data: workouts } = await axios.get(`${process.env.REACT_APP_SIMPLE_WORKOUT_API}/scheduled_workouts?workoutId=1`)
            const {data: result} = await axios.get('http://localhost:3005/scheduled_workouts?workoutId=1')
            console.log(result);
            setExercises(result.exercises)
        })()
    }, [])


    return (
        <>
            {exercises.map(exercise => {
                return (
                    <div>
                        {exercise.title}
                    </div>
                )
            })}
        </>
    )
}

export default Workouts