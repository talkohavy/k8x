import { contextToTable } from './contextToTable.js';

export function printContextInTable(contextName: string, namespace: string) {
  const table = contextToTable(contextName, namespace);

  console.table(table);
  console.log('');
}
