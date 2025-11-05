"use client";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as="footer" bg="teal.600" color="white" py={4} mt={12}>
      <Text textAlign="center">© 2025 MyTemplate — การสร้างเว็บเท็มเพลดครั้งแรกเพื่อการเรียนรู้</Text>
    </Box>
  );
}
