import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Title,
  Paper,
  Group,
  FileInput,
} from "@mantine/core"; // Import Mantine components
// import { IconUpload } from "@phosphor-icons/react"; // Import Phosphor Upload icon

function BillBase() {
  const [amount, setAmount] = useState(""); // State for base amount
  const [file, setFile] = useState(null); // State for file upload

  // Function to handle the update of the base amount (for demo purposes)
  const updateBaseAmount = (event) => {
    event.preventDefault();
    alert(`Updated base amount to: Rs. ${amount}`); // Alert to simulate update
  };

  // Function to handle the file upload (for demo purposes)
  const uploadFile = (event) => {
    event.preventDefault();
    if (file) {
      alert(`File uploaded: ${file.name}`);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "800px",
        width: "570px",
        marginTop: "30px",
      }} // Container settings
    >
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Monthly Bill Base
        </Title>

        {/* Update Base Amount Form */}
        <form onSubmit={updateBaseAmount}>
          <Group direction="column" grow spacing="lg">
            <div className="two fields">
              <TextInput
                label="Current Base Amount"
                placeholder="Enter the new base amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number" // Numeric input
                required
                radius="md"
                mb="lg"
              />
              <div style={{ marginTop: "10px" }}>
                {" "}
                <Button
                  className="ui primary button right floated"
                  type="submit"
                >
                  Update Base Amount
                </Button>
              </div>
            </div>
          </Group>
        </form>

        <hr />

        {/* Upload Monthly Bill Form */}
        <form onSubmit={uploadFile}>
          <Group
            direction="column"
            grow
            spacing="lg"
            style={{ marginTop: "10px" }}
          >
            <FileInput
              label="Upload Monthly Bill"
              placeholder="Choose Excel file"
              value={file}
              onChange={setFile}
              accept=".xlsx,.xls"
              required
              styles={{ input: { width: "100%" } }}
            />
            <div style={{ marginTop: "10px" }}>
              {" "}
              <Button
                className="ui primary fluid button"
                type="submit"
                style={{ maxWidth: "10rem", marginTop: "10px" }}
              >
                Update Bills
              </Button>
            </div>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default BillBase;
