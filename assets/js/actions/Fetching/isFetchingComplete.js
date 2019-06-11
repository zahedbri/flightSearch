import { IS_FETCHING_COMPLETE } from '../types';

export const isFetchingComplete = () => {
	return {
		type: IS_FETCHING_COMPLETE,
		action: false
	};
};
