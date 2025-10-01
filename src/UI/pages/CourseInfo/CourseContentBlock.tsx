import styles from "./CourseContentBlock.module.css"
import { Collapse, Checkbox } from 'antd';
import type { CollapseProps } from 'antd';

export const CourseContentBlock = () => {
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'The Basics',
            children: (
                <div>
                    <div>
                        <Checkbox disabled checked /> Why Be Involved In The Market
                    </div>
                    <div>
                        <Checkbox disabled /> Why Be Involved In The Market
                    </div>
                    <div>
                        <Checkbox disabled /> Why Be Involved In The Market
                    </div>
                    <div>
                        <Checkbox disabled /> Why Be Involved In The Market
                    </div>
                </div>
            ),
        },
        {
            key: '2',
            label: 'The Market',
            children: (
                <div>
                    <Checkbox disabled >Why Be Involved In The Market</Checkbox>
                    <Checkbox disabled >What Is A Stock?</Checkbox>
                    <Checkbox disabled >What Is A Market?</Checkbox>
                    <Checkbox disabled >What Is A Stock Exchange?</Checkbox>
                </div>
            ),
        },
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Course content</div>
            <Collapse style={{ background: "white" }} items={items} defaultActiveKey={['1']} />
        </div>
    )
}