import { FC, PropsWithChildren as PWC } from "react";
import { Button, BaseModal } from "@ui/elements";
import {
  Container,
  ContainerProps,
  Divider,
  Stack,
} from "@ui/design-system/jsx";

type ModalDialogProps = {
  onClose?: () => void;
  isOpen: boolean;
};

export const ModalDialog: FC<ModalDialogProps & ContainerProps & PWC> = ({
  isOpen,
  children,
  onClose,
  ...containerProps
}) => {
  const onCloseHandler = () => {
    onClose?.();
  };

  if (!isOpen) return null;
  return (
    <BaseModal {...containerProps}>
      <Stack>
        <Stack direction="row" px={2} justifyContent="space-between">
          <h1>Modal</h1>
          <Button onClick={onCloseHandler} variant="close">x</Button>
        </Stack>
      </Stack>
      <Divider />
      <Container>{children}</Container>
    </BaseModal>
  );
};
