import { FC, HTMLAttributes } from 'react'

type TypographyProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    text: string;
    className?: string;
} & HTMLAttributes<HTMLElement>

const typography: FC<TypographyProps> = ({ variant, text, className, ...props }) => {
  return (
    <div>typography</div>
  )
}

export default typography