export const postRequestToServer = async (Data, URL) => {
	const response = await fetch(`https://loft-taxi.glitch.me/${URL}`,
		{
			method:'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(Data) })
	const json = await response.json()
	return json
}