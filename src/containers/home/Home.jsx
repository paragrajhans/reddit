import React from "react";
import "./Home.scss";
import axios from "axios";
import RedditCard from "../../components/RedditCard/RedditCard";
import { DropDownList, AutoComplete } from "@progress/kendo-react-dropdowns";
import { filterBy } from "@progress/kendo-data-query";

import Config from "../../../src/config.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listsData: [],
      subListsData: [],
      value: "",
      opened: false,
    };
  }

  componentDidMount() {
    this.getRedditLists();
  }

  onClickTopic = (topicName) => {
    this.setState(
      {
        redirect: true,
      },
      () => {
        return this.props.history.push({
          pathname: "/topic-details",
          topic: topicName,
        });
      }
    );
  };

  onChange = (event) => {
    const val = event.target.value;
    console.log(val);
    if (event.target.value.length > 2) {
      console.log("HERE");
      axios
        .get(
          "https://www.reddit.com/subreddits/search.json?q=" +
            event.target.value +
            "&raw_json=1"
        )
        .then((res) => {
          let tempReddits = res.data.data.children.map((val) => {
            return val.data.display_name;
          });

          this.setState({
            opened: true,
            finalData: tempReddits,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
          <div className="search-container">
            <p>Search here : </p>
            <AutoComplete
              data={this.state.finalData}
              onChange={this.onChange}
            />
          </div>

          {this.state.listsData.map((value) => {
            return <RedditCard leg={value} onClickTopic={this.onClickTopic} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
