import React from "react";
import {
  Box,
  TextInput,
  Select,
  Textarea,
  Button,
  Title,
  Stack,
  Group,
  Text,
} from "@mantine/core";

export default function Deregistration() {
  return (
    <Box maw={600} mx="auto" p="md" bg="gray.0">
      <Title order={2} mb="md">
        Deregistration Form
      </Title>
      <form>
        <Stack spacing="md">
          <Group align="flex-start">
            <Box w={100}>
              <Text component="label" htmlFor="name" weight={500}>
                Name
              </Text>
            </Box>
            <TextInput
              id="name"
              placeholder="Enter your name"
              w="100%"
              aria-labelledby="name"
            />
          </Group>

          <Group align="flex-start">
            <Box w={100}>
              <Text component="label" htmlFor="rollNo" weight={500}>
                Roll No
              </Text>
            </Box>
            <TextInput
              id="rollNo"
              placeholder="Enter your roll number"
              w="100%"
              aria-labelledby="rollNo"
            />
          </Group>

          <Group align="flex-start">
            <Box w={100}>
              <Text component="label" htmlFor="batch" weight={500}>
                Batch
              </Text>
            </Box>
            <Select
              id="batch"
              placeholder="Select batch"
              data={["2020", "2021", "2022", "2023"]}
              defaultValue="2022"
              w="100%"
              aria-labelledby="batch"
            />
          </Group>

          <Group align="flex-start">
            <Box w={100}>
              <Text component="label" htmlFor="semester" weight={500}>
                Semester
              </Text>
            </Box>
            <Select
              id="semester"
              placeholder="Select semester"
              data={["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"]}
              w="100%"
              aria-labelledby="semester"
            />
          </Group>

          <Group align="flex-start">
            <Box w={100}>
              <Text component="label" htmlFor="reason" weight={500}>
                Reason
              </Text>
            </Box>
            <Textarea
              id="reason"
              placeholder="Enter your reason for deregistration"
              minRows={4}
              w="100%"
              aria-labelledby="reason"
            />
          </Group>

          <Group justify="center" mt="xl">
            <Button type="submit" color="blue">
              Submit
            </Button>
          </Group>
        </Stack>
      </form>
    </Box>
  );
}
