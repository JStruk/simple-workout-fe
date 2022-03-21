import { useContext } from "react";
import { ExerciseNumberContext } from "./Workouts";


const ForwardButton = (): JSX.Element => {
    const [exerciseIndex, setExerciseIndex] = useContext(ExerciseNumberContext)

    const decrementExerciseIndex = () => {
        if(exerciseIndex <= 0) return

        setExerciseIndex(exerciseIndex - 1)
    }

    return (
        <button
            className="text-white bg-green-500 hover:bg-green-400 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-400"
            onClick={decrementExerciseIndex}
        >
            <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
                <path d="M3 12l18-12v24z"/>
            </svg>
        </button>
    )
}

export default ForwardButton