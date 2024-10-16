import React, { useState } from "react";
import { Table, Container, Paper, Title, Button } from "@mantine/core";

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
      <tr key={index}>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.student_id}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.end_date}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.remark}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          <Button
            onClick={() => toggleAcceptance(index)}
            variant={item.accepted ? "filled" : "outline"}
            color={item.accepted ? "green" : "red"}
            size="xs"
          >
            {item.accepted ? "Accepted" : "Rejected"}
          </Button>
        </td>
      </tr>
    ));

  return (
    <Container size="lg" style={{ marginTop: "25px" }}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Deregistration Requests
        </Title>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Student ID
              </th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "100px" }}
              >
                End Date
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>Remark</th>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Accept/Reject
              </th>
            </tr>
          </thead>

          <tbody>{renderRows()}</tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewDeregistrationRequests;
