import { Separator, select } from '@inquirer/prompts';
import { COLORS } from '../colors.js';
import { getAllNamespaces } from './getAllNamespaces.js';

export async function inquireNextNamespace(contextToUse: string, currentNamespace: string): Promise<string | null> {
  const namespacesRawArr = getAllNamespaces(contextToUse, currentNamespace);
  namespacesRawArr.shift();

  if (!namespacesRawArr.length) return null;

  const doNotIncludeDefaultAndCurrentNamespace = (ns: string) => ns !== currentNamespace && ns !== 'default';

  const namespaceOptions = namespacesRawArr
    .map((namespaceWithGarbage) => namespaceWithGarbage.split(' ')[0]!)
    .filter(doNotIncludeDefaultAndCurrentNamespace);

  if (currentNamespace !== 'default') {
    namespaceOptions.unshift('default'); // <--- Add 'default' namespace as first option.
  }

  const namespaceToSwitchTo: string = await select({
    message: `${COLORS.yellow}✨ Set default namespace?${COLORS.stop}`,
    choices: [new Separator(), ...namespaceOptions, new Separator()],
    loop: false,
    theme: { prefix: '' },
  });

  return namespaceToSwitchTo;
}
