import { useContext } from 'react'
import { QuizContext } from '../../context/quiz-context'
import Quiz from '../../image/quiz.svg'
import './Welcome.css'

const Welcome = () => {
    // eslint-disable-next-line no-unused-vars
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Seja bem vindo</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>Iniciar</button>
            <img src={Quiz} alt="Início do quiz" />
        </div>
    )
}

export default Welcome