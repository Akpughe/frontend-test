"use client";

import React from "react";
import { MantineProvider, createTheme } from "@mantine/core";

function Providers({ children }: React.PropsWithChildren) {
  return <MantineProvider>{children}</MantineProvider>;
}

export default Providers;
