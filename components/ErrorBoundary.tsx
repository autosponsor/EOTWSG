
import React, { Component, ErrorInfo } from 'react';

interface State {
  hasError: boolean;
}

interface Props {
  children: React.ReactNode;
}

class ErrorBoundary extends Component<Props> {
  public state = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-1 bg-orange-500 mb-6"></div>
          <h1 className="font-['Oswald'] text-4xl text-white uppercase tracking-tighter mb-4">Signal Lost</h1>
          <p className="text-gray-400 uppercase tracking-widest text-sm max-w-md">
            Critical system failure detected. The protocol has been interrupted. 
            Attempt a manual refresh to re-establish connection.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 border border-orange-500/30 text-orange-500 px-6 py-2 uppercase text-xs font-bold tracking-[0.2em] hover:bg-orange-500 hover:text-white transition-all"
          >
            Re-Initialize
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
