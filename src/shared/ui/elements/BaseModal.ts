import { cva } from "@ui/design-system/css";
import { styled } from "@ui/design-system/jsx";

const baseModal = cva({
  base: {
    border: "1px solid black",
    background: "white",
    zIndex: 1000,
    width: "50%",
    height: "50%",
    position: "absolute",
    left: "25%",
    top: "25%",
  },
});

export const BaseModal = styled("div", baseModal);
