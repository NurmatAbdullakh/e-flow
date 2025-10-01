import Table from "../../components/CustomAntdComponents/Table";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import dayjs from "dayjs";
import { NameTableValue } from "../../components/TableValues/NameTableValue/NameTableValue";
import { StatusTagTableValue } from "../../components/TableValues/StatusTagTableValue/StatusTagTableValue";
import { TextTableValue } from "../../components/TableValues/TextTableValue/TextTableValue";
import { FinanceTableTitle } from "./FinanceTableTitle";
import { Flex } from "antd";
import { FinanceStatisticCard } from "./FinanceStatisticCard/FinanceStatisticCard";

function Finance() {
  const columns = [
    {
      title: "Name",
      key: "name",
      render: (record: { avatar: string; name: string; email: string }) => (
        <NameTableValue
          avatarSrc={record.avatar}
          name={record.name}
          email={record.email}
        />
      ),
    },
    {
      title: "Purchases",
      dataIndex: "purchases",
      key: "purchases",
      render: (amount: number) => (
        <TextTableValue text={`$${amount.toFixed(2)}`} />
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <StatusTagTableValue
          isActive={status === "paid"}
          activeText="paid"
          inactiveText="not paid"
        />
      ),
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
      key: "lastLogin",
      render: (date: string) => (
        <TextTableValue text={dayjs(date).format("MMM DD, YYYY")} />
      ),
    },
    {
      title: "Joined",
      dataIndex: "joined",
      key: "joined",
      render: (date: string) => (
        <TextTableValue text={dayjs(date).format("MMM DD, YYYY")} />
      ),
    },
  ];

  const mockData = [
    {
      key: "1",
      name: "John Doe",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      email: "john@example.com",
      optOut: false,
      purchases: 100.14,
      status: "no",
      lastLogin: "2025-01-16",
      joined: "2025-01-16",
    },
    {
      key: "1",
      name: "John Doe",
      avatar: "https://xsgames.co/randomusers/avatar.php?g=pixel",
      email: "john@example.com",
      optOut: true,
      purchases: 100.14,
      status: "paid",
      lastLogin: "2025-01-16",
      joined: "2025-01-16",
    },
  ];

  return (
    <>
      <PageTitle>Finance</PageTitle>
      <Flex
        wrap
        gap={"24px"}
        style={{ marginBottom: "32px" }}
        justify="space-between"
      >
        <FinanceStatisticCard
          title="Potential Sales"
          amount="$20,000"
          tag="up"
          tagText="100%"
        />
        <FinanceStatisticCard
          title="Potential Sales"
          amount="$20,000"
          tag="down"
          tagText="100%"
        />
        <FinanceStatisticCard
          title="Potential Sales"
          amount="$20,000"
          tag="up"
          tagText="100%"
        />
        <FinanceStatisticCard
          title="Potential Sales"
          amount="$20,000"
          tag="down"
          tagText="100%"
        />
      </Flex>
      <Table
        bordered
        scroll={{ x: 1600 }}
        columns={columns}
        dataSource={mockData}
        title={() => <FinanceTableTitle />}
      />
    </>
  );
}

export default Finance;
