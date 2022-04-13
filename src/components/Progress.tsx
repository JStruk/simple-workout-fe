import SetInput from "./SetInput";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect } from "react";
import { Exercise } from "../types/Exercise";
import Button from "./Button";

interface ProgressProps {
    exercise: Exercise
}

const Progress = ({ exercise }: ProgressProps): JSX.Element => {
    const { register, handleSubmit, control, reset, formState: { errors } } = useForm();

    const { fields, append, remove } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: 'progress-fields', // unique name for your Field Array
    });

    const initForm = () => {
        for (let i = 0; i < exercise.recommended_sets; i++) {
            append({ reps: exercise.recommended_reps, weight: '125' })
        }
    }

    // eslint-disable-react-hooks/exhaustive-deps
    useEffect(() => {
        initForm()
    }, [])

    const onSubmit = (data: any) => {
        console.log({ data })

        reset()

        initForm()
    };

    const onAddFieldButtonClick = () => {
        append({ reps: exercise.recommended_reps, weight: '125' })
    }

    const onRemoveFieldButtonClick = () => {
        remove(fields.length - 1)
    }

    // eslint-disable-next-line no-console
    // console.dir(fields, { depth: null });

    return (
        <div className="p-4">
            Today's exercise progress:

            <form className="pt-4 flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, index) => (
                    <SetInput
                        field={field}
                        register={register}
                        key={index}
                        errors={errors}
                    />
                ))}
                <div className="p-4">
                    <Button text="-" onClick={onRemoveFieldButtonClick} extraStyles="bg-red-400 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-800" />
                    <Button text="+" onClick={onAddFieldButtonClick} />
                </div>
                <div className="w-full">
                    <input type="submit" className="bg-blue-400 p-2 rounded-lg w-full"/>
                </div>
            </form>
        </div>
    )
}

export default Progress
