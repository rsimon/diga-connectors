import { useEffect, useState } from 'react';
import OpenSeadragon from 'openseadragon';
import { OpenSeadragonAnnotator, OpenSeadragonViewer, useAnnotator } from '@annotorious/react';
import { OSDConnectionPopup, OSDConnectorPlugin, W3CImageRelationFormat } from '@annotorious/plugin-connectors-react';
import { Controls } from './components/Controls';
import { Tool } from './Tool';

import '@annotorious/react/annotorious-react.css';
import '@annotorious/plugin-connectors-react/annotorious-connectors-react.css';
import { VocabularyPopup } from './components/VocabularyPopup';

const OSD_OPTS: OpenSeadragon.Options = {
  prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@3.1/build/openseadragon/images/',
  tileSources: 'https://heidicon.ub.uni-heidelberg.de/iiif/2/23787845%3A973711/info.json',
  showRotationControl: true,
  gestureSettingsMouse: {
    clickToZoom: false
  }
};

export const App = () => {

  const anno = useAnnotator();

  const [tool, setTool] = useState<Tool>('MOVE');

  useEffect(() => {
    if (!anno) return

    anno.on('createAnnotation', a => console.log(a));
    anno.on('updateAnnotation', a => console.log(a));
  }, [anno]);

  return (
    <div>
      <OpenSeadragonAnnotator
        adapter={W3CImageRelationFormat('23787845:973711')}
        drawingEnabled={tool === 'DRAW'}
        tool="rectangle">

        <OpenSeadragonViewer 
          className="openseadragon-container"
          options={OSD_OPTS} />

        <OSDConnectorPlugin 
          enabled={tool === 'RELATION'}>
          <OSDConnectionPopup popup={props => (
            <VocabularyPopup {...props} />
          )} />
        </OSDConnectorPlugin>
      </OpenSeadragonAnnotator>

      <Controls 
          tool={tool} 
          onChangeTool={setTool} />
    </div>
  )

}