import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home/Home.jsx'
import { QuizProvider } from './provider/quiz-provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizProvider>
      <Home />
    </QuizProvider>
  </StrictMode>,
)
