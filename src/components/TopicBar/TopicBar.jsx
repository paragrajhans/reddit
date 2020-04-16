import React, { Fragment } from "react";
import "./TopicBar.scss";

class TopicBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToTopic = () => {
    window.open(this.props.leg.data.url);
  };

  formatDate(date) {
    if (date == null) {
      return "";
    }
    if (!typeof date.toLocaleDateString === "function") {
      return "";
    }
    date = new Date(date);
    return (
      date.toLocaleDateString("en-US", { day: "numeric" }) +
      "-" +
      date.toLocaleDateString("en-US", { month: "short" }) +
      "-" +
      date.toLocaleDateString("en-US", { year: "numeric" })
    );
  }

  render() {
    return (
      <Fragment>
        <div className="topic-container" onClick={this.navigateToTopic}>
          <div className="topic-title">{this.props.leg.data.title}</div>
          <div className="details-container">
            <div className="author-container">
              <span className="k-icon k-i-user author-icon"></span>
              <span className="topic-author">{this.props.leg.data.author}</span>
            </div>

            <div className="likes-container">
              <span class="k-icon k-i-star k-i-bookmark"></span>
              <span className="created-date">
                {this.props.leg.data.score ? this.props.leg.data.score : "-"}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TopicBar;
