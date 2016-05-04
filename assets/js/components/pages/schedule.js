var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card');
var ScheduleIcon = require('../controls/schedule-icon');
var PageTransitionMixin = require('../controls/pagetransition-mixin');

var SchedulePage = React.createClass({

  mixins: [
    PageTransitionMixin
  ],

  render: function () {
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');

    return (
      <div className={classes}>
        <section className="page-section">
          <Card>
            <h4>Friday, May 20</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">10:45 - 10:50</span>
                  <span>Opening Ceremony</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">11:00 - 14:00</span>
                  <span>Round 0</span>
                </div> <div className="layout horizontal">
                  <span className="schedule-time">14:30 - 20:00</span>
                  <span>Round 1 (Singles)</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>Saturday, May 21</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">10:30 - 12:30</span>
                  <span>Round 2 (Singles)</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">12:30 - 14:00</span>
                  <span>Round 1 (Doubles)</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">14:30 - 18:00</span>
                  <span>Quarterfinals (Singles and Doubles)</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>Sunday, May 22</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">10:30 - 11:30</span>
                  <span>Semifinals (Singles)</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">12:00 - 14:00</span>
                  <span>Semifinals (Doubles)</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">14:30 - 15:30</span>
                  <span>Finals (Doubles)</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">16:00 - 18:00</span>
                  <span>Finals (Singles)</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = SchedulePage;
