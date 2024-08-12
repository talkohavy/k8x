import inquirer, { type QuestionCollection } from 'inquirer';

// type MyAnswers = {
//   name: string;
//   framework: string;
//   isEslint: boolean;
//   clothes: Array<string>;
//   answer: string;
//   filter: string;
//   optional?: '';
// };

const questions: QuestionCollection = [
  /**
   * Question 1: Open question - answer is a string input
   */
  {
    type: 'input', // <--- defaults to 'input'
    name: 'name',
    message: 'Question 1: What is your name?',
    default: 'Jon Doe',
  },
  /**
   * Question 2: List of answers - choose one
   */
  {
    type: 'list',
    name: 'framework',
    message: 'Question 2: Select the "Framework":',
    choices: ['React', 'Angular', 'Vue', 'Astro'],
  },
  /**
   * Question 3: Boolean true/false answer - choose one
   */
  {
    type: 'list',
    name: 'isEslint',
    message: 'Question 3: Should include Eslint?',
    choices: ['Yes', 'No'],
  },
  /**
   * Question 4: Multiple choice - choose from the list
   */
  {
    type: 'checkbox',
    name: 'clothes',
    message: 'Question 4: Which clothes to include?',
    choices: ['Socks', 'Pants', 'T-Shirt', 'Hat'],
    default: ['Socks'],
  },
  /**
   * Question 5: answer validation example
   */
  {
    type: 'input',
    name: 'answer',
    message: 'Question 4: Provide an empty answer:',
    validate: (input: string) => {
      const isValid = input.length === 0;
      if (!isValid) return 'Your answer MUST have at least one character.';

      return true;
    },
  },
  /**
   * Question 6: filter answer example - modify/transform the answer that's given by the user
   */
  {
    type: 'input', // <--- defaults to 'input'
    name: 'filter',
    message: 'Question 6: I will transform your next provided answer',
    filter: (input: string) => {
      console.log(input);
      return input.substring(1);
    },
  },
  /**
   * Question 7: using "when" example - decides "when" this question will be asked, based on previous answers.
   */
  {
    when: (answers) => {
      console.log(answers);
      console.log(answers.isEslint);
      if (answers.isEslint.to() === 'yes') return true;

      return false;
    },
    type: 'input', // <--- defaults to 'input'
    name: 'optional',
    message: 'Question 6.5: If yes, I will ask this question:',
  },
  /**
   * Question 999: Open vim editor to provide an answer
   */
  // {
  //   type: 'editor', // <--- opens up a vim editor!
  //   name: 'essay',
  //   message: 'Write a short essay:',
  // },
];

async function askQuestions() {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
}

askQuestions();
