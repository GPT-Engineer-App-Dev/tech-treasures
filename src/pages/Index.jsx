import { Box, Container, Flex, Heading, HStack, Image, SimpleGrid, Text, VStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop for gaming and work.",
    image: "laptop.jpg",
    price: "$999",
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest model smartphone with advanced features.",
    image: "smartphone.jpg",
    price: "$799",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Lightweight tablet perfect for reading and browsing.",
    image: "tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading>Welcome to ElectroShop</Heading>
        <Text>Find the best electronics at unbeatable prices.</Text>
      <Input
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          size="lg"
          mt={4}
        />
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading size="md">{product.name}</Heading>
              <Text mt={2}>{product.description}</Text>
              <Text mt={2} fontWeight="bold">{product.price}</Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;