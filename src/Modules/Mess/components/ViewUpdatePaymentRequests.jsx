import React, { useState } from "react";
import { Table, Container, Paper, Title, Button } from "@mantine/core";

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
          {item.payment_date}
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
          Update Payment Requests
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
                Payment Date
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

export default ViewUpdatePaymentRequests;
