import ForwardButton from "./ForwardButton";
import BackButton from "./BackButton";

const BottomBar = (): JSX.Element => {
    return (
        <div className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow flex justify-end space-x-4 pr-4 pb-2">
            <BackButton />
            <ForwardButton />
        </div>
    )
}

export default BottomBar