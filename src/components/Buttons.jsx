
const Buttons = ({label,iconURL,backgroundColor,textColor,borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border
    font-montserrat text-lg leading-none
    ${backgroundColor?`${backgroundColor} ${textColor} ${borderColor}`:`
    bg-coral-red  text-white border-coral-red  `}
    rounded-full w-full
    `
    
  }>
    {label}
    {
      iconURL&&(
<img src={iconURL} className="ml-2 rounded-full w-5 h-5" alt="arrowright icon"></img>

      )
    }
    </button>
  )
}

export default Buttons
