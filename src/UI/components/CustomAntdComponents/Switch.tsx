import React from 'react';
import { Switch as AntSwitch, type SwitchProps } from 'antd';
import { createUseStyles } from 'react-jss';
import { Color } from '../../../assets/colors';

const useStyles = createUseStyles({
    customSwitch: {
        '& .ant-switch': {
            '&-checked': {
                backgroundColor: '#1890ff',
            },
        },
        "&.ant-switch-checked .ant-switch-inner": {
            backgroundColor: Color.brand.solid,
        },
        '& .ant-switch-handle': {
            width: '18px',
            height: '18px',
            '&::before': {
                backgroundColor: '#fff',
            },
        },
    },
});

interface CustomSwitchProps extends SwitchProps {
    customColor?: string;
    customSize?: 'small' | 'default';
    customDisabledColor?: string;
}

const Switch: React.FC<CustomSwitchProps> = ({
    customColor,
    customSize = 'default',
    customDisabledColor,
    className,
    style,
    ...props
}) => {
    const classes = useStyles();

    const customStyles = {
        ...style,
        ...(customColor && {
            '&.ant-switch-checked': {
                backgroundColor: customColor,
            },
        }),
        ...(customDisabledColor && {
            '&.ant-switch-disabled': {
                backgroundColor: customDisabledColor,
            },
        }),
    };

    return (
        <AntSwitch
            className={`${classes.customSwitch} ${className || ''}`}
            size={customSize}
            style={customStyles}
            {...props}
        />
    );
};

export default Switch;
