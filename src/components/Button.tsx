import React from 'react'

type BtnType = 'ADD' | 'DONE' | 'REMOVE'

type Props = {
  cls?: string,
  children: React.ReactNode,
  btnType?: BtnType,
  disabled?: boolean,
  type?: 'button' | 'submit' | 'reset'
  onClick?: any
}

const Button: React.FC<Props> = ({ cls, children, btnType, type, disabled, onClick }: Props) => {

  const renderBtnType = (buttonType?: BtnType) => {
    switch (buttonType) {
      case 'DONE': return `text-green-500 border-green-500 hover:text-white  hover:bg-green-500`
      case 'ADD': return `text-teal-500 border-teal-500 hover:text-white hover:bg-teal-500`
      case 'REMOVE': return `text-red-500 border-red-500 hover:text-white  hover:bg-red-500`
      default: return `text-gray-500 border-gray-500 hover:text-white  hover:bg-gray-500`
    }
  }

  const classByType = renderBtnType(btnType)
  return <button
        className={`whitespace-nowrap p-2 border-2 rounded disabled:bg-gray-300 disabled:text-white disabled:border-gray-300 ${cls} ${classByType}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >{children}</button>
}

export default Button