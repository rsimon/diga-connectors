import OpenSeadragon from "openseadragon";
import { OpenSeadragonViewer } from "@annotorious/react";

const OSD_OPTS: OpenSeadragon.Options = {
  prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@3.1/build/openseadragon/images/',
  tileSources: 'https://heidicon.ub.uni-heidelberg.de/iiif/2/23787845%3A973711/info.json',
  showRotationControl: true,
  gestureSettingsMouse: {
    clickToZoom: false
  }
};

export const App = () => {

  return (
    <OpenSeadragonViewer 
      options={OSD_OPTS} />
  )

}