import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Title,
  Paper,
  Table,
  Space,
  Group,
  Select,
} from "@mantine/core"; // Mantine UI components
import { MagnifyingGlass, FunnelSimple } from "@phosphor-icons/react"; // Phosphor Icons

// Dummy Data for mess registrations
const studentsData = [
  {
    id: 1,
    first_name: "Karthik",
    last_name: "Padarthi",
    student_id: "22BCS177",
    programme: "B.Tech",
    status: "Registered",
    mess_option: "Mess 1",
  },
  {
    id: 2,
    first_name: "Utkarsh",
    last_name: "Purohit",
    student_id: "22BCS260",
    programme: "M.Tech",
    status: "Deregistered",
    mess_option: "Mess 2",
  },
  {
    id: 3,
    first_name: "Swaran",
    last_name: "Tej",
    student_id: "22BCS263",
    programme: "B.Tech",
    status: "Registered",
    mess_option: "Mess 1",
  },
  // Add more student objects as needed
];

function ViewRegistrations() {
  const [filteredStudents, setFilteredStudents] = useState(studentsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [programFilter, setProgramFilter] = useState("All");
  const [messFilter, setMessFilter] = useState("All");

  // Function to handle filtering
  const handleFilter = () => {
    let filtered = studentsData;

    // If a search query exists, filter by that only
    if (searchQuery) {
      filtered = filtered.filter((student) =>
        student.student_id.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      // If no search query, apply the dropdown filters
      if (statusFilter !== "All") {
        filtered = filtered.filter(
          (student) => student.status === statusFilter,
        );
      }

      if (programFilter !== "All") {
        filtered = filtered.filter(
          (student) => student.programme === programFilter,
        );
      }

      if (messFilter !== "All") {
        filtered = filtered.filter(
          (student) => student.mess_option === messFilter,
        );
      }
    }

    setFilteredStudents(filtered);
  };

  const centeredCellStyle = {
    textAlign: "center",
  };

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "800px", // Limit maximum width
        width: "650px", // Set fixed width
        marginTop: "25px", // Top margin
      }}
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        withBorder
        style={{ padding: "30px" }}
      >
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          View Mess Registrations
        </Title>

        <form>
          {/* Search section with icon */}
          <TextInput
            label="Search by Roll Number"
            placeholder="Enter Roll Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            radius="md"
            size="md"
            mb="lg"
            icon={<MagnifyingGlass size={18} />} // Added Phosphor icon
          />

          {/* Filter section */}
          <Group grow mb="lg">
            <Select
              label="Filter by Status"
              placeholder="Select Status"
              value={statusFilter}
              onChange={(value) => setStatusFilter(value)}
              data={["Registered", "Deregistered", "All"]}
              radius="md"
              size="md"
              icon={<FunnelSimple size={18} />} // Added Phosphor icon
            />
            <Select
              label="Filter by Program"
              placeholder="Select Program"
              value={programFilter}
              onChange={(value) => setProgramFilter(value)}
              data={["B.Tech", "M.Tech", "All"]}
              radius="md"
              size="md"
              icon={<FunnelSimple size={18} />} // Added Phosphor icon
            />
            <Select
              label="Filter by Mess"
              placeholder="Select Mess"
              value={messFilter}
              onChange={(value) => setMessFilter(value)}
              data={["Mess 1", "Mess 2", "All"]}
              radius="md"
              size="md"
              icon={<FunnelSimple size={18} />} // Added Phosphor icon
            />
          </Group>

          <Button
            fullWidth
            size="md"
            radius="md"
            color="blue"
            onClick={handleFilter}
            leftIcon={<FunnelSimple size={18} />} // Added Phosphor icon to button
          >
            Apply Filters
          </Button>

          <Space h="lg" />

          {/* Students Table */}
          <Table
            striped
            highlightOnHover
            withBorder
            style={{
              border: "1px solid #e0e0e0", // Border for the table
              borderRadius: "8px", // Rounded corners
            }}
          >
            <thead style={{ backgroundColor: "#f7f7f7" }}>
              <tr>
                <th style={centeredCellStyle}>Name</th>
                <th style={centeredCellStyle}>Roll No</th>
                <th style={centeredCellStyle}>Program</th>
                <th style={centeredCellStyle}>Status</th>
                <th style={centeredCellStyle}>Mess</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td style={centeredCellStyle}>
                      {student.first_name} {student.last_name}
                    </td>
                    <td style={centeredCellStyle}>{student.student_id}</td>
                    <td style={centeredCellStyle}>{student.programme}</td>
                    <td style={centeredCellStyle}>{student.status}</td>
                    <td style={centeredCellStyle}>{student.mess_option}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    No registrations found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </form>
      </Paper>
    </Container>
  );
}

export default ViewRegistrations;
