import { ConnectionPopupProps } from '@annotorious/plugin-connectors-react';

import './VocabularyPopup.css';

const DUMMY_VOCABULARY = [
  { label: 'is connected to', value: 'is connected to' },
  { label: 'is behind', value: 'is behind' },
  { label: 'is in front', value: 'is in front' },
  { label: 'is below', value: 'is below' },
  { label: 'is part of', value: 'is part of' }
]

export const VocabularyPopup = (props: ConnectionPopupProps) => {

  const value = props.annotation.bodies.find(b => b.purpose === 'tagging' || !b.purpose)?.value;

  const onChange = (value: string) => {
    const existing = props.annotation.bodies.find(b => b.purpose === 'tagging');
    if (existing) {
      props.onUpdateBody(existing, { purpose: 'tagging', value });
    } else {
      props.onCreateBody({ purpose: 'tagging', value });
    }
  }

  return (
    <div className="diga-vocab-popup">
      <select 
        value={value}
        onChange={evt => onChange(evt.target.value)}>
        {DUMMY_VOCABULARY.map(({ label, value}) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>
  )

}