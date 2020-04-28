import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">


                  {this.props.quotes.map(quote => <QuoteCard quote={quote}/>)}
                // Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes


            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    quotes: state.quotes
  }

}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: () => {
      dispatch(removeQuote())
    },

      upvoteQuote: () => {
        dispatch(upvoteQuote())
      },

      downvoteQuote: () => {
        dispatch(downvoteQuote())
      }

  };
};

//add arguments to connect as needed
export default connect(mapStateToProps,mapDispatchToProps)(Quotes);
