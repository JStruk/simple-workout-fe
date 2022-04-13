import SetInput from './SetInput'
import { FieldValues, useFieldArray, useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { Exercise } from '../types/Exercise'
import Button from './Button'
import Modal from 'react-modal'
import ExerciseTable from "./ExerciseTable";
import { ExerciseNumberContext } from "./Workouts";

interface ProgressProps {
    exercise: Exercise
}

export interface ExerciseFieldValues extends FieldValues  {
    id?: string
    reps: string
    weight: string
}

const Progress = ({ exercise }: ProgressProps): JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [stagedExercises, setStagedExercises] = useState<Array<ExerciseFieldValues>>([])

    const { register, handleSubmit, control, reset, formState: { errors }, watch } = useForm<ExerciseFieldValues>();

    const [exerciseIndex, setExerciseIndex, numberOfExercises] = useContext(ExerciseNumberContext)

    const incrementExerciseIndex = () => {
        if(exerciseIndex >= numberOfExercises - 1) return

        setExerciseIndex(exerciseIndex + 1)
    }


    const { fields, append, remove } = useFieldArray<ExerciseFieldValues>({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: 'progress-fields', // unique name for your Field Array
    });

    const initForm = () => {
        for (let i = 0; i < 0; i++) {
            append({ reps: exercise.recommended_reps, weight: '125' })
        }
    }

    useEffect(() => {
        initForm()
    }, [])

    const onSubmit = async (data: any) => {
        // TODO: This feels really hacky, need to understand how useFieldArray typing works, as well as binding to the 'fields' array
        const exercises = Object.values(data)
        exercises.shift()
        await setStagedExercises(exercises as unknown as ExerciseFieldValues[])
    };

    useEffect(() => {
        console.log('might open', { stagedExercises });
        if(stagedExercises.length > 0) {
            setIsModalOpen(true)
        }
    }, [stagedExercises])

    const onAddFieldButtonClick = () => {
        append({ reps: exercise.recommended_reps, weight: '125' })
    }

    const onRemoveFieldButtonClick = () => {
        remove(fields.length - 1)
    }

    const onRecordExerciseClicked = () => {
        //TODO: POST the list of stagedExercises to the completed_exercise endpoint
        console.log('Okay, let\'s save some exercises (not actually doing it rn tho')

        reset()
        initForm()
        incrementExerciseIndex()
        setIsModalOpen(false)
    }

    return (
        <div className='p-4'>
            Today's exercise progress:

            <form className='pt-4 flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => (
                    <SetInput
                        field={field}
                        register={register}
                        watch={watch}
                        key={index}
                        errors={errors}
                    />
                ))}
                <div className='p-4'>
                    <Button text='-' onClick={onRemoveFieldButtonClick} extraStyles='bg-red-400 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-800' />
                    <Button text='+' onClick={onAddFieldButtonClick} />
                </div>
                <div className='w-full'>
                    <input type='submit' className='bg-blue-400 p-2 rounded-lg w-full'/>
                </div>
            </form>

            <Modal isOpen={isModalOpen}>
                <Button text='X' onClick={() => setIsModalOpen(false)} />
                {/*TODO: fix this any idk why the type doesn't work*/}
                <ExerciseTable exercises={stagedExercises} />

                <Button text='Record Exercise' onClick={onRecordExerciseClicked} />
            </Modal>
        </div>
    )
}

export default Progress
