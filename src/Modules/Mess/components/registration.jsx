import React from "react";
import {
  Box,
  TextInput,
  FileInput,
  Button,
  Title,
  Stack,
  Text,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

export default function Registration() {
  return (
    <Box bg="gray.1" p="xl" maw={600} mx="auto">
      <Title order={2} mb="lg">
        Registration Form
      </Title>
      <Stack spacing="md">
        <Text component="label" htmlFor="transactionId" weight={500}>
          Transaction Id
        </Text>
        <TextInput
          id="transactionId"
          placeholder="Enter transaction id"
          aria-labelledby="transactionId"
        />

        <Text component="label" htmlFor="amount" weight={500}>
          Amount
        </Text>
        <TextInput
          id="amount"
          placeholder="Enter amount"
          type="number"
          aria-labelledby="amount"
        />

        <Text component="label" htmlFor="paymentFile" weight={500}>
          Payment
        </Text>
        <FileInput
          id="paymentFile"
          placeholder="Choose file"
          aria-labelledby="paymentFile"
        />

        <Text component="label" htmlFor="startDate" weight={500}>
          Start Date
        </Text>
        <DatePickerInput
          id="startDate"
          placeholder="Pick start date"
          valueFormat="DD-MM-YYYY"
          aria-labelledby="startDate"
        />

        <Text component="label" htmlFor="paymentDate" weight={500}>
          Payment Date
        </Text>
        <DatePickerInput
          id="paymentDate"
          placeholder="Pick payment date"
          valueFormat="DD-MM-YYYY"
          aria-labelledby="paymentDate"
        />

        <Button color="blue" fullWidth>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
