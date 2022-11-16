import * as config from './config';

export const info = (m: string) => console.log(alteredMessage(m));
export const warning = (m: string) => console.warn(alteredMessage(m));
export const error = (m: string) => console.error(alteredMessage(m));

const alteredMessage = (m: string) => `[${config.appName}] ${m}`;
