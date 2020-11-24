// all environments
export enum env {
    dev,
    local,
    prod,
    qa,
    staging,
    uat
}

export const currentEnv = env.dev;

/// API urls 
export const baseUrl = {
    [env.dev]: "",
    [env.local]: "",
    [env.prod]: "",
    [env.qa]: "",
    [env.staging]: "",
    [env.uat]: "",
}[currentEnv]

// current environment
