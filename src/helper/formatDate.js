export const dateToExpiryDate = (date) => {
	const [years, mouth] = date.split('-')
	const lastTwoNumbersOfYears = years.slice(-2)
	return `${mouth}/${lastTwoNumbersOfYears}`
}