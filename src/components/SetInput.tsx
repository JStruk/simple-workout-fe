import { UseFormRegister } from "react-hook-form/dist/types/form";


interface SetInputProps {
    register: UseFormRegister<any>
}

const SetInput = ({ register }: SetInputProps):JSX.Element => {
    return (
        <div className="p-2 flex max-w-screen">
            <label htmlFor="setsInput" className="mr-2">Sets: </label>
            <input id="setsInput" className="border border-slate-500 rounded-lg text-center mr-2 w-1/4" placeholder="3" {...register("sets")} />

            <label htmlFor="repsInput" className="mr-2">Reps: </label>
            <input id="repsInput" className="border border-slate-500 rounded-lg text-center mr-2 w-1/4" placeholder="12" {...register("reps")} />

            <label htmlFor="weightInput" className="mr-2">Weight: </label>
            <input id="weightInput" className="border border-slate-500 rounded-lg text-center w-1/4" placeholder="12" {...register("weight")} />
        </div>
    )
}

export default SetInput