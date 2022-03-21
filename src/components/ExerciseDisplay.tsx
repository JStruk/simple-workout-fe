import { Exercise } from "../types/Exercise";

interface ExerciseDisplayProps {
    exercise: Exercise
}

const ExerciseDisplay = ({ exercise }: ExerciseDisplayProps): JSX.Element => {
    return (
        <div className="h-screen">
            {exercise.title}
        </div>
    )
}

export default ExerciseDisplay