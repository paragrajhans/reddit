const dev = {
  api: {
    listUrl: "https://www.reddit.com/subreddits/popular.json?raw_json=1",
  },
};

var config = dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
