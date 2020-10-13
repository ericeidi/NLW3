import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkImg} alt="Happy"/>
                    <h2>Choose an orphanage on the map</h2>
                    <p>There are many children waiting for your visit :)</p>
                </header>

                <footer>
                    <strong>Waterloo</strong>
                    <span>Ontario</span>
                </footer>
            </aside>

            <Map 
                center={[43.45889,-80.5337809]}
                zoom={12}
                style={{ width: '100%', height: '100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap