export const InputAdmin = ({ type="text", placeholder, style, onChange }) => {
    return <input type={type} placeholder={placeholder} className={`bg-transparent text-xl text-green-500 border-none outline-none placeholder:text-green-900 ${style}`} onChange={onChange}/>
}