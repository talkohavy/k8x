import { execSync } from 'child_process';

export function getAllContexts() {
  const contextsAsString = execSync('kubectl config get-contexts -o name').toString();
  const contextsArr = contextsAsString.trim().split('\n').filter(Boolean);

  return contextsArr;
}
