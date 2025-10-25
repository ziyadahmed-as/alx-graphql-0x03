import React, { ReactNode } from "react";
import * as Sentry from "@sentry/react";

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // React lifecycle method to update state after an error
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  // Log error to Sentry (or any monitoring service)
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error captured by ErrorBoundary:", error, errorInfo);
    Sentry.captureException(error, { extra: errorInfo });
  }

  // Render fallback UI
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Oops, something went wrong.
          </h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
