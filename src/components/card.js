import React from "react";
import {
  Box,
  Badge,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";
import { MdLocationOn, MdRoom, MdPinDrop, MdStars } from "react-icons/md";

const Card = (character) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Box
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        borderStyle="solid"
      >
        <Image src={character.result.image} width="100%" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge
              rounded="full"
              px="2"
              variantColor={
                character.result.status === "Alive"
                  ? "teal"
                  : character.result.status === "Dead"
                  ? "red"
                  : "gray"
              }
            >
              {character.result.status}
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {character.result.name}
          </Box>

          <Box>{character.result.gender}</Box>
          <Box textAlign="right">
            <Button onClick={onOpen} variantColor="cyan" border="none">
              Show Details
            </Button>
          </Box>
        </Box>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bg="blue.900">
          <ModalHeader color="white" borderBottom="1px solid">{character.result.name}</ModalHeader>
          <ModalCloseButton border="none" bg="blue.900" color="white" />
          <ModalBody borderBottom="1px solid white">
            <List spacing={3} paddingLeft="0">
              <ListItem color="white">
                <ListIcon icon={MdLocationOn} color="blue.200" />
                Location Name: {character.result.location.name}
              </ListItem>
              <ListItem color="white">
                <ListIcon icon={MdRoom} color="blue.200" />
                Location Type: {character.result.location.type}
              </ListItem>
              <ListItem color="white">
                <ListIcon icon={MdPinDrop} color="blue.200" />
                Location Dimension: {character.result.location.dimension}
              </ListItem>
              <ListItem color="white">
                <ListIcon icon={MdStars} color="blue.200" />
                Species: {character.result.species}
              </ListItem>
            </List>
          </ModalBody>
          <ModalFooter>
            <Button bg="blue.200" border="none" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      ;
    </>
  );
};

export default Card;
