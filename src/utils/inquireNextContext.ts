import { Separator, select } from '@inquirer/prompts';
import { getAllContexts } from './getAllContexts.js';

async function inquireNextContext(currentContext: string = 'b45ck_lmn'): Promise<string | null> {
  const contextsArr = getAllContexts(currentContext);

  if (!contextsArr.length) return null;

  const contextToSwitchTo: string = await select({
    message: '✨ Switch to another context?',
    choices: [new Separator(), ...contextsArr, new Separator()],
  });

  return contextToSwitchTo;
}

export { inquireNextContext };
