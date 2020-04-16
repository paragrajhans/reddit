import React, { Fragment } from "react";
import "./RedditCard.scss";
import "@progress/kendo-theme-default/dist/all.css";
import {
  Card,
  CardTitle,
  CardBody,
  CardImage,
} from "@progress/kendo-react-layout";

class RedditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // onClickTopic = (topic) => {
  //   window.location.href = `/topic-details?topic=${topic}`;
  // };

  render() {
    const { onClickTopic } = this.props;
    return (
      <Fragment>
        <div
          className="card-wrapper"
          onClick={() => {
            onClickTopic(this.props.leg.data.display_name);
          }}
        >
          <Card className="card">
            <CardBody className="card-body">
              <CardTitle className="card-title">
                {this.props.leg.data.display_name}
              </CardTitle>
            </CardBody>
            <div className="img-container">
              {this.props.leg.data.icon_img ? (
                <CardImage src={this.props.leg.data.icon_img} />
              ) : (
                <span
                  className="k-icon k-i-image
                  .k-i-photo empty-card"
                ></span>
              )}
            </div>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default RedditCard;
