import { useState } from 'react';
import OpenSeadragon from 'openseadragon';
import { OpenSeadragonAnnotator, OpenSeadragonViewer } from '@annotorious/react';
import { OSDConnectorPlugin } from '@annotorious/plugin-connectors-react';
import { Controls } from './components/Controls';
import { Tool } from './Tool';

import '@annotorious/react/annotorious-react.css';
import '@annotorious/plugin-connectors-react/annotorious-connectors-react.css';

const OSD_OPTS: OpenSeadragon.Options = {
  prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@3.1/build/openseadragon/images/',
  tileSources: 'https://heidicon.ub.uni-heidelberg.de/iiif/2/23787845%3A973711/info.json',
  showRotationControl: true,
  gestureSettingsMouse: {
    clickToZoom: false
  }
};

export const App = () => {

  const [tool, setTool] = useState<Tool>('MOVE');

  return (
    <div>
      <OpenSeadragonAnnotator
        drawingEnabled={tool === 'DRAW'}
        tool="rectangle">

        <OpenSeadragonViewer 
          className="openseadragon-container"
          options={OSD_OPTS} />

        <OSDConnectorPlugin 
          enabled={tool === 'RELATION'} />
      </OpenSeadragonAnnotator>

      <Controls 
          tool={tool} 
          onChangeTool={setTool} />
    </div>
  )

}