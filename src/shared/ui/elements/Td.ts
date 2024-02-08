import { cva } from "@ui/design-system/css";
import { styled } from "@ui/design-system/jsx";

const tdStyles = cva({
  base: {
    border: "1px solid black"
  },
});

export const Td = styled("td", tdStyles);
