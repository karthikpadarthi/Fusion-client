import React, { useState } from "react";
import { Paper, Button, Textarea, Title, Group, Box } from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react";

// Styles
const feedbackContainerStyle = {
  padding: "60px",
  backgroundColor: "#e6f7ff",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  //   margin: "20px auto",
  width: "90%",
  marginTop: "55px",
};

const headingStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#0056b3",
  marginBottom: "30px",
};

const subHeadingStyle = {
  fontSize: "24px",
  fontWeight: "500",
  color: "#333",
  marginBottom: "20px",
};

const categoryButtonContainer = {
  marginBottom: "30px",
};

const formContainerStyle = {
  width: "100%", // Adjusted to make the form stretch fully horizontally
  padding: "30px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
};

const textareaStyle = {
  padding: "30px",
  marginBottom: "20px",
};

const submitButtonStyle = {
  backgroundColor: "#28a745",
  fontWeight: "bold",
};

function FeedbackPage() {
  const [selectedCategory, setSelectedCategory] = useState("Food"); // Default category

  return (
    <Box style={feedbackContainerStyle}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={headingStyle}>
          Mess Feedback
        </Title>

        {/* Feedback category buttons */}
        <Group position="center" style={categoryButtonContainer}>
          <Button
            leftIcon={<PhosphorIcons.ForkKnife size={20} />}
            variant={selectedCategory === "Food" ? "filled" : "outline"}
            onClick={() => setSelectedCategory("Food")}
            size="md"
          >
            Food
          </Button>
          <Button
            leftIcon={<PhosphorIcons.Broom size={20} />}
            variant={selectedCategory === "Cleanliness" ? "filled" : "outline"}
            onClick={() => setSelectedCategory("Cleanliness")}
            size="md"
          >
            Cleanliness
          </Button>
          <Button
            leftIcon={<PhosphorIcons.Wrench size={20} />}
            variant={selectedCategory === "Maintenance" ? "filled" : "outline"}
            onClick={() => setSelectedCategory("Maintenance")}
            size="md"
          >
            Maintenance
          </Button>
          <Button
            leftIcon={<PhosphorIcons.Note size={20} />}
            variant={selectedCategory === "Others" ? "filled" : "outline"}
            onClick={() => setSelectedCategory("Others")}
            size="md"
          >
            Others
          </Button>
        </Group>

        {/* Feedback form */}
        <Box style={formContainerStyle}>
          <Title order={3} style={subHeadingStyle}>
            {selectedCategory} Feedback
          </Title>
          <Textarea
            placeholder={`Enter your feedback about ${selectedCategory}`}
            style={textareaStyle}
            minRows={5}
          />
          <Button
            leftIcon={<PhosphorIcons.PaperPlaneTilt size={20} />}
            fullWidth
            style={submitButtonStyle}
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default FeedbackPage;
