import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  fallbackComponent: React.ReactNode;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render(): React.ReactNode {
    const { fallbackComponent } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return fallbackComponent;
    }

    // Use this.props.children if needed

    return this.props.children;
  }
}

export default ErrorBoundary;
