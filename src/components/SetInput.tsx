import { UseFormRegister } from "react-hook-form/dist/types/form";


interface SetInputProps {
    register: UseFormRegister<any>
    watch: any
    field: any
    errors: any
}

const SetInput = ({ register, field, errors, watch }: SetInputProps): JSX.Element => {
    const repsInputName = `${field.id}.reps`;
    const weightInputName = `${field.id}.weight`;

    watch(repsInputName)
    watch(weightInputName)

    return (
        <>
            <div className="p-2 flex max-w-screen">
                <label htmlFor="repsInput" className="mr-2">Reps: </label>
                <input id="repsInput" className="border border-slate-500 rounded-lg text-center mr-2 w-1/4"
                       placeholder="12" {...register(repsInputName, { required: true })} />
                <label htmlFor="weightInput" className="mr-2">Weight: </label>
                <input id="weightInput" className="border border-slate-500 rounded-lg text-center w-1/4"
                       placeholder="125" {...register(weightInputName, { required: true })} />

            </div>
            {
                errors[field.id] && <div className="w-full flex flex-col pt-2 text-red-500">
                    { errors[field.id]?.reps && 'Please enter a valid # of reps \n' }
                </div>
            }
            {
                errors[field.id] && <div className="w-full flex flex-col pb-2 text-red-500">
                    { errors[field.id]?.weight && 'Please enter a valid weight \n' }
                </div>
            }

        </>
    )
}

export default SetInput
