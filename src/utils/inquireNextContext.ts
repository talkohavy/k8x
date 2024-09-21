import { Separator, select } from '@inquirer/prompts';
import { COLORS } from '../colors.js';
import { getAllContexts } from './getAllContexts.js';

async function inquireNextContext(currentContext: string = 'b45ck_lmn'): Promise<string | null> {
  const contextsArr = getAllContexts(currentContext);

  if (!contextsArr.length) return null;

  const contextToSwitchTo: string = await select({
    message: `${COLORS.yellow}✨ Switch to another context?${COLORS.stop}`,
    choices: [new Separator(), ...contextsArr, new Separator()],
    loop: false,
    theme: {
      prefix: '',
    },
  });

  return contextToSwitchTo;
}

export { inquireNextContext };
