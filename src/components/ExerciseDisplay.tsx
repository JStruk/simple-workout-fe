import { Exercise } from "../types/Exercise";
import Link from "./Link";

interface ExerciseDisplayProps {
    exercise: Exercise
    index: number
    total: number
}

const ExerciseDisplay = ({ exercise, index, total }: ExerciseDisplayProps): JSX.Element => {
    return (
        <div className="flex flex-col h-screen p-4">
            <span> Exercise: {index+1} of {total}</span>
            <Link location={exercise.demo_link} text={exercise.title} />
            <span> Sets: {exercise.recommended_sets} </span>
            <span> Reps: {exercise.recommended_reps} </span>
        </div>
    )
}

export default ExerciseDisplay