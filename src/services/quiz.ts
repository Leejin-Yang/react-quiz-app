import axios from 'axios';
import { IQuizApiRes } from 'types/quiz';

const BASE_URL = 'https://opentdb.com/api.php';

export const getQuizListApi = () =>
  axios.get<IQuizApiRes>(BASE_URL, {
    params: {
      amount: 10,
      type: 'multiple',
    },
  });
