import React, { useState } from "react";
import { Table, Container, Paper, Title, Button } from "@mantine/core";

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

  // Render registration request rows
  const renderRows = () =>
    registrationData.map((item, index) => (
      <tr key={index}>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.student_id}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.transaction_no}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          <a href={item.image_url} target="_blank" rel="noopener noreferrer">
            View Image
          </a>
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.amount}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.start_date}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.payment_date}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.remark}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.mess}</td>
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
          Registration Requests
        </Title>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Student ID
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Transaction No
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>Image</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Amount</th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "100px" }}
              >
                Start Date
              </th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "100px" }}
              >
                Payment Date
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>Remark</th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "100px" }}
              >
                Mess
              </th>
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

export default ViewRegistrationRequests;
