import { IS_FETCHING_REQUEST } from '../types';

export const isFetchingRequest = () => {
	return {
		type: IS_FETCHING_REQUEST,
		action: true
	};
};
