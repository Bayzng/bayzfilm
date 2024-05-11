// src/components/tma/index.tsx

import { PropsWithChildren } from "react";
import { DisplayGate, SDKProvider } from "@tma.js/sdk-react";
import { TmaProviderError } from "./error";
import { TmaProviderLoading } from "./loading";
import { TmaProviderInitialState } from "./initialState";

export function TmaSDKProvider({ children } ) {

  return (
    <SDKProvider
      options={{ cssVars: true, acceptCustomStyles: true, async: true }}
    >
      <DisplayGate
        error={TmaProviderError}
        loading={TmaProviderLoading}
        initial={TmaProviderInitialState}
      >
        {children}
      </DisplayGate>
    </SDKProvider>
  );
}