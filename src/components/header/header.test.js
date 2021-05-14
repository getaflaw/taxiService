import React from "react";
import header from "./header";
import { render } from "@testing-library/react";

describe('Render', ()=> {
	it('show', ()=> {
		const {getByText} = render(
			<header/>
			)
	})
})