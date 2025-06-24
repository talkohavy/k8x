import { execSync } from 'child_process';

export function getCurrentNamespace() {
  const currentNamespaceValue =
    execSync("kubectl config view --minify --output 'jsonpath={..namespace}'").toString().replace('\n', '') ||
    'default';

  return currentNamespaceValue;
}
