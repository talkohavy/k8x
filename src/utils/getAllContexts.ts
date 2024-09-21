import { execSync } from 'child_process';
import os from 'os';

function getAllContexts(currentContext: string) {
  const resultsFilterer =
    os.platform() === 'win32'
      ? `Select-Object -Skip 1 | ForEach-Object {  
        $fields = $_ -split 'a+'
        if ($fields[1] -ne '${currentContext}') {
            $fields[1]
        }
    }`
      : `awk 'NR > 1 {print $2}' | awk -v ctx=${currentContext} '$0 != ctx'`;

  const contextsAsString = execSync(`kubectl config get-contexts | ${resultsFilterer}`).toString();
  const contextsArr = contextsAsString.split('\n').filter(Boolean);

  return contextsArr;
}

export { getAllContexts };
