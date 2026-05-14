import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical Render Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-center p-6 font-inter">
          <div className="text-8xl mb-8">🛠️</div>
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Something went wrong.</h1>
          <p className="text-[#94A3B8] mb-12 max-w-md">The application encountered a rendering error. Please try refreshing or contact support.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-primary/40"
          >
            Refresh Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
