const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationTypes = {
  getFeedStart: '[feed] Get feed starts',
  getFeedSuccess: '[feed] Get feed succees',
  getFeedFailure: '[feed] Get feed failure',
}

export const actionTypes = {
  getFeed: '[feed] Get feed',
}
