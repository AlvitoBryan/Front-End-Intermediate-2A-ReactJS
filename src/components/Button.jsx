import React from 'react'

export const Button = ({
    type = "submit",
    text = "Masuk",
    bgClass = "bg-[var(--Primary-100,_rgba(226,252,217,0.8))]",
    textColor = "text-[var(--Primary-Default,#3ECF4C)]",
    widthButton = "w-full",
    textSize = "text-[0.875rem] sm:text-base",
    hoverBtn = "hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]",
    onclick,
}) => {
  
  return (
    <button type={type} className={`flex ${widthButton} h-[42px] flex-col justify-center items-center rounded-[10px] ${bgClass} border-none outline-none ${textColor} self-stretch font-[DM_Sans] ${textSize} font-bold leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear ${hoverBtn}` } onClick={onclick}>
        {text}
    </button>
  )
}

export const GoogleLogin = ({
    text = "Masuk dengan Google",
    img = "/images/logos_google-icon.svg",
    hoverBtn = "hover:border-[1px] hover:border-[var(--Primary-Default,#3ECF4C)] hover:shadow-[0_0_0_4px_rgba(62,207,76,0.3)]"
}) => {
    return (
        <button className={`flex w-full h-[42px] flex-row justify-center items-center rounded-[10px] gap-[8px] border border-[var(--Other-Border,#F1F1F1)] bg-[var(--text-light-primary,#FFF)] Copytransition-[border-color,box-shadow] duration-300 ease-in-out ${hoverBtn} text-[var(--text-dark-secondary,#4A505C)] font-[DM_Sans] text-[0.875rem] sm:text-base font-bold leading-[140%] tracking-[0.0px]`}>
            <img src={img} />
            {text}
        </button>
    )
}

export const ButtonHero = ({
    text = "Temukan Video Course untuk Dipelajari!",
    bgClass = "bg-[var(--Primary-Default,#3ECF4C)]",
    textColor = "text-[#FFF]",
    widthButton = "w-fit",
    textSize = "text-[0.875rem] sm:text-base",
    hoverBtn = "hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]",
    onclick,
}) => {
  return (
    <button className={`flex ${widthButton} flex-col justify-center items-center rounded-[10px] p-[10px_26px] ${bgClass} border-none outline-none ${textColor} font-[DM_Sans] ${textSize} font-medium leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear ${hoverBtn} cursor-pointer`} style={{paddingTop: 'min(10px, 7.78%)', paddingBottom: 'min(10px, 7.78%)', paddingLeft: 'min(26px, 2.68%)', paddingRight: 'min(26px, 2.68%)',}} onClick={onclick}>
        {text}
    </button>
  )
}

export const ButtonTab = ({
  text = "Semua Kelas",
  bgClass = "bg-[#FFFDF3]",
  textColor = "text-[var(--text-dark-secondary,rgba(51,_51,_51,_0.68))]",
  widthButton = "w-fit",
  textSize = "text-[0.875rem] sm:text-base",
  // hoverBtn = "hover:bg-[var(--Primary-Default,#3ECF4C)] hover:text-[var(--text-light-primary,#FFF)]",
  onclick,
}) => {
return (
  <button className={`flex ${widthButton} items-center p-[12px_36px_12px_0px] gap-[6px] ${bgClass} border-none outline-none ${textColor} font-[DM_Sans] ${textSize} font-medium leading-[140%] tracking-[0.2px] transition-colors duration-300 ease-linear cursor-pointer whitespace-nowrap tabs-btn`} onClick={onclick}>
      {text}
  </button>
)
}


export default Button
