const dev = {
  api: {
    listUrl: "https://www.reddit.com/subreddits/popular.json?raw_json=1",
    subListUrl1: "https://www.reddit.com/r/",
    subListUrl2: "/hot.json",
  },
};

var config = dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
