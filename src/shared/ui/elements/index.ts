export { Button } from "./Button";
export { Text } from "./Text";
export { BaseModal } from "./BaseModal";
import { Th } from "./Th";
import { Td } from "./Td";
import { Tr } from "./Tr";
import { Table as Body } from "./Table";
export const Table = {
  Header: Th,
  Cell: Td,
  Row: Tr,
  Body,
};
