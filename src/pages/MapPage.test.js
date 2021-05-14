import React from "react";
import MapPage from "./MapPage"
import { render, screen, userEvent } from '../helper/test-utils'

jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
	GeolocateControl: jest.fn(),
	Map: jest.fn(() => ({
		addControl: jest.fn(),
		on: jest.fn(),
		remove: jest.fn(),
	})),
	NavigationControl: jest.fn(),
}));

describe('Render', ()=> {
	it('show', ()=> {
		render(<MapPage/>, {initialState: {login: {isLoggedIn: true}}})
		screen.debug()
	})
})