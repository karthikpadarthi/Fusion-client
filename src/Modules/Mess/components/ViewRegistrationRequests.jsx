import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Flex } from "@mantine/core";

// Initial registration request data
const initialRegistrationRequests = [
  {
    student_id: "22bcs145",
    transaction_no: "TXN0012345",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 15000,
    start_date: "2024-10-01",
    payment_date: "2024-10-03",
    remark: "Paid in full",
    mess: "Mess 1",
    accepted: false,
  },
  {
    student_id: "21bec013",
    transaction_no: "TXN0016789",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 3500,
    start_date: "2024-10-05",
    payment_date: "2024-10-07",
    remark: "Pending approval",
    mess: "Mess 2",
    accepted: true,
  },
];

const tableHeaders = [
  "Student ID",
  "Transaction No",
  "Image",
  "Amount",
  "Start Date",
  "Payment Date",
  "Remark",
  "Mess",
  "Accept/Reject",
];

// Main component
function ViewRegistrationRequests() {
  const [registrationData, setRegistrationData] = useState(
    initialRegistrationRequests,
  );

  // Function to toggle acceptance status
  const toggleAcceptance = (index) => {
    setRegistrationData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, accepted: !request.accepted } : request,
      ),
    );
  };

  const renderHeader = (titles) => {
    return titles.map((title, index) => (
      <Table.Th key={index}>
        <Flex align="center" justify="center" h="100%">
          {title}
        </Flex>
      </Table.Th>
    ));
  };

  // Render registration request rows
  const renderRows = () =>
    registrationData.map((item, index) => (
      <Table.Tr key={index} h={50}>
        <Table.Td align="center" p={12}>
          {item.student_id}
        </Table.Td>
        <Table.Td align="center" p={12}>
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
          {item.start_date}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.payment_date}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.remark}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.mess}
        </Table.Td>
        <Table.Td align="center" p={12}>
          <Button
            onClick={() => toggleAcceptance(index)}
            variant={item.accepted ? "filled" : "outline"}
            color={item.accepted ? "green" : "red"}
            size="xs"
          >
            {item.accepted ? "Accepted" : "Rejected"}
          </Button>
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <Container size="lg" mt={30} miw="70rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" c="#1c7ed6">
          Registration Requests
        </Title>

        {/* Table */}
        <Table striped highlightOnHover withColumnBorders>
          <Table.Thead>
            <Table.Tr>{renderHeader(tableHeaders)}</Table.Tr>
          </Table.Thead>
          <Table.Tbody>{renderRows()}</Table.Tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewRegistrationRequests;
