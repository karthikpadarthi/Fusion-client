import { Button, Container, Flex, Loader, Tabs, Text } from "@mantine/core";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import classes from "../styles/messModule.module.css";

import UpdateBill from "./UpdateBills.jsx";
import BillBase from "./BillBaseAndExcelUpload.jsx";
import ViewStudentBill from "./ViewStudentBill.jsx";

function MessActivities() {
  const [activeTab, setActiveTab] = useState(0); // Use integer instead of string for the active tab
  const tabsListRef = useRef(null);

  const tabItems = [
    { title: "Bill base and Excel upload" },
    { title: "Update Bill" },
    { title: "View Bill" },
  ];

  // Function to handle tab changes
  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(activeTab + 1, tabItems.length - 1)
        : Math.max(activeTab - 1, 0);
    setActiveTab(newIndex);
    tabsListRef.current.scrollBy({
      left: direction === "next" ? 50 : -50,
      behavior: "smooth",
    });
  };

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <BillBase />;
      case 1:
        return <UpdateBill />;
      case 2:
        return <ViewStudentBill />;
      default:
        return <Loader />;
    }
  };

  return (
    <>
      {/* Tab navigation */}
      <Flex justify="center" align="center" mt="5">
        <Flex justify="space-between" align="center" gap="1rem" mt="1.5rem">
          <Button
            onClick={() => handleTabChange("prev")}
            variant="default"
            p={0}
            bd={0}
            bg="transparent"
          >
            <CaretCircleLeft
              className={classes.fusionCaretIcon}
              weight="light"
            />{" "}
            {/* Updated icon */}
          </Button>

          <div className={classes.fusionTabsContainer} ref={tabsListRef}>
            <Tabs
              value={String(activeTab)}
              onChange={(value) => setActiveTab(Number(value))}
            >
              <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
                {tabItems.map((item, index) => (
                  <Tabs.Tab
                    value={`${index}`}
                    key={index}
                    className={
                      activeTab === index ? classes.fusionActiveRecentTab : ""
                    }
                  >
                    <Flex gap="4px">
                      <Text>{item.title}</Text>
                    </Flex>
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs>
          </div>

          <Button
            onClick={() => handleTabChange("next")}
            variant="default"
            p={0}
            bd={0}
            bg="transparent"
          >
            <CaretCircleRight
              className={classes.fusionCaretIcon}
              weight="light"
            />{" "}
            {/* Updated icon */}
          </Button>
        </Flex>
      </Flex>

      {/* Main content */}
      <Container fluid style={{ maxWidth: "600px", margin: "0 auto" }}>
        {renderTabContent()}
      </Container>
    </>
  );
}

export default MessActivities;
