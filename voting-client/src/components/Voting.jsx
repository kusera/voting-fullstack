import '../styles/VotingComponent.css';

import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },

  render: function() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <div className="button" key={entry}>
            <h1>{entry}</h1>
          </div>
        )}
      </div>
    );
  }
});
