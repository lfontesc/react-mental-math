import React from 'react';

const Pontuacao = props => {
  return (
    <p className="text">
      Your Score: {props.numCorrect}/{props.numQuestions}
    </p>
  );
};

export default Pontuacao;
