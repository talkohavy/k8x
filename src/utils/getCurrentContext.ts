import { execSync } from 'child_process';

export function getCurrentContext() {
  const currentContextValue = execSync('kubectl config current-context').toString().replace('\n', '');

  return currentContextValue;
}
