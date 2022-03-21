import { ExerciseNumberContext } from "./Workouts";
import { useContext } from "react";

const ForwardButton = (): JSX.Element => {
    const [exerciseIndex, setExerciseIndex, numberOfExercises] = useContext(ExerciseNumberContext)

    const incrementExerciseIndex = () => {
        if(exerciseIndex >= numberOfExercises - 1) return

        setExerciseIndex(exerciseIndex + 1)
    }

    return (
        <button
            className="text-white bg-green-500 hover:bg-green-400 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-400"
            onClick={incrementExerciseIndex}
        >
            <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 12l-18 12v-24z"/>
            </svg>
        </button>
    )
}

export default ForwardButton