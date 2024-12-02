import { FC } from 'react'

type TypographyProps = {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const typography: FC<TypographyProps> = ({ variant }) => {
  return (
    <div>typography</div>
  )
}

export default typography