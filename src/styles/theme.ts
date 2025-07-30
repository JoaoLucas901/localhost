import { defineConfig } from "@chakra-ui/react";

export const themeConfig = defineConfig({
  globalCss: {
    "html, body": {
      backgroundColor: "blue",
    },
  },
  theme: {
    tokens: {
      colors: {},
    },
  },
});

