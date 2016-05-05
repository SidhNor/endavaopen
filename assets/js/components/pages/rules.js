var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var RulesPage = React.createClass({

  mixins: [
    PageTransitionMixin
  ],

  render: function () {
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');

    return (
      <div className={classes}>
        <section className="page-section">
          <Card>
            <h4>The tournament is open to the following players</h4>
            <div className="layout horizontal">
              <dl>
                <dt>Playing level</dt>
                <dd>2.0 to 4.0</dd>
                <dt>Format</dt>
                <dd>Single and Double Elimination</dd>
                <dt>Gender</dt>
                <dd>M and F</dd>
              </dl>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>Specific rules for Endava Open 2016</h4>
            <div class="layout vertical">
              <ul class="rule-list">
                <li>30 players of whom 23 men and 7 women. Thus, 6 women will play among women and 1 woman will play with 1 man.</li>
                <li>Those who lose in Round 0, Round 1 and Round 2 (only 1 player) will play in "Doubles"</li>
                <li>The 1st set of Round 0, Round 1 and Round 2  will start with score 2:2</li>
                <li>Starting from the Quarterfinals, the sets will start from 0:0</li>
                <li>Super Tiebreak will be played in Round 0, Round 1 and Round 2 in case the set score is 1:1</li>
              </ul>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>There is a 30 &euro; participation fee</h4>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>The winner of the match will report the match results. Match results are submitted directly on the website where they are checked for score inaccuracies. This means that only scores that are obtainable to finish a match are allowed</h4>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>All tournament players should maintain current contact information. If you change phone numbers or e-mail addresses, you must update your profile so other member can contact you and you will receive email notifications</h4>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = RulesPage;
