import { execSync } from 'child_process';

function getCurrentContext() {
  const currentContextValue = execSync('kubectl config current-context').toString().replace('\n', '');

  return currentContextValue;
}

export { getCurrentContext };
