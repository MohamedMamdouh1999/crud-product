import type { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
    imageURL: string;
    alt: string;
    className: string;
}

const Image = ({imageURL, alt, className}: IProps) => {
    return <img loading="lazy" src={imageURL} alt={alt} className={className}/>
}

export default Image