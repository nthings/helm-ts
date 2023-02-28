
import { RollbackFlags } from '../types';
import { getAliasedGlobalFlags } from './helm-cmd';
import { runCommand, buildFlagsString } from '../utils/helpers';

const buildHelmRollbackCmd = (name:string, flags: RollbackFlags = {}) => {
  const allFlags = {
    ...getAliasedGlobalFlags(flags),
  };
  const flagsString = buildFlagsString(allFlags);
  return `helm rollback ${name} ${flagsString}`;
};

/**
 * This command rolls back a release to the previous revision.
 *
 * @param name name
 * @param flags flags
 */
const rollback = async (name: string, flags: RollbackFlags = {}): Promise<String> => {
  const command = buildHelmRollbackCmd(name, flags);
  const stdout = await runCommand(command);
  console.log(stdout);
  return stdout;
};

export default rollback;
