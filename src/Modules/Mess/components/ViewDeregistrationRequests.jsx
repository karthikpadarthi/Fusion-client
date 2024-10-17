import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Flex } from "@mantine/core";

const initialDeregistrationRequests = [
  {
    student_id: "22bcs123",
    end_date: "2024-12-01",
    remark: "Graduating",
    accepted: false,
  },
  {
    student_id: "21bec083",
    end_date: "2024-11-15",
    remark: "Personal reasons",
    accepted: true,
  },
];

// Main component
function ViewDeregistrationRequests() {
  const [deregistrationData, setDeregistrationData] = useState(
    initialDeregistrationRequests,
  );

  // Function to toggle acceptance status
  const toggleAcceptance = (index) => {
    setDeregistrationData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, accepted: !request.accepted } : request,
      ),
    );
  };

  // Render deregistration request rows
  const renderRows = () =>
    deregistrationData.map((item, index) => (
      <Table.Tr key={index}>
        <Table.Td align="center" p={12}>
          {item.student_id}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.end_date}
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
    <Container size="lg" mt={30} miw="40rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Deregistration Requests
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
                  End Date
                </Flex>
              </Table.Th>
              <Table.Th>
                <Flex align="center" justify="center" h="100%">
                  Remark
                </Flex>
              </Table.Th>
              <Table.Th>
                <Flex align="center" justify="center" h="100%">
                  Action
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

export default ViewDeregistrationRequests;
