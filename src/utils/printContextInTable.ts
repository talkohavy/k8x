import { contextToTable } from './contextToTable.js';

function printContextInTable(contextName: string) {
  const table = contextToTable(contextName);

  console.table(table);
  console.log('');
}

export { printContextInTable };
