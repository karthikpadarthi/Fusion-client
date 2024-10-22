import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Flex } from "@mantine/core";

const initialUpdatePaymentRequests = [
  {
    student_id: "22bcs123",
    transaction_no: "TXN123456",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 15000,
    payment_date: "2024-10-10",
    remark: "Updated amount after correction",
    accepted: false,
  },
  {
    student_id: "21bec083",
    transaction_no: "TXN654321",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 5000,
    payment_date: "2024-10-12",
    remark: "Payment corrected",
    accepted: true,
  },
];

// Main component
function ViewUpdatePaymentRequests() {
  const [updatePaymentData, setUpdatePaymentData] = useState(
    initialUpdatePaymentRequests,
  );

  // Function to toggle acceptance status
  const toggleAcceptance = (index) => {
    setUpdatePaymentData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, accepted: !request.accepted } : request,
      ),
    );
  };

  // Render update payment request rows
  const renderRows = () =>
    updatePaymentData.map((item, index) => (
      <Table.Tr key={index}>
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
          {item.payment_date}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.remark}
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
    <Container size="lg" mt={30} miw="60rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Update Payment Requests
        </Title>

        {/* Table */}
        <Table striped highlightOnHover withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Flex align="center" justify="center" h="100%">
                  Student ID
                </Flex>
              </Table.Th>
              <Table.Th>
                <Flex align="center" justify="center" h="100%">
                  Transaction No
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
                  Payment Date
                </Flex>
              </Table.Th>
              <Table.Th>
                <Flex align="center" justify="center" h="100%">
                  Remark
                </Flex>
              </Table.Th>
              <Table.Th>
                <Flex align="center" justify="center" h="100%">
                  Accept/Reject
                </Flex>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>{renderRows()}</Table.Tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewUpdatePaymentRequests;
