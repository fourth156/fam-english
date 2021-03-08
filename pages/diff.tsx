import { Button, TextArea } from '@blueprintjs/core';
import React, { useState } from 'react';
import { diffWords, toSentenceArray } from '../common/DiffHelper';
import { TextSpan } from '../common/TextSpan';
import styles from '../styles/Diff.module.css'



export default function Diff() {
  const [result, setResult] = useState('');
  const [answer, setAnswer] = useState('');
  const [essay, setEssay] = useState('');
  const [visibility, setVisibility] = useState(false);

  const temp = diffWords(answer, result);

  return (
    <div className={styles.App}>
      <div className={styles.diffArea}>
        <TextArea placeholder="Student's answer" id="diff-one" className={styles.diffBox} onChange={val => setResult(val.target.value)} />
        <TextArea placeholder="Answer key" id="diff-two" className={styles.diffBox} onChange={val => setAnswer(val.target.value)} />
      </div>
      <div id='result'>{temp.map((o, i) => <TextSpan key={i} color={o.color} text={o.text} />)}</div>

      <Button className={styles.sideBySideBtn} onClick={() => setVisibility(!visibility)}>Sentences side by side</Button>
      { visibility ? <><TextArea placeholder="Essay in English" id="diff-three" className={styles.diffBox} value={essay} onChange={val => setEssay(val.target.value)} />
        <div className={styles.diffArea}>
          <ul>{toSentenceArray(essay).map(r => <li>{r}</li>)}</ul>
          <ul>{toSentenceArray(answer).map(a => <li>{a}</li>)}</ul>
        </div></> : null}
    </div>
  );
}