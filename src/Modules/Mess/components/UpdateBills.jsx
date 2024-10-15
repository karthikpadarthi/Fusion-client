import React from "react";
import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Container,
  Title,
  Paper,
  Space,
} from "@mantine/core"; // Import Mantine components
import { User, CurrencyDollar, Calendar } from "@phosphor-icons/react"; // Import Phosphor Icons

function UpdateBill() {
  return (
    <Container
      size="lg"
      style={{
        maxWidth: "800px", // Limit maximum width to 800px
        width: "570px", // Set the width to a fixed value (e.g., 800px)
        // marginRight: "800px", // Ensures the right margin is auto, allowing centering effect
        marginTop: "25px",
      }} // Container settings
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        withBorder
        style={{ width: "100%", padding: "30px" }} // Increased padding
      >
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Update Bill
        </Title>

        <form method="post" action="/mess/updateBill">
          {/* Roll Number input */}
          <TextInput
            label="Roll No."
            placeholder="Roll No of Student"
            id="rollNo"
            required
            radius="md"
            size="md"
            icon={<User size={20} />}
            mb="lg"
          />

          {/* New Amount input */}
          <NumberInput
            label="New Amount"
            placeholder="New amount for this month's bill"
            id="new_amount"
            required
            radius="md"
            size="md"
            min={0}
            step={100}
            icon={<CurrencyDollar size={20} />}
            mb="lg"
          />

          {/* Month select input */}
          <Select
            label="Month"
            id="Month"
            placeholder="Select month"
            required
            radius="md"
            size="md"
            icon={<Calendar size={20} />}
            data={[
              { value: "january", label: "January" },
              { value: "february", label: "February" },
              { value: "march", label: "March" },
              { value: "april", label: "April" },
              { value: "may", label: "May" },
              { value: "june", label: "June" },
              { value: "july", label: "July" },
              { value: "august", label: "August" },
              { value: "september", label: "September" },
              { value: "october", label: "October" },
              { value: "november", label: "November" },
              { value: "december", label: "December" },
            ]}
            mb="lg"
          />

          {/* Year select input */}
          <Select
            label="Year"
            id="Year"
            placeholder="Select year"
            required
            radius="md"
            size="md"
            data={[
              { value: "2023", label: "2023" },
              { value: "2024", label: "2024" },
            ]}
            mb="lg"
          />

          <Space h="xl" />

          {/* Submit button */}
          <Button fullWidth size="lg" radius="md" color="blue">
            Update Bill
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default UpdateBill;
