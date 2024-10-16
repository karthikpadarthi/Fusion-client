import React, { useState } from "react";
import { DateInput } from "@mantine/dates";
import { Button, Container, Paper, Title, Space } from "@mantine/core";
import "@mantine/dates/styles.css"; // Import Mantine DateInput styles
import "dayjs/locale/en"; // Day.js for locale support

function DateSelectionForm() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "800px",
        width: "470px",
        marginTop: "100px",
      }}
    >
      <Paper
        shadow="xl"
        radius="md"
        p="xl"
        withBorder
        style={{
          padding: "30px",
          borderColor: "#1c7ed6",
        }}
      >
        {/* Title of the Form */}
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Update Semester Dates
        </Title>

        <form onSubmit={handleSubmit}>
          {/* Start Date Input */}
          <DateInput
            label="Start Date"
            placeholder="MM/DD/YYYY"
            value={startDate}
            onChange={setStartDate}
            required
            radius="md"
            size="md"
            mb="lg"
            styles={(theme) => ({
              input: {
                backgroundColor: "#f0f3f7",
                border: `1px solid ${theme.colors.blue[6]}`,
              },
              dropdown: {
                backgroundColor: theme.colors.gray[0],
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              },
              day: {
                "&[data-selected]": {
                  backgroundColor: theme.colors.blue[6],
                },
                "&[data-today]": {
                  backgroundColor: theme.colors.gray[2],
                  fontWeight: "bold",
                },
              },
            })}
          />

          {/* End Date Input */}
          <DateInput
            label="End Date"
            placeholder="MM/DD/YYYY"
            value={endDate}
            onChange={setEndDate}
            required
            radius="md"
            size="md"
            mb="lg"
            styles={(theme) => ({
              input: {
                backgroundColor: "#f0f3f7",
                border: `1px solid ${theme.colors.blue[6]}`,
              },
              dropdown: {
                backgroundColor: theme.colors.gray[0],
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              },
              day: {
                "&[data-selected]": {
                  backgroundColor: theme.colors.blue[6],
                  //   color: theme.white,
                },
                "&[data-today]": {
                  backgroundColor: theme.colors.gray[2],
                  fontWeight: "bold",
                },
              },
            })}
          />

          <Space h="md" />

          {/* Submit Button */}
          <Button type="submit" radius="md" size="md" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default DateSelectionForm;
