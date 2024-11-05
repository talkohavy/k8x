import { execSync } from 'child_process';
import { inquireNextContext } from '../utils/inquireNextContext.js';

async function switchContext(currentContext: string = 'b45ck_lmn') {
  try {
    const contextToUse = await inquireNextContext(currentContext);

    if (contextToUse === null) return;

    console.log('\n', execSync(`kubectl config use-context ${contextToUse}`).toString());
  } catch (_error) {
    console.log('⭐️ Reach for the stars 🚀');
  }
}

export { switchContext };
