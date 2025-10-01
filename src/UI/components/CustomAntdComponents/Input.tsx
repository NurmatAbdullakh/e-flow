import React from 'react';
import { Input as AntInput, type InputProps } from 'antd';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { Color } from '../../../assets/colors';
import type { TextAreaProps } from 'antd/es/input';

const useStyles = createUseStyles({
    customInput: {
        borderRadius: "8px",
        padding: '8px 12px !important',
        height: "44px",
        fontSize: 14,
        transition: 'all 0.3s ease',
        border: `1px solid ${Color.border.primary}`,
        '&:hover': {
            borderColor: Color.brand.solid,
        },
        '&:focus,&:focus-within': {
            borderColor: Color.brand.solid,
            boxShadow: `0 0 0 0.5px ${Color.brand.solid}`,
        }
    },
    customPassword: {
        '& .ant-input-password-icon': {
            color: Color.text.secondary,
            '&:hover': {
                color: Color.brand.solid,
            }
        },
        '&.ant-input': {
            borderRadius: "8px",
            padding: '8px 12px',
            fontSize: 14,
        }
    },
    customTextArea: {
        borderRadius: "8px",
        padding: '8px 12px',
        fontSize: 14,
        minHeight: 120,
    },
    customSearch: {
        '& .ant-input-search-button': {
            borderRadius: '0 8px 8px 0',
            background: Color.brand.solid,
            borderColor: Color.brand.solid,
            '&:hover': {
                background: Color.brand.solid,
                opacity: 0.8,
            }
        }
    }
});

const CustomInput: React.FC<InputProps> = ({ className, ...props }) => {
    const classes = useStyles();
    return (
        <AntInput className={classNames(className, classes.customInput)} {...props} />
    );
};

const CustomPassword: React.FC<InputProps> = ({ className, ...props }) => {
    const classes = useStyles();
    return (
        <AntInput.Password
            className={classNames(className, classes.customInput, classes.customPassword)}
            {...props}
        />
    );
};

const CustomTextArea: React.FC<InputProps> = ({ className, ...props }) => {
    const classes = useStyles();
    return (
        <AntInput.TextArea
            className={classNames(className, classes.customInput, classes.customTextArea)}
            {...(props as TextAreaProps)}
        />
    );
};

const CustomSearch: React.FC<InputProps> = ({ className, ...props }) => {
    const classes = useStyles();
    return (
        <AntInput.Search
            className={classNames(className, classes.customInput, classes.customSearch)}
            {...props}
        />
    );
};

(CustomInput as any).Password = CustomPassword;
(CustomInput as any).TextArea = CustomTextArea;
(CustomInput as any).Search = CustomSearch;

export const Input = CustomInput as typeof AntInput;
