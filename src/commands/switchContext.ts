import { execSync } from 'child_process';
import { COLORS } from '../colors.js';
import { inquireNextContext } from '../utils/inquireNextContext.js';
import { inquireNextNamespace } from '../utils/inquireNextNamespace.js';

export async function switchContext(currentNamespace: string = 'default'): Promise<void> {
  try {
    const contextToUse = await inquireNextContext();

    if (contextToUse === null) return;

    const defaultNamespace = await inquireNextNamespace(contextToUse, currentNamespace);

    const command = `kubectl config use-context ${contextToUse} --namespace ${defaultNamespace}`;

    try {
      execSync(command).toString();
    } catch (error) {
      console.error(error);
    }

    console.log('');
    console.log(`✅ ${COLORS.green}Successfully switched! 🚀${COLORS.stop}`);
    console.log(`- ${COLORS.blue}Context: "${contextToUse}"${COLORS.stop}`);
    console.log(`- ${COLORS.blue}Namespace: "${defaultNamespace}"${COLORS.stop}`);
    console.log('');
  } catch (_error) {
    console.log('⭐️ Reach for the stars 🚀');
  }
}
