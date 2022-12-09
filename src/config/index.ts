import { productionEnvConfig } from "./env/env.prod";
import { stagingEnvConfig } from "./env/env.staging";

const stage = process.env.NODE_ENV;

// to check if the stage is production or staging and return the config accordingly
export const config = stage === "production" ? productionEnvConfig : stagingEnvConfig;

const { serverUrl } = config;

export const API_URL = serverUrl;