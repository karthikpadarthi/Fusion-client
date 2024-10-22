import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Group } from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react";

// Full Mess1 menu
const mess1Rows = [
  {
    day: "Monday",
    breakfast: "Poha Jalebi Sev, Chopped Onion, Lemon, Sprouts.",
    lunch: "Lauki Chana sabji, Plain Roti, Plain Rice, Curd, Arhar dal.",
    dinner: "Veg Kofta, Plain Roti, Dal Makhani, Plain Rice, Boondi.",
  },
  {
    day: "Tuesday",
    breakfast: "Medu Vada, Coconut Chutney, Sambhar, Chana & Sprouts.",
    lunch: "Rajma, Plain Rice, Plain Paratha, Papad, Aalu-Mutter sabji, Curd.",
    dinner: "Mix Veg, Masoor Dal, Jeera Rice, Chapati, Sooji Halwa/Custard.",
  },
  {
    day: "Wednesday",
    breakfast: "Idli, Coconut Chutney, Sambhar, Sprouts, Boiled Egg.",
    lunch: "Chole, Plain Rice, Roti, Palak Paneer, Curd, Papad.",
    dinner: "Aloo Gobi, Dal Tadka, Jeera Rice, Roti, Custard.",
  },
  {
    day: "Thursday",
    breakfast: "Aloo Paratha, Curd, Pickle, Sprouts.",
    lunch: "Mix Veg, Rice, Chapati, Yellow Dal, Papad, Curd.",
    dinner: "Kadhi Pakoda, Plain Rice, Chapati, Boondi Raita, Gulab Jamun.",
  },
  {
    day: "Friday",
    breakfast: "Uttapam, Coconut Chutney, Sambhar, Sprouts.",
    lunch: "Paneer Butter Masala, Rice, Chapati, Curd, Papad.",
    dinner: "Aloo Bengan, Dal Fry, Jeera Rice, Chapati, Kheer.",
  },
  {
    day: "Saturday",
    breakfast: "Pav Bhaji, Chopped Onion, Lemon, Sprouts.",
    lunch: "Chana Dal, Plain Rice, Roti, Aloo Tamatar, Curd.",
    dinner: "Kofta Curry, Dal Makhani, Jeera Rice, Chapati, Rasgulla.",
  },
  {
    day: "Sunday",
    breakfast: "Chole Bhature, Pickle, Sprouts.",
    lunch: "Aloo Capsicum, Dal Fry, Plain Rice, Chapati, Papad, Curd.",
    dinner: "Paneer Tikka Masala, Jeera Rice, Chapati, Ice Cream.",
  },
];

// Placeholder for Mess2, add your own items here
const mess2Rows = [
  {
    day: "Monday",
    breakfast: "Upma, Coconut Chutney, Boiled Egg, Sprouts.",
    lunch: "Bhindi Fry, Roti, Plain Rice, Dal Fry, Curd.",
    dinner: "Shahi Paneer, Plain Roti, Plain Rice, Moong Dal, Kheer.",
  },
  {
    day: "Tuesday",
    breakfast: "Dosa, Coconut Chutney, Sambhar, Sprouts.",
    lunch: "Rajma, Plain Rice, Roti, Papad, Aloo Methi, Curd.",
    dinner: "Paneer Butter Masala, Jeera Rice, Chapati, Gulab Jamun.",
  },
  // Add more days for Mess2 in a similar format
];

// Main component
function ViewMenu() {
  const [currentMess, setCurrentMess] = useState("mess1"); // State to toggle between Mess1 and Mess2

  const rows = currentMess === "mess1" ? mess1Rows : mess2Rows; // Toggle data based on currentMess state

  // Render rows dynamically
  const renderRows = () =>
    rows.map((item, index) => (
      <tr key={index} style={{ height: "50px" }}>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.day}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>
          {item.breakfast}
        </td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.lunch}</td>
        <td style={{ textAlign: "center", padding: "12px" }}>{item.dinner}</td>
      </tr>
    ));

  return (
    <Container size="lg" mt={30}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Mess Menu
        </Title>

        {/* Buttons to switch between Mess1 and Mess2 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Group>
            <Button
              leftIcon={<PhosphorIcons.ForkKnife size={20} />}
              variant={currentMess === "mess1" ? "filled" : "outline"}
              size="xs"
              onClick={() => setCurrentMess("mess1")}
            >
              Mess 1
            </Button>
            <Button
              leftIcon={<PhosphorIcons.ForkKnife size={20} />}
              variant={currentMess === "mess2" ? "filled" : "outline"}
              size="xs"
              onClick={() => setCurrentMess("mess2")}
            >
              Mess 2
            </Button>
          </Group>
        </div>

        {/* Table for displaying the menu */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th
                style={{ textAlign: "center", padding: "12px", width: "150px" }}
              >
                Day
              </th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "250px" }}
              >
                Breakfast
              </th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "250px" }}
              >
                Lunch
              </th>
              <th
                style={{ textAlign: "center", padding: "12px", width: "250px" }}
              >
                Dinner
              </th>
            </tr>
          </thead>

          <tbody>{renderRows()}</tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewMenu;
