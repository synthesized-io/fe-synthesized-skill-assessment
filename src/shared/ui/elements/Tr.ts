import { cva } from "@ui/design-system/css";
import { styled } from "@ui/design-system/jsx";

const trStyles = cva({
  base: {
    border: "1px solid black"
  },
});

export const Tr = styled("tr", trStyles);
