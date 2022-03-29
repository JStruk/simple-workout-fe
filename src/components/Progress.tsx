import SetInput from "./SetInput";
import { useForm } from "react-hook-form";

const Progress = (): JSX.Element => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div className="p-4">
            Today's exercise progress:

            <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
                <SetInput register={register} />
                {/*<SetInput register={register} />*/}
                {/*<SetInput register={register} />*/}

                <input type="submit" className="bg-blue-400 p-2 rounded-lg"/>
            </form>
        </div>
    )
}

export default Progress