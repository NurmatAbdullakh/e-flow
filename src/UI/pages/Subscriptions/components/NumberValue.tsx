import { Dropdown, Flex, InputNumber } from "antd";
import classNames from "classnames";
import React, { useCallback, useState } from "react";
import styles from "./NumberValue.module.css";
import { Button } from "../../../components/CustomAntdComponents/Button";

// Constants
const INITIAL_VALUE = 0;

// Types
interface NumberValueProps {
  value: number | null;
  isEditable: boolean;
}

interface OptionProps {
  checked: boolean;
  icon?: React.ReactNode;
  label?: string;
}

// Components
const UnlimitedValue = () => (
  <div className={styles.unlimitedValue}>
    <span>Unlimited</span>
  </div>
);

const Option = ({ checked, icon, label }: OptionProps) => (
  <div className={classNames(styles.option, { [styles.checked]: checked })}>
    {icon}
    <div>{label}</div>
  </div>
);

const NumberInput = ({
  value,
  onChange,
  onEnter,
}: {
  value: number;
  onChange: (val: number | null) => void;
  onEnter: () => void;
}) => (
  <InputNumber
    style={{ width: "100%" }}
    size="middle"
    value={value}
    onChange={onChange}
    onClick={(e) => e.stopPropagation()}
    onFocus={(e) => e.stopPropagation()}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        e.stopPropagation();
        onEnter();
      }
    }}
  />
);

const SetButton = ({ onClick }: { onClick: () => void }) => (
  <Button
    type="primary"
    size="small"
    onClick={(e) => {
      e.stopPropagation();
      onClick();
    }}
  >
    Set number
  </Button>
);

export const NumberValue = ({ value, isEditable }: NumberValueProps) => {
  // State
  const [isUnlimited, setIsUnlimited] = useState<boolean>(value === null);
  const [numberValue, setNumberValue] = useState<number>(
    value || INITIAL_VALUE
  );
  const [inputValue, setInputValue] = useState<number>(value || INITIAL_VALUE);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handlers
  const handleNumberChange = useCallback((val: number | null) => {
    setInputValue(val || INITIAL_VALUE);
    setIsUnlimited(false);
  }, []);

  const handleUnlimitedClick = useCallback(() => {
    setIsUnlimited(true);
    setIsOpen(false);
  }, []);

  const setNumberAndClose = useCallback(() => {
    setNumberValue(inputValue);
    setIsUnlimited(false);
    setIsOpen(false);
  }, [inputValue]);

  const handleDropdownToggle = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);

  // Computed values
  const displayValue = useCallback(() => {
    if (isUnlimited) return <UnlimitedValue />;
    if (numberValue === 0) return <span className={styles.dashDisplay}>-</span>;
    return <span className={styles.numberDisplay}>{numberValue}</span>;
  }, [isUnlimited, numberValue]);

  const wrapperClassName = classNames(styles.wrapper, {
    [styles.editable]: isEditable,
  });

  // Menu items
  const menuItems = [
    {
      key: "number",
      label: (
        <div onClick={(e) => e.stopPropagation()}>
          <Option
            checked={!isUnlimited}
            icon={
              <Flex align="center" gap="8px">
                <NumberInput
                  value={inputValue}
                  onChange={handleNumberChange}
                  onEnter={setNumberAndClose}
                />
                <SetButton onClick={setNumberAndClose} />
              </Flex>
            }
          />
        </div>
      ),
    },
    {
      key: "unlimited",
      label: <Option label="Unlimited" checked={isUnlimited} />,
      onClick: handleUnlimitedClick,
    },
  ];

  // Render
  if (!isEditable) {
    return <div className={styles.wrapper}>{displayValue()}</div>;
  }

  return (
    <Dropdown
      menu={{ items: menuItems }}
      placement="bottom"
      trigger={["click"]}
      onOpenChange={handleDropdownToggle}
      open={isOpen}
    >
      <div className={wrapperClassName}>{displayValue()}</div>
    </Dropdown>
  );
};

export default NumberValue;
