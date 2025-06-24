import { execSync } from 'child_process';

export function getAllNamespaces(contextToUse: string, _currentNamespace: string) {
  const namespacesAsString = execSync(`kubectl get ns --context ${contextToUse}`).toString();
  const namespacesArr = namespacesAsString.split('\n').filter(Boolean);

  return namespacesArr;
}
