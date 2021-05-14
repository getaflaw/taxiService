import React, {useRef, useEffect, useState} from "react";
import mapboxgl from "mapbox-gl";
import {useDispatch, useSelector} from 'react-redux'
import {requestAddressList, requestCardData} from "../../state/redux/actions";
import {drawRoute} from "../../helper/drawRoute";

export const Map = ({children}) => {
	const dispatch = useDispatch();
	const mapRef = useRef(null)
	const [map, setMap] = useState(null)
	mapboxgl.accessToken = 'pk.eyJ1IjoiZ2V0YWZsYXciLCJhIjoiY2tubmM3NWluMHhsczJ2cHJyeXg0eGFycCJ9.5cHdLFT7CLfpTN7HtWHO6g';


	const mapBoxPath = useSelector(state => state.mapRoute.mapBoxPath)

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapRef.current,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [30.31413, 59.93863],
			zoom: 10
		});
		setMap(map)
		dispatch(requestAddressList())
		dispatch(requestCardData())
	}, [])
	useEffect(() => {

		if (map) {
			if (map.getLayer("route")) {
				map.removeLayer("route");
			}
			if (map.getSource("route")) {
				map.removeSource("route");
			}
			map.flyTo({
				center: mapBoxPath[0],
				zoom: 15
			});
			map.addLayer({
				id: "route",
				type: "line",
				source: {
					type: "geojson",
					data: {
						type: "Feature",
						properties: {},
						geometry: {
							type: "LineString",
							coordinates: mapBoxPath
						}
					}
				},
				layout: {
					"line-join": "round",
					"line-cap": "round"
				},
				paint: {
					"line-color": "#ffc617",
					"line-width": 8
				}
			});
		}
	}, [mapBoxPath])

	return (<div id='Map' ref={mapRef}>
		{children}
	</div>);

}