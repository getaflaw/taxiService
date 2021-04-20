import React, {useRef, useEffect} from "react";
import mapboxgl from 'mapbox-gl';

export const Map = ({children}) => {

	mapboxgl.accessToken = 'pk.eyJ1IjoiZ2V0YWZsYXciLCJhIjoiY2tubmM3NWluMHhsczJ2cHJyeXg0eGFycCJ9.5cHdLFT7CLfpTN7HtWHO6g';

	const mapRef = useRef(null)

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapRef.current,
			style: 'mapbox://styles/mapbox/streets-v9',
			center: [-74.5, 40],
			zoom: 9
		});
	}, [])


	return  (<div id='Map' ref={mapRef}>
				{children}
			</div>);

}