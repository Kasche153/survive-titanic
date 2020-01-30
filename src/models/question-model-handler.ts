import { Question } from "api/fuctions/get-question";

class QuestionModelHandler {
  answers: Array<boolean> = [];
  questions: Array<Question> = [];
  username?: string;
  _hasBeenSent?: boolean;

  constructor() {
    const load = this.load();
  }

  getLatestQuestion() {
    return this.questions[this.questionIndex()];
  }

  clearQuestions() {
    this.questions = [];
    this.answers = [];
    this.save();
  }

  load() {
    const load = JSON.parse(
      window.localStorage.getItem("question-local") || "{}"
    );
    for (const i in load) {
      (this as any)[i] = load[i];
    }

    return load;
  }
  save() {
    window.localStorage.setItem("question-local", JSON.stringify(this));
  }

  questionIndex() {
    return this.questions.length - 1;
  }

  hasBeenSent() {
    return this._hasBeenSent;
  }
  setHasBeenSent(hasBeenSent: boolean) {
    this._hasBeenSent = hasBeenSent;

    this.save();
  }
  setUsername(username: string) {
    this.username = username;
    this.save();
  }
  getUsername() {
    return this.username;
  }
  setQuestions(questions: Question[]) {
    this.questions = questions;
    this.save();
  }
  addQuestion(questions: Question) {
    this.questions.push(questions);
    this.save();
  }
  getQuestions() {
    return this.questions;
  }
  addAnswer(answer: boolean) {
    this.answers.push(answer);
  }
  getAnswers() {
    return this.answers;
  }
  clear() {
    for (let i in this) {
      if (Array.isArray(this[i])) {
        (this[i] as any) = [];
      } else {
        (this[i] as any) = undefined;
      }
    }
  }

  getScore() {
    const latestQuestion = this.getLatestQuestion();
    if (
      !latestQuestion ||
      !latestQuestion.survivors ||
      !latestQuestion.fatalities
    )
      return 0;
    return (
      latestQuestion.survivors /
      (latestQuestion.survivors + latestQuestion.fatalities)
    );
  }
}

export const questionsModel = new QuestionModelHandler();
