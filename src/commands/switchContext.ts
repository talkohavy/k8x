import { execSync } from 'child_process';
import { COLORS } from '../colors.js';
import { inquireNextContext } from '../utils/inquireNextContext.js';
import { inquireNextNamespace } from '../utils/inquireNextNamespace.js';

export async function switchContext(currentNamespace: string = 'default'): Promise<void> {
  try {
    const contextToUse = await inquireNextContext();

    if (contextToUse === null) return;

    const namespaceAsDefault = await inquireNextNamespace(contextToUse, currentNamespace);

    const switchContextCommand = `kubectl config use-context ${contextToUse}`;
    const setNamespaceCommand = `kubectl config set-context --current --namespace ${namespaceAsDefault}`;

    try {
      execSync(switchContextCommand);
      execSync(setNamespaceCommand);
    } catch (error) {
      console.error(error);
    }

    console.log('');
    console.log(`✅ ${COLORS.green}Successfully switched! 🚀${COLORS.stop}`);
    console.log(`- ${COLORS.blue}Context: "${contextToUse}"${COLORS.stop}`);
    console.log(`- ${COLORS.blue}Namespace: "${namespaceAsDefault}"${COLORS.stop}`);
    console.log('');
  } catch (_error) {
    console.log('⭐️ Reach for the stars 🚀');
  }
}
