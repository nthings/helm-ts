import { GlobalFlags } from '../types';
import install from './install-cmd';
import uninstall from './uninstall-cmd';
import rollback from './rollback-cmd';
import list from './list-cmd';
import repo from './repo-cmd';

export const getAliasedGlobalFlags = ({
  namespace = '',
}: GlobalFlags = {}) => ({
  '--namespace': namespace,
});

export default {
  install,
  uninstall,
  rollback,
  list,
  repo,
};
