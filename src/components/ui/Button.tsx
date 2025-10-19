import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className: string;
    width?: 'w-full' | 'w-fit';
    children: ReactNode;
}

const Button = ({className, width = 'w-full', children}: IProps) => {
    return <button className={`${className} ${width} p-2 rounded-md text-white`}>{children}</button>
}

export default Button