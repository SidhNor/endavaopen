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
              <div>See the 2014 finals while you prepare for the 2016 tournament</div>
              <div className="hs-responsive-embed-youtube">
                <iframe src="https://www.youtube.com/embed/9y4L17siFuk" allowfullscreen="true" frameBorder="0">
                </iframe>
              </div>
            </div>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = LivePage;
