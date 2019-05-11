import * as React from 'react';

import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import proj from 'ol/proj';
import control from 'ol/control'
import ZoomSlider from 'ol/control/ZoomSlider';
import MousePosition from 'ol/control/MousePosition';


import 'ol/ol.css';

const mapId = 'map';

export default class MapComponent extends React.Component {

    componentDidMount(): void {
        new Map({
            target: mapId,
            controls: control.defaults().extend([new ZoomSlider(), new MousePosition()]),
            layers: [
                new TileLayer({
                    preload: Infinity,
                    source: new OSM()
                })
            ],
            view: new View({
                center: proj.fromLonLat([-2.72, 51]),
                zoom: 7
            })
        });
    }

    render(): JSX.Element {
        return (
            <div id={mapId} />
        );
    }
}
