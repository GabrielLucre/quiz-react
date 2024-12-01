import { useContext, useEffect } from 'react'
import { QuizContext } from '../../context/quiz-context'
import Welcome from '../Welcome/Welcome'
import Question from '../Question/Question'
import GameOver from '../GameOver/GameOver'
import './Home.css'

const Home = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" })
  }, [dispatch])

  return (
    <div className='Home'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default Home
