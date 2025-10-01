import type { FC } from "react"
import { createUseStyles } from "react-jss"
import { Color } from "../../../../assets/colors"

interface props {
    text: string
    color?: string
}

const useStyles = createUseStyles<string, { textColor?: string }>(
    {
        text: ({ textColor }) => ({
            color: textColor
        })
    }
)

export const TextTableValue: FC<props> = ({ text, color = Color.text.tertiary[600] }) => {
    const classes = useStyles({ textColor: color })

    return <div className={classes.text} >{text}</div>
}