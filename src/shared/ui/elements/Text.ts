import { cva } from "@ui/design-system/css";
import { styled } from "@ui/design-system/jsx";

const textStyles = cva({
  base: {},
});

export const Text = styled("span", textStyles);
