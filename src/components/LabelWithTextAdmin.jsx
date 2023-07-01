export const LabelWithTextAdmin = ({ label, text }) => {
    return (
        <div className="flex flex-col">
            <label className="text-4xl font-bold text-white">{label}</label>
            <p className="text-2xl text-green-500">{text}</p>
        </div>
    )
}