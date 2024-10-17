import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Flex } from "@mantine/core";
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

const tableHeader = [
  "Feedback Date",
  "Student ID",
  "Feedback Type",
  "Description",
  "Mess",
  "Actions",
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
      <Table.Tr key={index} h={50}>
        <Table.Td align="center" p={12}>
          {item.fdate}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.student_id}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.feedback_type}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.description}
        </Table.Td>
        <Table.Td align="center" p={12}>
          {item.mess}
        </Table.Td>
        <Table.Td align="center" p={12}>
          <Button
            onClick={() => markAsRead(index)}
            variant="outline"
            color="red"
            size="xs"
          >
            Mark as Read
          </Button>
        </Table.Td>
      </Table.Tr>
    ));

  const renderHeader = (titles) => {
    return titles.map((title, index) => (
      <Table.Th key={index}>
        <Flex align="center" justify="center" h="100%">
          {title}
        </Flex>
      </Table.Th>
    ));
  };

  return (
    <Container size="lg" mt={30} miw="80rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" c="#1c7ed6">
          View Feedback
        </Title>

        {/* Manually position the Group */}
        <Flex justifyContent="center" mb={30} gap={20}>
          <Button
            onClick={() => setActiveTab("Food")}
            leftSection={<PhosphorIcons.ForkKnife size={20} />}
            variant={activeTab === "Food" ? "filled" : "outline"}
            size="xs"
          >
            Food
          </Button>
          <Button
            onClick={() => setActiveTab("Cleanliness")}
            leftSection={<PhosphorIcons.Broom size={20} />}
            variant={activeTab === "Cleanliness" ? "filled" : "outline"}
            size="xs"
          >
            Cleanliness
          </Button>
          <Button
            onClick={() => setActiveTab("Maintenance")}
            leftSection={<PhosphorIcons.Wrench size={20} />}
            variant={activeTab === "Maintenance" ? "filled" : "outline"}
            size="xs"
          >
            Maintenance
          </Button>
          <Button
            onClick={() => setActiveTab("Others")}
            leftSection={<PhosphorIcons.ChatText size={20} />}
            variant={activeTab === "Others" ? "filled" : "outline"}
            size="xs"
          >
            Others
          </Button>
        </Flex>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>{renderHeader(tableHeader)}</Table.Tr>
          </Table.Thead>
          <Table.Tbody>{renderRows()}</Table.Tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewFeedback;
