import { UserChoice } from "../redux/models/question.model";

export const uniqueSet = (array: Array<UserChoice>, data: UserChoice): Array<UserChoice> => {
    const index = array.findIndex((item) => item.qn === data.qn);
  
    if (index === -1) {
      return [...array, data];
    }
  
    return array.map((item, i) => (i === index ? { ...item, ans: data.ans } : item));
  };