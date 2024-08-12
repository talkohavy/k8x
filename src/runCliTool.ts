import { execSync } from 'child_process';
import inquirer, { type QuestionCollection } from 'inquirer';
import { contextToTable } from './utils/index.js';

async function runCliTool() {
  try {
    printCurrentContext();

    changeContext();
  } catch (error) {
    console.error(error);
  }
}

function printCurrentContext() {
  const currentContextValue = execSync('kubectl config current-context').toString().replace('\n', '');

  const table = contextToTable(currentContextValue);

  console.table(table);
  console.log('');
}

async function changeContext() {
  // WARNING!!! Will not work in windows because of usage in awk!
  const contextsAsString = execSync("kubectl config get-contexts | awk 'NR > 1 && $1 !~ /^*/ {print $2}'").toString();
  const contextChoices = contextsAsString.split('\n').filter(Boolean);

  if (contextChoices.length) {
    const questions: QuestionCollection<{ context: string }> = [
      {
        type: 'list',
        name: 'context',
        message: 'Switch to another context?',
        choices: contextChoices,
      },
    ];

    const { context } = await inquirer.prompt(questions);

    console.log('\n', execSync(`kubectl config use-context ${context}`).toString());
  }
}

export { runCliTool };
