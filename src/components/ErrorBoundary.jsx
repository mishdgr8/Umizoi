import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: '#241a16',
                    color: '#edede4',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    padding: '2rem',
                    textAlign: 'center'
                }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong.</h1>
                    <p style={{ opacity: 0.7, marginBottom: '2rem' }}>We encountered an error while loading the cinematic experience.</p>
                    <button
                        onClick={() => window.location.reload()}
                        style={{
                            backgroundColor: 'transparent',
                            border: '1px solid #edede4',
                            color: '#edede4',
                            padding: '0.8rem 2rem',
                            cursor: 'pointer',
                            letterSpacing: '0.2rem'
                        }}
                    >
                        RETRY
                    </button>

                    {import.meta.env.DEV && (
                        <div style={{
                            marginTop: '4rem',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            padding: '1rem',
                            textAlign: 'left',
                            maxWidth: '100%',
                            overflow: 'auto',
                            fontSize: '0.8rem',
                            color: '#ff6b62'
                        }}>
                            <strong>Development Error Trace:</strong>
                            <pre style={{ marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>
                                {this.state.error && this.state.error.toString()}
                            </pre>
                        </div>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
