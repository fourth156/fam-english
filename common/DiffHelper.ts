import * as Diff from 'diff';

export interface IDiffResult {
  text: string;
  color: string;
}

export const diffWords = (one: string, other: string) => {
  const diff = Diff.diffWords(one, other);
  
  return diff.map(part => ({ text: part.value, color: part.added ? 'green' :
  part.removed ? 'red' : '#CED9E0'}));
}

export const toSentenceArray = (str: string) => {
  return str.split('.').filter(r => !!r.trim());
}