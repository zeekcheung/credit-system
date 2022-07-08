import React from 'react'
import { useAuth } from 'contexts/auth-context'
import ErrorBoundary from 'components/error-boundary'
import { FullPageError } from 'components/lib'
import { AuthenticatedApp } from 'screens/authenticated-app'
import { UnauthenticatedApp } from 'screens/unauthenticated-app'
import './App.css'

function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  )
}
export default App
