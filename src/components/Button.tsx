
interface ButtonProps {
    text: string
}

const Button = ({ text }: ButtonProps): JSX.Element => {
    return (
        <button type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-800"
        >
            { text }
        </button>

    )
}

export default Button