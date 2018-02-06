import React, {Component} from "react";

export default class Pricing extends Component {
  render() {
    return (
      <div>
          <div className="section-1 text-center col-lg-10 offset-lg-1">
            <h2 className="h2 mt-3">What Makes UpViral So Powerful?</h2>
            <p>
              It all boils down to what happens behind the scenes with the referral invite link. This link provides accountability and a system for your visitors.
              The system guides them to the point of delivering results for you.
            </p>
            <p>
              By automatically emailing reminders, setting goals and providing incentives/rewards, your visitors stay on track and deliver. They get rewarded, you get new leads/customers and everyone’s happy!
            </p>
          </div>
          <div className="section-2 text-center col-lg-10 offset-lg-1">
            <h2 className="h2 mt-3">
              We have only scratched the surface of the marketing leverage that UpViral delivers!
            </h2>
            <p>
            Beyond Dropbox and our own story, there are countless other case-studies industry-wide that have successfully used this same strategy…
            </p>
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h1 className="display-2">138,790</h1>
                    <strong>SUBSCRIBERS IN 40 DAYS</strong>
                  </div>
                  <div className="card-body" style={styles.cardSubscribe}>
                    <p>
                      Springsled collected 138,790 email leads in just 40 days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
              <div className="card">
                <div className="card-header">
                  <h1 className="display-2">100,000</h1>
                  <strong>SUBSCRIBERS IN 7 DAYS</strong>
                </div>
                <div className="card-body" style={styles.cardSubscribe}>
                  <p>
                    Tim Ferris’ blog recently covered how Harrys.com used viral referral marketing to collect well over 100,000 subscribers in just one week.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="section-3 text-center col-lg-10 offset-lg-1">
            <h2 className="h2 mt-3 col-md-8 offset-md-2">
              The success stories by UpViral’s own users just keep coming!
            </h2>
            <p>
              To conduct our beta-test phase, we approached some of the best marketers we know in the business, as well as several newbies on our subscriber list and invited them to give UpViral a try.
            </p>
            <p><i>
              How did they fare out?
            </i></p>
          </div>
          <div className="section-4 text-center col-lg-10 offset-lg-1">
            <h2 className="h2 mt-3 col-md-8 offset-md-2">
              UpViral covers all the bases and takes all the guesswork out of viral/referral marketing.
            </h2>
            <p>
              With UpViral, you get all the capabilities, metrics and analysis tools that you and your staff will ever need to successfully execute any type of viral campaign – in virtually any market or niche.
            </p>
          </div>
          <div className="section-4 text-center col-lg-10 offset-lg-1">
            <h2 className="h2 mt-3 col-md-8 offset-md-2">
              Manage All of Your Campaigns Via One Easy-to-use Dashboard
            </h2>
            <h2 className="h2 mt-3 col-md-8 offset-md-2">
              Fully Customizable Email Automation
            </h2>
            <div className="row">
              <div className="col">
                <i className="fa fa-clock fa-5x"></i>
                <p>Send timed/triggered emails based on users’ actions</p>
              </div>
              <div className="col">
                <i className="fa fa-share-alt fa-5x"></i>
                <p>Add FB, Twitter and other buttons right into emails to make sharing easier!</p>
              </div>
              <div className="col">
                <i className="fa fa-chart-line fa-5x"></i>
                <p>Send multiple email triggers, proven to get you more shares per visitor</p>
              </div>
              <div className="col">
                <i className="fa fa-bell fa-5x"></i>
                <p>Automated alert emails that motivate visitors to their next goal</p>
              </div>
              <div className="col">
                <i className="fa fa-sync fa-5x"></i>
                <p>Follow-up emails make it easy for repeated sharing, again and again!</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

const styles = {
  cardSubscribe: {
    height:'120px'
  }
}
