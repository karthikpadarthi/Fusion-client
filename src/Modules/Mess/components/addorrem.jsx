import React, { useState } from "react";
import {
  Container,
  TextInput,
  Button,
  Group,
  Select,
  FileInput,
  Paper,
  Title,
  Space,
} from "@mantine/core";
import { UploadSimple, MagnifyingGlass, Plus, Trash } from "phosphor-react"; // Phosphor icons

function ManageMess() {
  const [mess, setMess] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [excelFile, setExcelFile] = useState(null);

  return (
    <Container size="md" style={{ marginTop: "30px" }}>
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Title order={3} align="center" mb="xl">
          Manage Mess Registrations
        </Title>

        <Space h="md" />
        <form>
          {/* Mess and Roll Number Fields */}
          <Group grow mb="md">
            <Select
              label="Mess*"
              placeholder="Select Mess"
              value={mess}
              onChange={setMess}
              data={["Mess 1", "Mess 2"]}
            />
            <TextInput
              label="Roll No*"
              placeholder="Student Roll Number Here"
              value={rollNo}
              onChange={(event) => setRollNo(event.currentTarget.value)}
            />
          </Group>

          {/* Buttons for Search, Add, Remove */}
          <Group spacing="sm" mb="md">
            <Button
              leftIcon={<MagnifyingGlass size={18} />}
              onClick={() => {
                console.log("Searching for Roll No:", rollNo);
              }}
            >
              Search
            </Button>
            <Button
              leftIcon={<Plus size={18} />}
              color="green"
              onClick={() => {
                console.log("Adding Roll No:", rollNo);
              }}
            >
              Add
            </Button>
            <Button
              leftIcon={<Trash size={18} />}
              color="red"
              onClick={() => {
                console.log("Removing Roll No:", rollNo);
              }}
            >
              Remove
            </Button>
          </Group>

          {/* Remove All Buttons */}
          <Group spacing="sm" mb="md">
            <Button
              variant="outline"
              color="red"
              onClick={() => {
                console.log("Remove all from Mess 1");
              }}
            >
              Remove All from Mess1
            </Button>
            <Button
              variant="outline"
              color="red"
              onClick={() => {
                console.log("Remove all from Mess 2");
              }}
            >
              Remove All from Mess2
            </Button>
          </Group>

          {/* File Upload for Excel */}
          <Group direction="column" spacing="sm" mb="md">
            <Title order={6}>Add by uploading Excel</Title>
            <FileInput
              placeholder="Choose File"
              value={excelFile}
              onChange={setExcelFile}
              accept=".xlsx,.xls"
            />
          </Group>

          {/* Register All Button */}
          <Button
            leftIcon={<UploadSimple size={18} />}
            fullWidth
            color="blue"
            onClick={() => {
              console.log("Register all from file:", excelFile);
            }}
          >
            Register All
          </Button>

          {/* Notes */}
          <Space h="lg" />
          <div style={{ fontSize: "12px", color: "gray" }}>
            <ul>
              <li>
                The excel sheet should only contain three columns including the
                heading - Roll no, Balance, mess_option.
              </li>
              <li>File should be in .xlsx or .xls format.</li>
              <li>
                This registration will add the Students to provided mess_option.
              </li>
            </ul>
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default ManageMess;
