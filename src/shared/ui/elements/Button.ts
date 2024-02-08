import { cva } from "@ui/design-system/css";
import { styled } from "@ui/design-system/jsx";

const buttonStyles = cva({
  base: {
    cursor: "pointer",
    border: "1px solid black",
  },
  variants: {
    variant: {
      primary: {
        color: "white",
        background: "blue",
      },
      close: {
        color: "red",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  }
});

export const Button = styled("button", buttonStyles);
