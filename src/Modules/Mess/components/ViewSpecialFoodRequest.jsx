import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Group } from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react";

const initialFoodRequestData = [
  {
    date: "2024-10-05",
    student_id: "22bcs123",
    meal: "Vegetarian Meal",
    reason: "Medical requirement",
    from: "2024-10-06",
    to: "2024-10-10",
    approve: false,
  },
  {
    date: "2024-10-07",
    student_id: "21bec083",
    meal: "Vegan Meal",
    reason: "Dietary preference",
    from: "2024-10-08",
    to: "2024-10-12",
    approve: true,
  },
  {
    date: "2024-10-09",
    student_id: "22bcs198",
    meal: "Gluten-Free Meal",
    reason: "Health issue",
    from: "2024-10-10",
    to: "2024-10-14",
    approve: false,
  },
];

// Main component
function ViewSpecialFoodRequest() {
  const [foodRequestData, setFoodRequestData] = useState(
    initialFoodRequestData,
  ); // Use state for food requests
  const [filterStatus, setFilterStatus] = useState("all");

  // Function to toggle approval status
  const toggleApproval = (index) => {
    setFoodRequestData((prevData) => {
      const newData = prevData.map((request, i) => {
        if (i === index) {
          return { ...request, approve: !request.approve }; // Toggle the approval status
        }
        return request;
      });
      return newData; // Return the updated data
    });
  };

  // Filter requests based on the filterStatus value
  const filteredFoodRequestData = foodRequestData.filter((request) => {
    if (filterStatus === "approved") return request.approve === true;
    if (filterStatus === "unapproved") return request.approve === false;
    return true; // Default is "all", so show all requests
  });

  // Render food request rows with added padding for spacing
  const renderRows = () =>
    filteredFoodRequestData.map((item, index) => (
      <tr key={index} style={{ height: "50px" }}>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.date}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.student_id}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.meal}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.reason}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.from}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.to}</td>
        {filterStatus === "all" && ( // Only render the "Approve" column in "View All Requests"
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
      </tr>
    ));

  // Render an empty state if there are no filtered entries
  const renderEmptyState = () => (
    <tr>
      <td colSpan={7} style={{ textAlign: "center", padding: "20px" }}>
        No entries available.
      </td>
    </tr>
  );

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
          View Special Food Requests
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
              <th
                style={{ textAlign: "center", padding: "12px", width: "120px" }}
              >
                Date
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Student ID
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>Food</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Purpose</th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "120px" }}
              >
                From
              </th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "120px" }}
              >
                To
              </th>
              {filterStatus === "all" && (
                <th style={{ textAlign: "center", padding: "12px" }}>
                  Approve
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {filteredFoodRequestData.length > 0
              ? renderRows()
              : renderEmptyState()}
          </tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewSpecialFoodRequest;
