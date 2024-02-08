import { cva } from "@ui/design-system/css";
import { styled } from "@ui/design-system/jsx";

const thStyles = cva({
  base: {
    border: "1px solid black"
  },
});

export const Th = styled("th", thStyles);
