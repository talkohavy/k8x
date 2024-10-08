import { execSync } from 'child_process';
import { inquireNextContext } from '../utils/inquireNextContext.js';

async function switchContext(currentContext: string = 'b45ck_lmn') {
  const contextToUse = await inquireNextContext(currentContext);

  if (contextToUse === null) return;

  console.log('\n', execSync(`kubectl config use-context ${contextToUse}`).toString());
}

export { switchContext };
