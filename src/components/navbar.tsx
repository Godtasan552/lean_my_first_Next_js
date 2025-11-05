"use client";
import { Box, HStack, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Box as="nav" bg="teal.500" px={6} py={4} color="white" shadow="md">
      <HStack maxW="6xl" mx="auto">
        <Link as={NextLink} href="/" fontWeight="bold" fontSize="xl">
          MyTemplate
        </Link>
        <Spacer />
        <HStack gap={6}>
          <Link as={NextLink} href="/">Home</Link>
          <Link as={NextLink} href="/about">About</Link>
          <Link as={NextLink} href="/contact">Contact</Link>
        </HStack>
      </HStack>
    </Box>
  );
}
