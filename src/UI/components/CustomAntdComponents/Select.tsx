import { Select as AntdSelect, type SelectProps } from 'antd';
import { createUseStyles } from 'react-jss';
import React from 'react';
import { Color } from '../../../assets/colors';

const useStyles = createUseStyles({
    select: {
        width: '100%',
        height: 44,
        '& .ant-select-selector': {
            boxSizing: "border-box",
            borderRadius: 8,
            transition: 'all 0.3s ease',
            border: '1px solid #d9d9d9',
            "&:hover": {
                border: `1px solid ${Color.brand.solid} !important`,
            },
            "&:focus": {
                border: `1px solid ${Color.brand.solid} !important`,
                boxShadow: "none !important"
            }
        },
        "& .ant-select-selection-wrap": {
            padding: '7px 12px !important',
        },
        "&.ant-select-multiple .ant-select-selection-item": {
            background: "white !important",
            borderRadius: "6px",
            border: `1px solid ${Color.border.primary} !important`,
            fontSize: "14px",
            fontWeight: 500
        },

    },
});

type CustomSelectType = React.FC<SelectProps> & {
    Option: typeof AntdSelect.Option;
    OptGroup: typeof AntdSelect.OptGroup;
};

export const Select: CustomSelectType = (props) => {
    const classes = useStyles();
    return (
        <AntdSelect
            {...props}
            className={`${classes.select} ${props.className || ''}`}
        />
    );
};

Select.Option = AntdSelect.Option;
Select.OptGroup = AntdSelect.OptGroup;

export default Select;
