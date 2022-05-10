function getCorrectAnswer(question: any) {
  const correctArray: any = [];
  question.forEach((item: any) => {
    item.answers.forEach((answer: any, index: any) => {
      if (answer.correct) {
        correctArray.push(index);
      }
    });
  });
  return correctArray;
}
export function getScoreQuiz(correctArray: any[], userAnswer: any) {
  let score = 0;
  correctArray.forEach((value: any, index: number) => {
    if (userAnswer[index] === value) {
      score += 1;
    }
  });
  return score;
}
export default getCorrectAnswer;
