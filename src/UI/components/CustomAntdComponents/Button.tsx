// CustomAntdComponents/Button.tsx

import React from 'react';
import { Button as AntButton, type ButtonProps } from 'antd';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { Color } from '../../../assets/colors';

const useStyles = createUseStyles({
    customButton: {
        borderRadius: '8px',
        fontWeight: 500,
        transition: 'all 0.3s ease',
        gap: '8px',
        '&.ant-btn-primary': {
            backgroundColor: Color.brand.solid,
            '&:hover': {
                backgroundColor: `${Color.brand.secondary} !important`,
            },
            '&:active': {
                backgroundColor: '#42307D',
            },
            '&:disabled': {
                backgroundColor: '#F5F5F5',
            },
        },
        '&.ant-btn-default': {
            borderColor: '#D0D5DD',
            '&:hover': {
                borderColor: `${Color.brand.solid} !important`,
                color: `${Color.brand.solid} !important`,
            },
        },
        '&.ant-btn-link': {
            color: '#53389E',
            '&:hover': {
                color: '#6941C6',
            },
        },
        '&.ant-btn-lg': {
            height: '40px',
            fontSize: '16px',
            padding: '10px 18px',
        },
        '&.ant-btn-sm': {
            height: '32px',
            fontSize: '14px',
            padding: '6px 12px',
        },
    },
});

// Custom Button component
const CustomButton: React.FC<ButtonProps> = ({ className, ...props }) => {
    const classes = useStyles();
    return (
        <AntButton className={classNames(className, classes.customButton)} {...props} />
    );
};

export { CustomButton as Button };
export default CustomButton;