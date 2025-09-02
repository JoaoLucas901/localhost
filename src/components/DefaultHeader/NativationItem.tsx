import { CheckboxCard, CheckboxCardRootProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type NavigationItemProps = CheckboxCardRootProps & {
  icon: ReactNode;
  label: string;
}

export function NavigationItem({ icon, label, ...rest }: NavigationItemProps) {
  return (
                <CheckboxCard.Root
                w="full"
                variant="subtle"
                colorPalette="purple"
                align="center"
                rounded="lg"
                borderWidth={0}
                cursor="pointer"
                _hover={{
                  color: "purple.700",
                  backgroundColor: "purple.500",
                  _dark: {
                    color: "white",
                    backgroundColor: "purple.900",
                  }
                }}
                {...rest}
              >
                  <CheckboxCard.HiddenInput />
                  <CheckboxCard.Control>
                    {icon}

                   <CheckboxCard.Label>{label}</CheckboxCard.Label>

                </CheckboxCard.Control>
              </CheckboxCard.Root>
  );
}
