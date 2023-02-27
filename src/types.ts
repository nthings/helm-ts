export type GlobalFlags = {
  namespace?: string,
}

export type ListFlags = GlobalFlags & {
  allNamespaces?: boolean,
}

export type InstallFlags = GlobalFlags & {
}

export type UninstallFlags = GlobalFlags & {
  description?: string,
  dryRun?: boolean,
  keepHistory?: boolean,
  noHooks?: boolean,
  timeout?: number,
  wait?: boolean,
}

export type RollbackFlags = GlobalFlags & {
  cleanUpOnFail?: boolean,
  dryRun?: boolean,
  force?: boolean,
  historyMax?: number,
  noHooks?: boolean,
  recreatePods?: boolean,
  timeout?: number,
  wait?: boolean,
  waitForJobs?: boolean,
}

export type Release = {
  name: string,
  namespace: string,
  revision: string,
  updated: string,
  status:
    'unknown' |
    'deployed' |
    'uninstalled' |
    'superseded' |
    'failed' |
    'uninstalling' |
    'pending-install' |
    'pending-upgrade' |
    'pending-rollback'
  chart: string,
  'app_version': string,
}

export type Repo = {
  name: string,
  url: string,
}

export type RepoAddFlags = GlobalFlags & {
  username?: string,
  password?: string,
}

export type RepoListFlags = GlobalFlags & {
}
