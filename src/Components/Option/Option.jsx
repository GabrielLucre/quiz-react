import { useContext } from "react"
import { QuizContext } from '../../context/quiz-context'
import PropTypes from 'prop-types'
import "./Option.css"

const Option = ({ option, answer, selectOption }) => {
    // eslint-disable-next-line no-unused-vars
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className={`option ${quizState.answerSelected && option === answer ? "correct" : ""} ${quizState.answerSelected && option !== answer ? "wrong" : ""}`} onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
    )
}
Option.propTypes = {
    option: PropTypes.string.isRequired,
    selectOption: PropTypes.func.isRequired,
    answer: PropTypes.string.isRequired
}

export default Option