import { switchContext } from './commands/switchContext.js';
import { getCurrentContext } from './utils/getCurrentContext.js';
import { printContextInTable } from './utils/printContextInTable.js';

async function runCliTool() {
  try {
    const currentContext = getCurrentContext();

    printContextInTable(currentContext);

    await switchContext(currentContext);
  } catch (error) {
    console.error(error);
  }
}

export { runCliTool };
