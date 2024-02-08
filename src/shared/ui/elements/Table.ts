import { cva } from "@ui/design-system/css";
import { styled } from "@ui/design-system/jsx";

const tableStyles = cva({
  base: {
    border: "1px solid black"
  },
});

export const Table = styled("table", tableStyles);
