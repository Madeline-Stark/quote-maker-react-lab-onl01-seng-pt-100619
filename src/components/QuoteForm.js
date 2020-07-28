import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';


class QuoteForm extends Component {

  // look at lesson for this
  // form components don't need to be connected to redux, can have internal state
  state = {
    content: '',
    author: ''
  }

  // handles the updating of the component state
  // need to add event listeners to all inputs
  handleOnChange = event => {
    // can destructure these keys
    const { value, name } = event.target;
    // want to make handler reusable
    // give the text area name keys that will align with the state
    // need some identifier if going to do dynamically
    this.setState({
      [name]: value
    });
  }

  // add onSubmit handler
  handleOnSubmit = event => {
    event.preventDefault();
    // copy over state and add the id
    // maybe add votes later when talking about upvote actions
    const quote = {...this.state, id: uuid(), votes: 0 };
    // pass quote object to action creator-action creator will update global state
    // importing addQuote directly
    // addQuote returns action, expects argument of quote object

    // how do we tell this component about the store? connect at bottom
    this.props.addQuote(quote);
    // reset form back to blank
    this.setState({
      content: '',
      author: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name="content"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// what are two things we might connect? map state to props and map dispatch to props
// want to map dispatch to props - as second argument so put null in place of state

// in most modern version of React can just put the action in curly braces, don't need map dispatch to props
// saying map addQuote to this component - now will have access to add quote through props object - so might need to update where calling
export default connect(null, { addQuote })(QuoteForm);


// can also do like this:

// in handle submit:
// this.props.addQuote(this.state);

// const mapDispatchToProps = dispatch => {
//   return {
//     addQuote: formData => dispatch({ type: 'ADD_QUOTE', payload: formData })
//   };
// };
 
// export default connect(
//   null,
//   mapDispatchToProps
// )(QuoteForm);