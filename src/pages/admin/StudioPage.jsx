import { Studio } from 'sanity'
import config from '../../../sanity.config'

const StudioPage = () => {
  // Check if we are still using the placeholder Project ID
  const isPlaceholder = config.projectId === 'your-project-id' || !config.projectId;

  if (isPlaceholder) {
    return (
      <div style={{ 
        height: '100vh', 
        width: '100vw', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#050816',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        textAlign: 'center',
        padding: '20px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '0', 
          left: '0', 
          width: '100%', 
          height: '100%', 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)',
          zIndex: -1
        }} />
        
        <div style={{ marginBottom: '40px' }}>
            <span style={{ fontSize: '4rem' }}>🛠️</span>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '20px', tracking: '-0.05em' }}>
          Connect Your <span style={{ color: '#3b82f6' }}>Sanity CMS</span>
        </h1>
        
        <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: '500px', lineHeight: '1.6', marginBottom: '40px' }}>
          The Admin Panel is ready, but it needs a valid Sanity Project ID to connect to your content.
        </p>
        
        <div style={{ 
          padding: '40px', 
          backgroundColor: 'rgba(255,255,255,0.03)', 
          borderRadius: '32px',
          border: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'left',
          width: '100%',
          maxWidth: '450px',
          backdropBlur: '20px'
        }}>
          <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>Quick Setup:</h3>
          <ol style={{ color: '#94A3B8', lineHeight: '2.2', paddingLeft: '20px' }}>
            <li>Log in at <a href="https://www.sanity.io/manage" target="_blank" rel="noreferrer" style={{ color: '#3b82f6', textDecoration: 'none', borderBottom: '1px solid rgba(59, 130, 246, 0.3)' }}>sanity.io/manage</a></li>
            <li>Copy your <strong>Project ID</strong></li>
            <li>Open the <code>.env</code> file in your project</li>
            <li>Update <code>VITE_SANITY_PROJECT_ID</code></li>
            <li>Restart your development server</li>
          </ol>
        </div>

        <p style={{ marginTop: '40px', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          AVP Tech Solution • Professional Admin Setup
        </p>
      </div>
    )
  }

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      <Studio config={config} />
    </div>
  )
}

export default StudioPage
