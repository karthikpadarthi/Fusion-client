import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Group } from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react"; // Default import for icons

const initialFeedbackData = [
  {
    fdate: "2024-10-10",
    student_id: "22bcs123",
    feedback_type: "Food",
    description: "Food quality is good",
    mess: "Mess1",
  },
  {
    fdate: "2024-10-13",
    student_id: "22bcs198",
    feedback_type: "Food",
    description: "Food portion size could be bigger",
    mess: "Mess2",
  },
  {
    fdate: "2024-10-12",
    student_id: "21bec083",
    feedback_type: "Cleanliness",
    description: "Cleanliness needs improvement",
    mess: "Mess2",
  },
  {
    fdate: "2024-10-14",
    student_id: "22bcs099",
    feedback_type: "Cleanliness",
    description: "Floors need better cleaning",
    mess: "Mess1",
  },
  {
    fdate: "2024-10-14",
    student_id: "22bcs111",
    feedback_type: "Maintenance",
    description: "Lights need repair",
    mess: "Mess1",
  },
  {
    fdate: "2024-10-15",
    student_id: "21bec076",
    feedback_type: "Maintenance",
    description: "Fan not working properly",
    mess: "Mess2",
  },
  {
    fdate: "2024-10-16",
    student_id: "22bcs105",
    feedback_type: "Others",
    description: "More variety in food, please!",
    mess: "Mess2",
  },
  {
    fdate: "2024-10-17",
    student_id: "21bec099",
    feedback_type: "Others",
    description: "Please improve seating arrangements",
    mess: "Mess1",
  },
];

// Main component
function ViewFeedback() {
  const [activeTab, setActiveTab] = useState("Food");
  const [feedbackData, setFeedbackData] = useState(initialFeedbackData);

  // Filter feedback based on active tab
  const filteredFeedback = feedbackData.filter(
    (feedback) => feedback.feedback_type === activeTab,
  );

  // Function to mark feedback as read
  const markAsRead = (index) => {
    setFeedbackData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Render feedback table rows with added padding for spacing
  const renderRows = () =>
    filteredFeedback.map((item, index) => (
      <tr key={index} style={{ height: "50px" }}>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.fdate}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.student_id}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.feedback_type}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.description}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.mess}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          <Button
            onClick={() => markAsRead(index)}
            variant="outline"
            color="red"
            size="xs"
          >
            Mark as Read
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
          View Feedback
        </Title>

        {/* Manually position the Group */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Group>
            <Button
              onClick={() => setActiveTab("Food")}
              leftIcon={<PhosphorIcons.FastFood size={20} />}
              variant={activeTab === "Food" ? "filled" : "outline"}
              size="xs"
            >
              Food
            </Button>
            <Button
              onClick={() => setActiveTab("Cleanliness")}
              leftIcon={<PhosphorIcons.Broom size={20} />}
              variant={activeTab === "Cleanliness" ? "filled" : "outline"}
              size="xs"
            >
              Cleanliness
            </Button>
            <Button
              onClick={() => setActiveTab("Maintenance")}
              leftIcon={<PhosphorIcons.Wrench size={20} />}
              variant={activeTab === "Maintenance" ? "filled" : "outline"}
              size="xs"
            >
              Maintenance
            </Button>
            <Button
              onClick={() => setActiveTab("Others")}
              leftIcon={<PhosphorIcons.ChatText size={20} />}
              variant={activeTab === "Others" ? "filled" : "outline"}
              size="xs"
            >
              Others
            </Button>
          </Group>
        </div>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Feedback Date
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Student ID
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Feedback Type
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Description
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>Mess</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewFeedback;
