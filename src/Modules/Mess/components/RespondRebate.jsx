import React, { useState } from "react";
import {
  Table,
  Container,
  Paper,
  Title,
  Button,
  Group,
  TextInput,
} from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react";

const initialRebateData = [
  {
    date: "2024-10-05",
    student_id: "22bcs123",
    purpose: "Medical leave",
    from: "2024-10-05",
    to: "2024-10-07",
    approve: false,
    remark: "Under review",
  },
  {
    date: "2024-10-07",
    student_id: "21bec083",
    purpose: "Family function",
    from: "2024-10-08",
    to: "2024-10-10",
    approve: true,
    remark: "Approved",
  },
  {
    date: "2024-10-09",
    student_id: "22bcs198",
    purpose: "Personal work",
    from: "2024-10-10",
    to: "2024-10-12",
    approve: false,
    remark: "Pending",
  },
];

// Main component
function RespondToRebateRequest() {
  const [rebateData, setRebateData] = useState(initialRebateData);
  const [filterStatus, setFilterStatus] = useState("all");

  // Function to toggle approval status
  const toggleApproval = (index) => {
    setRebateData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, approve: !request.approve } : request,
      ),
    );
  };

  // Function to remove rebate request
  const removeRebateRequest = (index) => {
    setRebateData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Function to update remark
  const updateRemark = (index, newRemark) => {
    setRebateData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, remark: newRemark } : request,
      ),
    );
  };

  // Filter requests based on the filterStatus value
  const filteredRebateData = rebateData.filter((request) => {
    if (filterStatus === "approved") return request.approve === true;
    if (filterStatus === "unapproved") return request.approve === false;
    return true;
  });

  // Render rebate request rows
  const renderRows = () =>
    filteredRebateData.map((item, index) => (
      <tr key={index} style={{ height: "50px" }}>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.date}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.student_id}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.purpose}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.from}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.to}</td>

        {filterStatus === "all" && (
          <td style={{ textAlign: "center", padding: "12px" }}>
            <Button
              onClick={() => toggleApproval(index)}
              variant={item.approve ? "filled" : "outline"}
              color={item.approve ? "green" : "red"}
              size="xs"
            >
              {item.approve ? "Approved" : "Not Approved"}
            </Button>
          </td>
        )}

        <td style={{ textAlign: "center", padding: "12px" }}>
          <TextInput
            value={item.remark}
            onChange={(event) => updateRemark(index, event.currentTarget.value)}
            size="xs"
            style={{ minWidth: "200px" }}
          />
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          <Button
            onClick={() => removeRebateRequest(index)}
            variant="outline"
            color="red"
            size="xs"
          >
            Remove
          </Button>
        </td>
      </tr>
    ));

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "1200px",
        width: "900px",
        marginTop: "25px",
        marginLeft: "-10px",
      }}
    >
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Respond to Rebate Request
        </Title>

        {/* Filter buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Group>
            <Button
              leftIcon={<PhosphorIcons.Eye size={20} />}
              variant={filterStatus === "all" ? "filled" : "outline"}
              size="xs"
              onClick={() => setFilterStatus("all")} // Show all requests
            >
              View All Requests
            </Button>
            <Button
              leftIcon={<PhosphorIcons.Check size={20} />}
              variant={filterStatus === "approved" ? "filled" : "outline"}
              size="xs"
              onClick={() => setFilterStatus("approved")} // Show only approved requests
            >
              Approved
            </Button>
            <Button
              leftIcon={<PhosphorIcons.XCircle size={20} />}
              variant={filterStatus === "unapproved" ? "filled" : "outline"}
              size="xs"
              onClick={() => setFilterStatus("unapproved")} // Show only unapproved requests
            >
              Unapproved
            </Button>
          </Group>
        </div>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: "center", padding: "12px" }}>Date</th>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Student ID
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>Purpose</th>
              <th style={{ textAlign: "center", padding: "12px" }}>From</th>
              <th style={{ textAlign: "center", padding: "12px" }}>To</th>
              {filterStatus === "all" && (
                <th style={{ textAlign: "center", padding: "12px" }}>
                  Approve
                </th>
              )}
              <th style={{ textAlign: "center", padding: "12px" }}>Remark</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>{renderRows()}</tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default RespondToRebateRequest;
