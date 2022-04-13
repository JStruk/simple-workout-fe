import { memo } from 'react'
import { ExerciseFieldValues } from "./Progress";

interface ExerciseTableProps {
    exercises: Array<ExerciseFieldValues>
}

const ExerciseTable = ({ exercises }: ExerciseTableProps): JSX.Element => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                            <thead className="border-b">
                            <tr>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                    Set
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                    Reps
                                </th>
                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                    Weight
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {exercises.map((exercise, idx) => {
                                return (
                                    <tr className="border-b" key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {exercise.reps}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {exercise.weight}
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ExerciseTable)