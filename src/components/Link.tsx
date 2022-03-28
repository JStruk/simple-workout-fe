
interface LinkProps {
    text: string
    location: string
    aria?: string
}

const Link = ({ text, location, aria }: LinkProps): JSX.Element => {
    return (
        <a href={location} target="_blank" aria-label={aria} className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out mb-4" rel="noreferrer">
            {text}
        </a>
    )
}

export default Link