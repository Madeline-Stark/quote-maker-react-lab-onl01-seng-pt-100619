// TODO: Create action creators as defined in tests

// create an action creator function
// know will want to export
// and multiple functions so can't export default and will have to import by name in {}, as opposed to with default being able to name them anything when import
// know that is taking in a quote object to add-b/c in error called addQuote(quote: {})
export const addQuote = quote => {
  // will return an object w/ type and payload
  // just creating the action object that will be sent to reducer
    return {
      type: 'ADD_QUOTE',
      // could call this payload or quote - matter of preference
      quote: quote // could also just do quote, this more readable though
      // quote: Object.assign({}, quote, { votes: 0 })
    }
  }
  
  // takes in an id, so reducer can use to find the quote to remove
  export const removeQuote = quoteId => {
    return {
      type: 'REMOVE_QUOTE',
      quoteId
    }
  }
  
  
  export const upvoteQuote = quoteId => {
    return {
      type: 'UPVOTE_QUOTE',
      quoteId
    }
  }
  
  export const downvoteQuote = quoteId => {
    return {
      type: 'DOWNVOTE_QUOTE',
      quoteId
    }
  }