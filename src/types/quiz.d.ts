interface IQuiz {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IQuizApiRes {
  response_code: number;
  results: IQuiz[];
}
