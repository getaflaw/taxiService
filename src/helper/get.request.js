export const getRequestToServer = async (URL) => {
	const response = await fetch(`https://loft-taxi.glitch.me/${URL}`,
		{
			method:'GET',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			}})
	const json = await response.json()
	return json
}