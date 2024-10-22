import React from "react";
import { Table, Container, Paper, Title, Flex, Box } from "@mantine/core";

const balanceRequests = [
  {
    transaction_no: "TXN0012345",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 2000,
    remark: "NA",
    status: "Pending",
  },
  {
    transaction_no: "TXN0016789",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 1500,
    remark: "Transaction id not visible",
    status: "Rejected",
  },
  {
    transaction_no: "TXN0093139",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 3200,
    remark: "Approved",
    status: "Accepted",
  },
];

function UpdateBalanceRequestStatus() {
  // Render request status
  const renderHeader = () => (
    <Table.Tr>
      <Table.Th>
        <Flex align="center" justify="center" h="100%">
          Transaction Number
        </Flex>
      </Table.Th>
      <Table.Th>
        <Flex align="center" justify="center" h="100%">
          Image
        </Flex>
      </Table.Th>
      <Table.Th>
        <Flex align="center" justify="center" h="100%">
          Amount
        </Flex>
      </Table.Th>
      <Table.Th>
        <Flex align="center" justify="center" h="100%">
          Remark
        </Flex>
      </Table.Th>
      <Table.Th>
        <Flex align="center" justify="center" h="100%">
          Status
        </Flex>
      </Table.Th>
    </Table.Tr>
  );

  const renderRows = () =>
    balanceRequests.map((item, index) => (
      <Table.Tr key={index} style={{ height: "60px" }}>
        {" "}
        {/* Increase row height */}
        <Table.Td align="center" p={12}>
          {" "}
          {/* Increase cell padding */}
          {item.transaction_no}
        </Table.Td>
        <Table.Td align="center" p={12}>
          <a href={item.image_url} target="_blank" rel="noopener noreferrer">
            View Image
          </a>
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.amount}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.remark}
        </Table.Td>
        <Table.Td align="center" p={12}>
          <Box
            display="inline-block"
            p={8}
            fz={14}
            fw={600}
            bg={item.status === "Accepted" ? "#40C057" : "transparent"}
            bd={
              item.status === "Accepted"
                ? "1.5px solid #40C057"
                : item.status === "Pending"
                  ? "1.5px solid grey"
                  : "1.5px solid red"
            }
            c={
              item.status === "Accepted"
                ? "white"
                : item.status === "Pending"
                  ? "grey"
                  : "red"
            }
            style={{ borderRadius: "4px" }}
          >
            {item.status}
          </Box>
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <Container size="lg" style={{ marginTop: "25px" }}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Request Status
        </Title>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <Table.Thead>{renderHeader()}</Table.Thead>
          <Table.Tbody>{renderRows()}</Table.Tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default UpdateBalanceRequestStatus;
