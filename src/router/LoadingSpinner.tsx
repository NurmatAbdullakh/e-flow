import { Spin } from "antd";

export const LoadingSpinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: "300px", }}>
        <Spin size="large" tip="Loading..." />
    </div>
);

