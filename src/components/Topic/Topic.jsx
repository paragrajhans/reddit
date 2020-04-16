import React from "react";
import "./Topic.scss";
import axios from "axios";
import TopicBar from "../TopicBar/TopicBar";
import config from "../../config";

class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicsDetails: [],
      topicName: "",
    };
  }

  componentDidMount() {
    this.getTopicDetails();
  }

  backHome = () => {
    this.setState({}, () => {
      return this.props.history.push({
        pathname: "/reddit",
      });
    });
  };

  getTopicDetails() {
    axios
      .get(
        config.api.subListUrl1 +
          this.props.history.location.topic +
          config.api.subListUrl2
      )
      .then((response) => {
        console.log(response);
        this.setState({
          topicsDetails: response.data.data.children,
          topicName: response.data.data.children[0].data.subreddit,
        });
      })
      .catch((err) => {
        console.info(err);
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="header">
          <span
            className="k-icon k-i-arrow-chevron-left img-container"
            onClick={this.backHome}
          ></span>
          <span className="title">{this.state.topicName}</span>
        </div>
        <div className="empty"></div>
        {this.state.topicsDetails.map((value) => {
          return <TopicBar leg={value} />;
        })}
      </div>
    );
  }
}

export default Topic;
