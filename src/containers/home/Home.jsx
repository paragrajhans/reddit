import React from "react";
import "./Home.scss";
import axios from "axios";
import RedditCard from "../../components/RedditCard/RedditCard";
import Config from "../../../src/config.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listsData: [],
    };
  }

  componentDidMount() {
    this.getRedditLists();
  }

  getRedditLists() {
    axios
      .get(Config.api.listUrl)
      .then((response) => {
        let tempData = response.data.data.children;
        this.setState({
          listsData: tempData,
        });
      })
      .catch((err) => {
        console.info(err);
      });
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="landing-page">
          <div className="title-container">
            <h1 className="home-title"> Topics</h1>
          </div>
          {this.state.listsData.map((value) => {
            return <RedditCard leg={value} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
