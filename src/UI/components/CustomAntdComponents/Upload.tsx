import { Upload as AntUpload } from 'antd';
import { createUseStyles } from 'react-jss';
import type { UploadProps } from 'antd';

const useStyles = createUseStyles({
    customUpload: {
        display: "block !important",
        width: '100%',
        borderRadius: '12px',
        border: '1px solid #E9EAEB',
        padding: '16px 24px',
        '& .ant-upload': {
            width: '100%'
        }
    }
});

interface CustomUploadProps extends UploadProps { }

export const Upload: React.FC<CustomUploadProps> = (props) => {
    const classes = useStyles();

    return (
        <AntUpload
            {...props}
            className={classes.customUpload}
        />
    );
};

export default Upload;
