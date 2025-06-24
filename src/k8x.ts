import { switchContext } from './commands/switchContext.js';
import { getCurrentContext } from './utils/getCurrentContext.js';
import { getCurrentNamespace } from './utils/getCurrentNamespace.js';
import { printContextInTable } from './utils/printContextInTable.js';

export async function runCliTool() {
  try {
    const currentContext = getCurrentContext();
    const currentNamespace = getCurrentNamespace();

    printContextInTable(currentContext, currentNamespace);

    await switchContext(currentContext, currentNamespace);
  } catch (error) {
    console.error(error);
  }
}
