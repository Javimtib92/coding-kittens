"use client";

import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  type SandpackFiles,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import React from "react";

class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mb-8 flex items-center rounded border border-red-700 bg-red-200 p-1 px-4 py-3 text-sm text-red-900">
          <div className="callout w-full">{this.props.fallback}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function CodeSandbox({ files }: { files: SandpackFiles }) {
  return (
    <ErrorBoundary fallback={"There was an error loading the CodeSandbox."}>
      <SandpackProvider
        files={files}
        theme={"auto"}
        options={{
          bundlerURL: "https://sandpack-static-server.codesandbox.io",
          classes: {
            "sp-wrapper": "custom-wrapper",
            "sp-preview": "h-full dark:bg-background-400",
            "sp-preview-iframe": "dark:bg-background-400",
            "sp-preview-container": "dark:bg-background-400",
            "sp-preview-actions": "left-4 bottom-4",
          },
          initMode: "user-visible",
          initModeObserverOptions: { rootMargin: "1000px 0px" },
        }}
        template="static"
      >
        <div className="mt-4 h-80 min-h-80 bg-background-300">
          <SandpackPreview className="h-full" />
        </div>
        <SandpackLayout className="mb-8">
          <SandpackFileExplorer />
          <SandpackCodeEditor showTabs={false} />
        </SandpackLayout>
      </SandpackProvider>
    </ErrorBoundary>
  );
}
