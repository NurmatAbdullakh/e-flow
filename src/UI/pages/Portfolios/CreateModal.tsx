import { Input, Modal, Upload } from "antd";
import { Button } from "../../components/CustomAntdComponents/Button";
import { useState } from "react";
import CustomModal from "../../components/CustomAntdComponents/Modal";

interface CreateModalProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (isOpen: boolean) => void;
}

export const CreateModal = ({
  isCreateModalOpen,
  setIsCreateModalOpen,
}: CreateModalProps) => {
  const [portfolioName, setPortfolioName] = useState<string>();

  const handleCreatePortfolio = () => {
    // Handle portfolio creation
    setIsCreateModalOpen(false);
    setPortfolioName("");
  };
  return (
    <CustomModal
      title="Create Portfolio"
      open={isCreateModalOpen}
      onCancel={() => setIsCreateModalOpen(false)}
      footer={[
        <Button key="cancel" onClick={() => setIsCreateModalOpen(false)}>
          Cancel
        </Button>,
        <Button key="create" type="primary" onClick={handleCreatePortfolio}>
          Create
        </Button>,
      ]}
    >
      <p>Please enter a name for portfolio</p>
      <Input
        placeholder="Portfolio name"
        value={portfolioName}
        onChange={(e) => setPortfolioName(e.target.value)}
      />
      <Upload>
        <Button style={{ marginTop: 16 }}>Upload CSV file</Button>
      </Upload>
    </CustomModal>
  );
};
