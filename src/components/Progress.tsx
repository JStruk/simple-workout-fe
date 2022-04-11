import SetInput from "./SetInput";
import { useFieldArray, useForm } from "react-hook-form";
import { useEffect } from "react";

const Progress = (): JSX.Element => {
    const fieldKey = 'progress'
    type FormValues = {
        [fieldKey]: { reps: string, weight: string }[];
    };

    const { register, handleSubmit, watch, formState: { errors }, control } = useForm<FormValues>(  );

    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: fieldKey, // unique name for your Field Array
    });

    useEffect(() => {
        append({ reps: '12', weight: '125' })
        append({ reps: '12', weight: '125' } )
        append({ reps: '12', weight: '125' } )
    }, [])

    const onSubmit = (data: any) => console.log({ data, fields });

    // eslint-disable-next-line no-console
    console.dir(fields, { depth: null });

    return (
        <div className="p-4">
            Today's exercise progress:

            <form className="pt-4" onSubmit={ handleSubmit(onSubmit) }>
                { fields.map((field, index) => (
                    <SetInput
                        //key={field.id} // important to include key with field's id
                        field={field}
                        register={register}
                        key={index}
                    />
                )) }
                <input type="submit" className="bg-blue-400 p-2 rounded-lg"/>
            </form>
        </div>
    )
}

export default Progress
