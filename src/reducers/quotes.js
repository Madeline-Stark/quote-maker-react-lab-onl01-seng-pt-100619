export default (state = [], action) => {
  let index;
  let quote;

  // add switch
  switch (action.type) {

    case 'ADD_QUOTE':
      // want to add quote from payload 
      return state.concat(action.quote); // concatenates in the quote-merges, can also use spread

    case 'REMOVE_QUOTE':
      // takes in a quoteId payload
      // how to return every object, except one
      return state.filter(quote => quote.id !== action.quoteId);

    
    // in lesson, be sure to connect the callback action props to the the Upvote, Downvote and Delete buttons.
      case 'UPVOTE_QUOTE':
        // action has payload of quote id
        // need to find and update particular quote
      index = state.findIndex(quote => quote.id === action.quoteId); 
      quote = state[index]; // get quote object
      const copyOfQuote = {
        ...quote,
        votes: quote.votes + 1
      }
      // could filter out and add again, but then will lose position in array
      return [
        ...state.slice(0, index),
        copyOfQuote, // replace old quote object with updated one
        ...state.slice(index + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      // copy over upvote quote, change to subtract
      // might need to chage all variables b/c can't redeclare
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) { // want to make sure doesn't go past 0
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ];
      }
      return state; // if conditional returns false

    default: 
      return state;
  }
}