import { ScheduledWorkout } from "../types/ScheduledWorkout";

interface TopBarProps {
    workout: ScheduledWorkout
}

const TopBar = ({ workout }: TopBarProps): JSX.Element => {
    return (
        <div className="flex p-4 bg-green-400 justify-between">
            <span> Workout: { workout.title } </span>
            <span> { new Date().toDateString() } </span>
        </div>
    )
}

export default TopBar