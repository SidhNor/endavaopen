var React = require('react');
var mui = require('material-ui');
var Card = require('../controls/card');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var LivePage = React.createClass({

  mixins: [
    PageTransitionMixin
  ],

  render: function () {
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');

    return (
      <div className={classes}>
        <section className="page-section">
          <Card>
            <h4>Endava Open live</h4>
            <div className="layout vertical">
              <a href="http://live.endava.com" target="__blank">Watch now</a>
            </div>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = LivePage;
