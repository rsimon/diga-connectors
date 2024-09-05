import { Move, Spline, Square } from 'lucide-react';
import { Tool } from '@/Tool';

import './Controls.css';

interface ControlsProps {

  tool: Tool;

  onChangeTool(tool: Tool): void;
  
}

export const Controls = (props: ControlsProps) => {

  const { tool, onChangeTool } = props;

  return (
    <div className="annotation-actions">
      <button
        className={tool === 'MOVE' ? 'active' : undefined}
        onClick={() => onChangeTool('MOVE')}>
        <Move size={22} />
      </button>

      <button
        className={tool === 'DRAW' ? 'active' : undefined}
        onClick={() => onChangeTool('DRAW')}>
        <Square size={22} />
      </button>

      <button
        className={tool === 'RELATION' ? 'active' : undefined}
        onClick={() => onChangeTool('RELATION')}>
        <Spline size={22} />
      </button>
    </div>
  )

}