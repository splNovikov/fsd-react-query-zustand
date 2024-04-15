const baseUrl = 'http://localhost';

export function imageCreatorsUrl(path: string) {
  return `${baseUrl}:4000${path}`;
}

export function iamUrl(path: string) {
  return `${baseUrl}:3002/api${path}`;
}

export type { UnexpectedErrorDto } from './ocus-pocus.types';
