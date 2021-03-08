import { IDiffResult } from './DiffHelper'

import React from 'react';

export const TextSpan = (props: IDiffResult) => {
  return <span style={{ color: props.color }}>{props.text}</span>
}