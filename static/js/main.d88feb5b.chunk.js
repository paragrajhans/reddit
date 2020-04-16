(this.webpackJsonpreddit=this.webpackJsonpreddit||[]).push([[0],{39:function(e,t,a){e.exports=a(79)},44:function(e,t,a){},62:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(12),r=a.n(i),o=a(6),s=a(7),l=a(9),m=a(8),u=(a(44),a(15)),p=a.n(u),d=(a(62),a(63),a(14)),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.onClickTopic;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-wrapper",onClick:function(){t(e.props.leg.data.display_name)}},c.a.createElement(d.a,{className:"card"},c.a.createElement(d.b,{className:"card-body"},c.a.createElement(d.d,{className:"card-title"},this.props.leg.data.display_name)),c.a.createElement("div",{className:"img-container"},this.props.leg.data.icon_img?c.a.createElement(d.c,{src:this.props.leg.data.icon_img}):c.a.createElement("span",{className:"k-icon k-i-image .k-i-photo empty-card"})))))}}]),a}(c.a.Component),f=a(38),v={api:{listUrl:"https://www.reddit.com/subreddits/popular.json?raw_json=1",subListUrl1:"https://www.reddit.com/r/",subListUrl2:"/hot.json"}},E=Object(f.a)({MAX_ATTACHMENT_SIZE:5e6},v),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onClickTopic=function(e){n.setState({redirect:!0},(function(){return n.props.history.push({pathname:"/topic-details",topic:e})}))},n.state={listsData:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getRedditLists()}},{key:"getRedditLists",value:function(){var e=this;p.a.get(E.api.listUrl).then((function(t){var a=t.data.data.children;e.setState({listsData:a})})).catch((function(e){console.info(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"home-wrapper"},c.a.createElement("div",{className:"landing-page"},c.a.createElement("div",{className:"title-container"},c.a.createElement("h1",{className:"home-title"}," Topics")),this.state.listsData.map((function(t){return c.a.createElement(h,{leg:t,onClickTopic:e.onClickTopic})}))))}}]),a}(c.a.Component),k=(a(74),a(75),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).navigateToTopic=function(){window.open(n.props.leg.data.url)},n.state={},n}return Object(s.a)(a,[{key:"formatDate",value:function(e){return null==e||"function"===(e.toLocaleDateString,!1)?"":(e=new Date(e)).toLocaleDateString("en-US",{day:"numeric"})+"-"+e.toLocaleDateString("en-US",{month:"short"})+"-"+e.toLocaleDateString("en-US",{year:"numeric"})}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"topic-container",onClick:this.navigateToTopic},c.a.createElement("div",{className:"topic-title"},this.props.leg.data.title),c.a.createElement("div",{className:"details-container"},c.a.createElement("div",{className:"author-container"},c.a.createElement("span",{className:"k-icon k-i-user author-icon"}),c.a.createElement("span",{className:"topic-author"},this.props.leg.data.author)),c.a.createElement("div",{className:"likes-container"},c.a.createElement("span",{class:"k-icon k-i-star k-i-bookmark"}),c.a.createElement("span",{className:"created-date"},this.props.leg.data.score?this.props.leg.data.score:"-")))))}}]),a}(c.a.Component)),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).backHome=function(){window.location.href="/"},n.state={topicsDetails:[],topicName:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getTopicDetails()}},{key:"getTopicDetails",value:function(){var e=this;p.a.get(E.api.subListUrl1+this.props.history.location.topic+E.api.subListUrl2).then((function(t){console.log(t),e.setState({topicsDetails:t.data.data.children,topicName:t.data.data.children[0].data.subreddit})})).catch((function(e){console.info(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"header"},c.a.createElement("span",{className:"k-icon k-i-arrow-chevron-left img-container",onClick:this.backHome}),c.a.createElement("span",{className:"title"},this.state.topicName)),c.a.createElement("div",{className:"empty"}),this.state.topicsDetails.map((function(e){return c.a.createElement(k,{leg:e})})))}}]),a}(c.a.Component),N=[{path:"/",exact:!0,main:function(e){return c.a.createElement(b,e)}},{path:"/reddit",exact:!0,main:function(e){return c.a.createElement(b,e)}},{path:"/topic-details",exact:!0,main:function(e){return c.a.createElement(g,e)}}],j=a(35),y=a(10),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(j.a,{basename:"/reddit"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(y.c,null,N.map((function(e,t){return c.a.createElement(y.a,{key:t,path:e.path,exact:e.exact,render:e.main})}))))))}}]),a}(c.a.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d88feb5b.chunk.js.map