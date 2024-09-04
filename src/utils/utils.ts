// The API returns a sentence not the extra's name, this is a quick workaround to extract just the name.
export const extractExtraNameFromAPIResponse = (response: string): string => {
	const lowercaseResponse = response.toLowerCase();

	if (lowercaseResponse.includes('sugar')) {
		return 'Sugar';
	}

	if (lowercaseResponse.includes('milk')) {
		return 'Milk';
	}

	return response;
};
