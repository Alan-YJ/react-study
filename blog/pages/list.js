import React,{ useState } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Avatar from '../components/Avatar'
import Popular from '../components/Popular'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import { Col, Row, List, Tag, Breadcrumb } from 'antd'
import { CalendarOutlined, PlaySquareOutlined, FireOutlined } from '@ant-design/icons'

const Home = ()=>{
  const [dataSource, setDataSource] = useState([
    {
        "id": 62,
        "title": "Electron 免费视频教程-用前端技术开发桌面应用",
        "introduce": "![Electron免费视频教程](http://newimg.jspang.com/web111111.jpg)\n前端技术的迅猛发展，在任何开发领域都前端技术的一席之地。移动端不用多数，已经有很多移动端的同学开始学习前端技术了，那如何用前端技术开发桌面应用？Electron就是一个不错的选择。\n\n这篇文章就会讲解如何使用`Electron`开发桌面应用系统。通过这篇文章和视频的学习，你可以完全达到Electron开发程序员的标准，并掌握80%以上的技术，可以说这是一个非常不错的入门教程。\n\n视频适合于前端程序员学习，视频会有浅入深逐步讲解。希望小伙伴们会喜欢！",
        "addTime": "2020-01-03",
        "view_count": 20180,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/web111111.jpg\" alt=\"Electron免费视频教程\">\n前端技术的迅猛发展，在任何开发领域都前端技术的一席之地。移动端不用多数，已经有很多移动端的同学开始学习前端技术了，那如何用前端技术开发桌面应用？Electron就是一个不错的选择。</p>\n<p>这篇文章就会讲解如何使用<code>Electron</code>开发桌面应用系统。通过这篇文章和视频的学习，你可以完全达到Electron开发程序员的标准，并掌握80%以上的技术，可以说这是一个非常不错的入门教程。</p>\n<p>视频适合于前端程序员学习，视频会有浅入深逐步讲解。希望小伙伴们会喜欢！</p>\n",
        "part_count": 18,
        "typeName": "视频教程"
    },
    {
        "id": 61,
        "title": "Vue2.x+Koa2实战移动电商(共61集)",
        "introduce": "![效果图](http://blogimages.jspang.com/vue_koa2_ad.jpg)\n这是我的第一套实战课程，希望小伙伴多支持。有很多不足，但是总要开始，只有在不足中不断成长，才能成功。\n课程一共61集，10万多字文字版教程，从前端讲到全栈，希望小伙伴们有所收获。",
        "addTime": "2020-01-16",
        "view_count": 19972,
        "introduce_html": "<p><img src=\"http://blogimages.jspang.com/vue_koa2_ad.jpg\" alt=\"效果图\">\n这是我的第一套实战课程，希望小伙伴多支持。有很多不足，但是总要开始，只有在不足中不断成长，才能成功。\n课程一共61集，10万多字文字版教程，从前端讲到全栈，希望小伙伴们有所收获。</p>\n",
        "part_count": 61,
        "typeName": "视频教程"
    },
    {
        "id": 60,
        "title": "VSCode常用插件和技巧教程",
        "introduce": "![VSCode](http://newimg.jspang.com/vscode_blog_logo.jpg)\n想写这个文章已经很久了，但是一直觉的需要的人可能会很少，毕竟VSCode这种每天都使用IDE工具，基本在1小时内就可以快速上手，但是通过我对身边同事的观察，我发现还是有很多小伙伴使用不够精通。特别是现在越来越多的插件，有的非常好用，直接可以提高我们的开发效率，那从今天开始，我开始更新VSCode的一些插件和技巧，这个并不是定期更新，而是我有了好的素材就会更新。",
        "addTime": "2019-12-22",
        "view_count": 10657,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/vscode_blog_logo.jpg\" alt=\"VSCode\">\n想写这个文章已经很久了，但是一直觉的需要的人可能会很少，毕竟VSCode这种每天都使用IDE工具，基本在1小时内就可以快速上手，但是通过我对身边同事的观察，我发现还是有很多小伙伴使用不够精通。特别是现在越来越多的插件，有的非常好用，直接可以提高我们的开发效率，那从今天开始，我开始更新VSCode的一些插件和技巧，这个并不是定期更新，而是我有了好的素材就会更新。</p>\n",
        "part_count": 9,
        "typeName": "视频教程"
    },
    {
        "id": 59,
        "title": "Taro多端统一框架基础免费教程",
        "introduce": "声明：这是一套免费课程，文字版和视频都免费。\n\n![taro免费视频教程](http://newimg.jspang.com/TaroLogo.jpg)\n\n2020年第2天，开始继续出视频，录视频。有要一起学习的小伙伴吗?\n\n随着微信小程序越来越火，其它平台也都推出了自己的小程序产品（支付宝、快应用、百度、抖音）。小程序最大的特点就是平台能为你提供强大的流量，所以小程序开发变成了前端必会知识。\n作为一个从来不想写程序，一心只想泡妹子的程序员，我一直期盼有一种解决方案，可以一次开发，多端运行。这也就是我的学习理念，每多学一点知识，就少些一些代码。期间我尝试Flutter、尝试uni-app、直到我遇到了Taro，我感觉血液在澎湃，多巴胺在快速分泌，又有了开车的心情。\n\n如果你也想一次开发，可以在任何小程序、H5、ReactNative上运行，那赶快上车吧。上车之后一定会给你前所未有的学习体验。",
        "addTime": "2019-12-13",
        "view_count": 11512,
        "introduce_html": "<p>声明：这是一套免费课程，文字版和视频都免费。</p>\n<p><img src=\"http://newimg.jspang.com/TaroLogo.jpg\" alt=\"taro免费视频教程\"></p>\n<p>2020年第2天，开始继续出视频，录视频。有要一起学习的小伙伴吗?</p>\n<p>随着微信小程序越来越火，其它平台也都推出了自己的小程序产品（支付宝、快应用、百度、抖音）。小程序最大的特点就是平台能为你提供强大的流量，所以小程序开发变成了前端必会知识。\n作为一个从来不想写程序，一心只想泡妹子的程序员，我一直期盼有一种解决方案，可以一次开发，多端运行。这也就是我的学习理念，每多学一点知识，就少些一些代码。期间我尝试Flutter、尝试uni-app、直到我遇到了Taro，我感觉血液在澎湃，多巴胺在快速分泌，又有了开车的心情。</p>\n<p>如果你也想一次开发，可以在任何小程序、H5、ReactNative上运行，那赶快上车吧。上车之后一定会给你前所未有的学习体验。</p>\n",
        "part_count": 11,
        "typeName": "视频教程"
    },
    {
        "id": 53,
        "title": "Flutter实战视频-移动电商 （第69节更新）",
        "introduce": "![Flutter-shop](http://newimg.jspang.com/Flutter_shop.png)\n\n春节过完了，新年新气象，年前一直在住院和养病。现在病已经养好，那就来个大招吧。《Flutter实战移动电商》开始更新，小伙伴快来学习吧。\n\n\n\n**有小伙伴肯定会问我，为什么这套视频要收费？**\n\n其实每年技术胖都会出一套收费视频，收益是为了维护博客的正常运营、服务器费用和买一些录制课程的设备。（社会太现实，0盈利无法生存。另外求大佬赞助或投资，实现真正的全免费。）\n\n技术胖的初心并没有变，目标是录制1000集免费视频，这个目标可能要10年才能达到，今年目标是录制100集免费视频。\n\n古语有云：“兵马未动，粮草先行。年年防歉，夜夜防贼。”，那这套视频就是攒粮草的，为了实现1000集免费视频教程的目标。\n\n\n**所以希望大家对收费的理解，也感谢大家的支持，你的一次付费购买，就会帮助技术胖出更多的免费视频教程，也间接帮助了中国前端生态圈的崛起。**\n\n如果你对Flutter感兴趣，可以加入Flutter群：\n\n**学习讨论QQ群：806799257**\n\n入群问题：Flutter出自于哪个公司？\n\n入群答案：google  (注意**全小写**，最好用电脑端加入，移动端Bug)\n\n\n",
        "addTime": "2019-12-05",
        "view_count": 27535,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/Flutter_shop.png\" alt=\"Flutter-shop\"></p>\n<p>春节过完了，新年新气象，年前一直在住院和养病。现在病已经养好，那就来个大招吧。《Flutter实战移动电商》开始更新，小伙伴快来学习吧。</p>\n<p><strong>有小伙伴肯定会问我，为什么这套视频要收费？</strong></p>\n<p>其实每年技术胖都会出一套收费视频，收益是为了维护博客的正常运营、服务器费用和买一些录制课程的设备。（社会太现实，0盈利无法生存。另外求大佬赞助或投资，实现真正的全免费。）</p>\n<p>技术胖的初心并没有变，目标是录制1000集免费视频，这个目标可能要10年才能达到，今年目标是录制100集免费视频。</p>\n<p>古语有云：“兵马未动，粮草先行。年年防歉，夜夜防贼。”，那这套视频就是攒粮草的，为了实现1000集免费视频教程的目标。</p>\n<p><strong>所以希望大家对收费的理解，也感谢大家的支持，你的一次付费购买，就会帮助技术胖出更多的免费视频教程，也间接帮助了中国前端生态圈的崛起。</strong></p>\n<p>如果你对Flutter感兴趣，可以加入Flutter群：</p>\n<p><strong>学习讨论QQ群：806799257</strong></p>\n<p>入群问题：Flutter出自于哪个公司？</p>\n<p>入群答案：google  (注意<strong>全小写</strong>，最好用电脑端加入，移动端Bug)</p>\n",
        "part_count": 69,
        "typeName": "视频教程"
    },
    {
        "id": 52,
        "title": "React Hooks+Egg.js实战视频教程-技术胖Blog开发",
        "introduce": "\n![React免费实战视频](http://newimg.jspang.com/react_blog_demo.jpg)\n\nReact的基础和全家桶都已经讲完了，是时候把所有知识都串联起来，作一个真实项目了。\n项目要用到的技术栈会很多，而且是真实项目，开发完成后，我会把自己的博客替换成新开发的，并且会把代码进行开源。\n项目前台会使用React服务端渲染，并且全部使用Hooks语法来完成。\n项目后台可能会使用Koa+mysql,后台将使用Koa的上层框架egg.js。\n\n本教程并没有课程大纲，一遍开发一遍讲述，但这样可以保证最真实的开发流程。如果你也想用React开发个人博客，那这个教程是你最好的选择。",
        "addTime": "2019-11-23",
        "view_count": 43504,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/react_blog_demo.jpg\" alt=\"React免费实战视频\"></p>\n<p>React的基础和全家桶都已经讲完了，是时候把所有知识都串联起来，作一个真实项目了。\n项目要用到的技术栈会很多，而且是真实项目，开发完成后，我会把自己的博客替换成新开发的，并且会把代码进行开源。\n项目前台会使用React服务端渲染，并且全部使用Hooks语法来完成。\n项目后台可能会使用Koa+mysql,后台将使用Koa的上层框架egg.js。</p>\n<p>本教程并没有课程大纲，一遍开发一遍讲述，但这样可以保证最真实的开发流程。如果你也想用React开发个人博客，那这个教程是你最好的选择。</p>\n",
        "part_count": 44,
        "typeName": "视频教程"
    },
    {
        "id": 51,
        "title": "React服务端渲染框架Next.js入门(共12集)",
        "introduce": "![Next.js](http://newimg.jspang.com//next_blog.jpg)\n\nNext.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）。在没有Next.js的时候，用React开发需要配置很多繁琐的参数，如Webpack配置，Router配置和服务器端配置等....。如果需要作SEO，要考虑的事情就更多了，怎么样服务端渲染和客户端渲染保持一致就是一件非常麻烦的事情，需要引入很多第三方库。但有了Next.js，这些问题都解决了，使开发人员可以将精力放在业务逻辑上，从繁琐的配置中解放出来。",
        "addTime": "2019-12-05",
        "view_count": 7843,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com//next_blog.jpg\" alt=\"Next.js\"></p>\n<p>Next.js 是一个轻量级的 React 服务端渲染应用框架。有了它我们可以简单轻松的实现React的服务端渲染，从而加快首屏打开速度，也可以作SEO（收索引擎优化了）。在没有Next.js的时候，用React开发需要配置很多繁琐的参数，如Webpack配置，Router配置和服务器端配置等....。如果需要作SEO，要考虑的事情就更多了，怎么样服务端渲染和客户端渲染保持一致就是一件非常麻烦的事情，需要引入很多第三方库。但有了Next.js，这些问题都解决了，使开发人员可以将精力放在业务逻辑上，从繁琐的配置中解放出来。</p>\n",
        "part_count": 12,
        "typeName": "视频教程"
    },
    {
        "id": 50,
        "title": " React Hooks 免费视频教程(共11集)",
        "introduce": "![ReactHooks](http://newimg.jspang.com/ReactHooks01.png)\n\n2019年React Hooks是React生态圈里边最火的新特性了。它改变了原始的React类的开发方式，改用了函数形式;它改变了复杂的状态操作形式，让程序员用起来更轻松;它改变了一个状态组件的复用性，让组件的复用性大大增加。如果你是React的粉丝者或者正在使用React开发项目，你可以用1个小时时间看一下这篇文章（视频），你一定会有所收获，并在工作种能熟练的使用`React Hooks`。目前的大部分Hooks知识点，文章都涉及到。我想想你学完并使用Hooks后，会颠覆你现在的`React`开发方式，并爱上它。",
        "addTime": "2019-12-05",
        "view_count": 23847,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/ReactHooks01.png\" alt=\"ReactHooks\"></p>\n<p>2019年React Hooks是React生态圈里边最火的新特性了。它改变了原始的React类的开发方式，改用了函数形式;它改变了复杂的状态操作形式，让程序员用起来更轻松;它改变了一个状态组件的复用性，让组件的复用性大大增加。如果你是React的粉丝者或者正在使用React开发项目，你可以用1个小时时间看一下这篇文章（视频），你一定会有所收获，并在工作种能熟练的使用<code>React Hooks</code>。目前的大部分Hooks知识点，文章都涉及到。我想想你学完并使用Hooks后，会颠覆你现在的<code>React</code>开发方式，并爱上它。</p>\n",
        "part_count": 11,
        "typeName": "视频教程"
    },
    {
        "id": 49,
        "title": " React Router 免费文字视频教程（共9集）",
        "introduce": "![React-Router](http://newimg.jspang.com/React_Router.png)\n\nReact Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。这是官方的解释，虽然足以解释`React Router`，但我觉的还不够重视这个插件。就目前我的工作经验所知，凡是React技术栈的项目（WEB和Native），都需要用到React Router。有了它你才可以构建复杂的应用程序，有了它才能使应用有层次感。如果没有React Router，我们智能用`switch...case`这样的语句，进行判断渲染，这非常的麻烦，而且不可用；但是有了React Router一切就变的简单了。\n",
        "addTime": "2019-12-05",
        "view_count": 8185,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/React_Router.png\" alt=\"React-Router\"></p>\n<p>React Router 是一个基于React之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与URL间的同步。这是官方的解释，虽然足以解释<code>React Router</code>，但我觉的还不够重视这个插件。就目前我的工作经验所知，凡是React技术栈的项目（WEB和Native），都需要用到React Router。有了它你才可以构建复杂的应用程序，有了它才能使应用有层次感。如果没有React Router，我们智能用<code>switch...case</code>这样的语句，进行判断渲染，这非常的麻烦，而且不可用；但是有了React Router一切就变的简单了。</p>\n",
        "part_count": 9,
        "typeName": "视频教程"
    },
    {
        "id": 48,
        "title": "Redux免费视频教程（共24集）",
        "introduce": "![Redux免费视频教程](http://newimg.jspang.com/Redux_index.png)\n\n通过React基础教程的学习，我相信你一定对React有了很好的了解，也可以制作出一些简单的React项目（注意我这里说的是简单的项目）。为什么你只能做出一些简单的项目那?因为React就是一个简单的轻量级的视图层框架。\n\nReact当中的组件通信和状态管理是特别繁琐的，比如子组件和父组件通信改变值，要通过父组件的方法。这就好比恋爱，要先认识女孩，再牵手，再接吻，最后你才能为所欲为。这种形式肯定不符合现在人的习惯，所以就有了很多快餐服务，通宵服务，极大的方便了现代人的需求。在开发中同样，公司最讲的就是效率，效率就需要把事情变简单，那只有React肯定不符合大型项目和快速开发。需要视图层框架+数据层框架，两个相互结合，就可以实现大型的开发项目了。\n\n`Redux`是目前React生态中，最好的数据层框架，所以单独拿出一个文章来系统的讲解Redux。\n\n博主才疏学浅，不保知识点无误，敬请指正，我也会小心求证，力保知识的正确。\n",
        "addTime": "2019-12-04",
        "view_count": 18730,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/Redux_index.png\" alt=\"Redux免费视频教程\"></p>\n<p>通过React基础教程的学习，我相信你一定对React有了很好的了解，也可以制作出一些简单的React项目（注意我这里说的是简单的项目）。为什么你只能做出一些简单的项目那?因为React就是一个简单的轻量级的视图层框架。</p>\n<p>React当中的组件通信和状态管理是特别繁琐的，比如子组件和父组件通信改变值，要通过父组件的方法。这就好比恋爱，要先认识女孩，再牵手，再接吻，最后你才能为所欲为。这种形式肯定不符合现在人的习惯，所以就有了很多快餐服务，通宵服务，极大的方便了现代人的需求。在开发中同样，公司最讲的就是效率，效率就需要把事情变简单，那只有React肯定不符合大型项目和快速开发。需要视图层框架+数据层框架，两个相互结合，就可以实现大型的开发项目了。</p>\n<p><code>Redux</code>是目前React生态中，最好的数据层框架，所以单独拿出一个文章来系统的讲解Redux。</p>\n<p>博主才疏学浅，不保知识点无误，敬请指正，我也会小心求证，力保知识的正确。</p>\n",
        "part_count": 24,
        "typeName": "视频教程"
    },
    {
        "id": 47,
        "title": "30元自制B站粉丝计数器",
        "introduce": "![B站粉丝计数器](http://newimg.jspang.com/bilibili_count.jpg)\n\n把视频放到BiliBili.com也有半年时间了，从开始以点也不懂B站，到现在喜欢上B站。好像找到了一个宅男的欢乐地，可以学习可以娱乐。自己也当上了UP主，开始关心自己的粉丝数。在咸鱼上搜索了一下，发现有卖B站粉丝计数器的，于是打算自己作一个。\n\n",
        "addTime": "2019-12-06",
        "view_count": 2411,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/bilibili_count.jpg\" alt=\"B站粉丝计数器\"></p>\n<p>把视频放到BiliBili.com也有半年时间了，从开始以点也不懂B站，到现在喜欢上B站。好像找到了一个宅男的欢乐地，可以学习可以娱乐。自己也当上了UP主，开始关心自己的粉丝数。在咸鱼上搜索了一下，发现有卖B站粉丝计数器的，于是打算自己作一个。</p>\n",
        "part_count": 1,
        "typeName": "视频教程"
    },
    {
        "id": 46,
        "title": "React16免费视频教程（共28集）",
        "introduce": "![React免费视频教程](http://newimg.jspang.com/react16_image.png)\n\n这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端**免费视频教程**，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。\n\n\n\n我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。\n\n已更新完成........附上文章视频列表。\n",
        "addTime": "2019-12-05",
        "view_count": 38366,
        "introduce_html": "<p><img src=\"http://newimg.jspang.com/react16_image.png\" alt=\"React免费视频教程\"></p>\n<p>这是一门免费课程，会详细讲解React的基础知识，React版本是16x，也是目前最新版本(我课程录制开始的日期是2019年5月4日)。今年的目标是录制100集前端<strong>免费视频教程</strong>，可能大部分都会在React框架上，毕竟它是现在最火的前端框架，也是前端必会的一个框架。</p>\n<p>我们采用最新的React16.8版本进行讲解，我相信很多人应该也会使用React，但是你可能学的并不是很系统，不妨跟着技术胖来一次详细的学习吧。</p>\n<p>已更新完成........附上文章视频列表。</p>\n",
        "part_count": 28,
        "typeName": "视频教程"
    },
    {
        "id": 45,
        "title": "20个Flutter实例视频教程  让你轻松上手工作",
        "introduce": "这篇文章是Flutter基础的一个进阶教程，主要讲解的是在工作中一些常用的功能。学完这篇文章和视频，你可以轻松制作出80%以上工作中常用的Flutter复杂效果，对Flutter有更深刻的了解。\n\n**本文是实战和基础的一个衔接总结。** 在学完基础后，很多小伙伴都急于上手一个实战项目，觉的做完实战项目就算学会了Flutter，达到了工作水平一样。其实在实战和基础之间还需要有一个过度，人们喜欢称之为进阶。那这篇文章或者说视频就是进阶教程，它会以小实例的方式进行讲解。实例也会达到20个以上，每个小实例就是一个小的实战。\n\n\n** 学习这篇文章最重要的是，你必须在看完视频后动手练习，否则很难学会。**",
        "addTime": "2019-12-04",
        "view_count": 10551,
        "introduce_html": "<p>这篇文章是Flutter基础的一个进阶教程，主要讲解的是在工作中一些常用的功能。学完这篇文章和视频，你可以轻松制作出80%以上工作中常用的Flutter复杂效果，对Flutter有更深刻的了解。</p>\n<p><strong>本文是实战和基础的一个衔接总结。</strong> 在学完基础后，很多小伙伴都急于上手一个实战项目，觉的做完实战项目就算学会了Flutter，达到了工作水平一样。其实在实战和基础之间还需要有一个过度，人们喜欢称之为进阶。那这篇文章或者说视频就是进阶教程，它会以小实例的方式进行讲解。实例也会达到20个以上，每个小实例就是一个小的实战。</p>\n<p>** 学习这篇文章最重要的是，你必须在看完视频后动手练习，否则很难学会。**</p>\n",
        "part_count": 20,
        "typeName": "视频教程"
    },
    {
        "id": 44,
        "title": " Flutter免费视频第四季-页面导航和其他",
        "introduce": "\n到目前为止，作一个页面已经没有什么问题了，接下来需要学习一下页面间的跳转，学会了这一季内容，就可以从一个单页面的应用制作一个项目了。\n\n不过提前跟小伙伴们说一下，其实这章也是有难度的，因为这跟前端的导航或者说超链接有所不同。如果你能有空杯心态，学习来会容易一点。\n\n不过你不要害怕，其实也不难，大不了多练习几遍，熟练一下就好。\n",
        "addTime": "2019-12-05",
        "view_count": 5521,
        "introduce_html": "<p>到目前为止，作一个页面已经没有什么问题了，接下来需要学习一下页面间的跳转，学会了这一季内容，就可以从一个单页面的应用制作一个项目了。</p>\n<p>不过提前跟小伙伴们说一下，其实这章也是有难度的，因为这跟前端的导航或者说超链接有所不同。如果你能有空杯心态，学习来会容易一点。</p>\n<p>不过你不要害怕，其实也不难，大不了多练习几遍，熟练一下就好。</p>\n",
        "part_count": 6,
        "typeName": "视频教程"
    },
    {
        "id": 43,
        "title": "Flutter免费视频第三季-布局",
        "introduce": "Flutter第二季学完，你已经可以作一些效果出来了。但是你想随心所欲的进行布局页面效果，还是感觉有些吃力，这个你不要担忧，这季教程学完你就可以精通Flutter的布局了，并且在对Flutter的了解上有更深层次的了解。\n\n这季里我我会讲解水平布局、垂直布局、GridView布局、ListView布局、Container布局......等多种布局形式。",
        "addTime": "2019-12-05",
        "view_count": 4195,
        "introduce_html": "<p>Flutter第二季学完，你已经可以作一些效果出来了。但是你想随心所欲的进行布局页面效果，还是感觉有些吃力，这个你不要担忧，这季教程学完你就可以精通Flutter的布局了，并且在对Flutter的了解上有更深层次的了解。</p>\n<p>这季里我我会讲解水平布局、垂直布局、GridView布局、ListView布局、Container布局......等多种布局形式。</p>\n",
        "part_count": 5,
        "typeName": "视频教程"
    },
    {
        "id": 42,
        "title": "Flutter免费视频第二季-常用组件",
        "introduce": "这一季将集中火力，死磕Flutter的API，也就是组件（widget）的使用，我们尽量把常用的都讲到，这也算学习中最辛苦的一章，因为你要记忆的内容会很多。但是学完后，会很有成就感。（但学习这一季，你必须先把第一季看了，否则没有开发环境是没办法继续学习的。）\n\n\n通过第一季的学习，你一定已经安装好了Flutter开发环境，这篇文章我们将讲解Flutter的基本组建，我会把最常用的属性都进行讲解，但并不一定完全，目的是使用最少的时间快速上手Flutter。\n",
        "addTime": "2019-12-05",
        "view_count": 7272,
        "introduce_html": "<p>这一季将集中火力，死磕Flutter的API，也就是组件（widget）的使用，我们尽量把常用的都讲到，这也算学习中最辛苦的一章，因为你要记忆的内容会很多。但是学完后，会很有成就感。（但学习这一季，你必须先把第一季看了，否则没有开发环境是没办法继续学习的。）</p>\n<p>通过第一季的学习，你一定已经安装好了Flutter开发环境，这篇文章我们将讲解Flutter的基本组建，我会把最常用的属性都进行讲解，但并不一定完全，目的是使用最少的时间快速上手Flutter。</p>\n",
        "part_count": 7,
        "typeName": "视频教程"
    },
    {
        "id": 41,
        "title": "Flutter免费视频第一季-环境搭建",
        "introduce": "Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。我们将在这里揭开他可爱而神奇的面纱。\n\n这个只是第一季，还会接着出，我争取从基础一直给大家讲到实战。每周更新三集。\n\n翻墙可以看一下Google的发布会介绍：[https://www.youtube.com/watch?v=RS36gBEp8OI](https://www.youtube.com/watch?v=RS36gBEp8OI)",
        "addTime": "2019-12-05",
        "view_count": 18172,
        "introduce_html": "<p>Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的。我们将在这里揭开他可爱而神奇的面纱。</p>\n<p>这个只是第一季，还会接着出，我争取从基础一直给大家讲到实战。每周更新三集。</p>\n<p>翻墙可以看一下Google的发布会介绍：<a href=\"https://www.youtube.com/watch?v=RS36gBEp8OI\">https://www.youtube.com/watch?v=RS36gBEp8OI</a></p>\n",
        "part_count": 6,
        "typeName": "视频教程"
    },
    {
        "id": 40,
        "title": "ES6免费视频教程 (共18集)",
        "introduce": "\n文章已经更新结束，共18集视频，2.5万字。建议每天学习1-2节视频，然后配合文字教程进行练习。\n\n文章首发：http://jspang.com\n\n非常高兴你能看到这篇文章，我是你的老朋友技术胖。在写Vue教程的时候，我发现群里的小伙伴大多数还在使用ES5来进行编写，使用ES5这无可厚非，因为ES5毕竟还是主流，速度也更快，但ES6引入的新特性是ES5无法比拟的，所以我鼓励前端小伙伴多使用ES6的语法，这也是我开这篇教程的初衷。我是一个前端工程师，接触IT这一行也有10年了，我会把我在前端这条路上碰到的沟沟坎坎都免费的分享给大家，我并不是什么讲师，至今还奋斗在程序第一线，所以视频是我利用业余时间录制。在视频的学习中如果你有任何疑问可以加QQ群(364140450)进行讨论。",
        "addTime": "2019-12-05",
        "view_count": 11534,
        "introduce_html": "<p>文章已经更新结束，共18集视频，2.5万字。建议每天学习1-2节视频，然后配合文字教程进行练习。</p>\n<p>文章首发：<a href=\"http://jspang.com\">http://jspang.com</a></p>\n<p>非常高兴你能看到这篇文章，我是你的老朋友技术胖。在写Vue教程的时候，我发现群里的小伙伴大多数还在使用ES5来进行编写，使用ES5这无可厚非，因为ES5毕竟还是主流，速度也更快，但ES6引入的新特性是ES5无法比拟的，所以我鼓励前端小伙伴多使用ES6的语法，这也是我开这篇教程的初衷。我是一个前端工程师，接触IT这一行也有10年了，我会把我在前端这条路上碰到的沟沟坎坎都免费的分享给大家，我并不是什么讲师，至今还奋斗在程序第一线，所以视频是我利用业余时间录制。在视频的学习中如果你有任何疑问可以加QQ群(364140450)进行讨论。</p>\n",
        "part_count": 18,
        "typeName": "视频教程"
    },
    {
        "id": 39,
        "title": "一个前端必会的 Nginx免费教程 (共11集)",
        "introduce": "\n由于前端技术的蓬勃发展和你自身的不断努力，很多小伙伴已经打通了任督二脉，做到了前后端通吃。你们就是自己程序世界里的神，在这里你们无所不能，创造世界，制定规则和逻辑。当一个属于你的世界做好后，你需要展示给朋友，发布于众人，让爱你的人欣赏。这时候我们需要一个强有力的服务器作为容器，而Nginx可以满足你的一切幻想。",
        "addTime": "2019-12-04",
        "view_count": 7418,
        "introduce_html": "<p>由于前端技术的蓬勃发展和你自身的不断努力，很多小伙伴已经打通了任督二脉，做到了前后端通吃。你们就是自己程序世界里的神，在这里你们无所不能，创造世界，制定规则和逻辑。当一个属于你的世界做好后，你需要展示给朋友，发布于众人，让爱你的人欣赏。这时候我们需要一个强有力的服务器作为容器，而Nginx可以满足你的一切幻想。</p>\n",
        "part_count": 11,
        "typeName": "视频教程"
    },
    {
        "id": 38,
        "title": "TypeScript免费视频教程 ，Deno前置知识 (共15集)",
        "introduce": "近日Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，可以认为它是下一代 Node，使用 Go 语言代替 C++ 重新编写跨平台底层内核驱动，上层仍然使用 V8 引擎，最终提供一个安全的 TypeScript 运行时。\n\n甚至Dahl在公开场合表示Node.js已经无力回天，Deno将是他的代替品。我相信前端小伙伴们一定都听说了这个消息。",
        "addTime": "2019-12-05",
        "view_count": 7795,
        "introduce_html": "<p>近日Node.js之父瑞安达尔（Ryan Dahl）发布新的开源项目 deno，从官方介绍来看，可以认为它是下一代 Node，使用 Go 语言代替 C++ 重新编写跨平台底层内核驱动，上层仍然使用 V8 引擎，最终提供一个安全的 TypeScript 运行时。</p>\n<p>甚至Dahl在公开场合表示Node.js已经无力回天，Deno将是他的代替品。我相信前端小伙伴们一定都听说了这个消息。</p>\n",
        "part_count": 15,
        "typeName": "视频教程"
    },
    {
        "id": 37,
        "title": "Nuxt.js免费视频教程 开启SSR渲染 ( 共10集)",
        "introduce": "Nuxt.js简单的说是Vue.js的通用框架，最常用的就是用来作SSR（服务器端渲染）。再直白点说，就是Vue.js原来是开发SPA（单页应用）的，但是随着技术的普及，很多人想用Vue开发多页应用，并在服务端完成渲染。这时候就出现了Nuxt.js这个框架，她简化了SSR的开发难度。还可以直接用命令把我们制作的vue项目生成为静态html。",
        "addTime": "2019-12-05",
        "view_count": 5465,
        "introduce_html": "<p>Nuxt.js简单的说是Vue.js的通用框架，最常用的就是用来作SSR（服务器端渲染）。再直白点说，就是Vue.js原来是开发SPA（单页应用）的，但是随着技术的普及，很多人想用Vue开发多页应用，并在服务端完成渲染。这时候就出现了Nuxt.js这个框架，她简化了SSR的开发难度。还可以直接用命令把我们制作的vue项目生成为静态html。</p>\n",
        "part_count": 10,
        "typeName": "视频教程"
    },
    {
        "id": 36,
        "title": "挑战全栈 MongoDB基础视频教程 (共21集)",
        "introduce": "\n上套课程讲了Koa2，挑战全栈就必须和数据库打交道，个人觉的作为一个前端开发人员，操作MongoDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句，而且里边的用法都是JSON对象的形式。所以我们在Koa2的课程中间查了MongoDB的课程，等会操作数据库后，我们再返回去学Koa2的数据库连接和操作，最后技术胖会带着大家作个小实战。",
        "addTime": "2019-12-05",
        "view_count": 3732,
        "introduce_html": "<p>上套课程讲了Koa2，挑战全栈就必须和数据库打交道，个人觉的作为一个前端开发人员，操作MongoDB还是比较惬意的。因为它是一种NoSql数据库，不用写SQL语句，而且里边的用法都是JSON对象的形式。所以我们在Koa2的课程中间查了MongoDB的课程，等会操作数据库后，我们再返回去学Koa2的数据库连接和操作，最后技术胖会带着大家作个小实战。</p>\n",
        "part_count": 21,
        "typeName": "视频教程"
    },
    {
        "id": 35,
        "title": "CocosCreator 从基础到实战免费视频",
        "introduce": "这是我以前录制的课程，当时也没有什么文字版，所以只有视频。这套视频是CocosCreator刚出的时候录制的，所以版本可能有些老，但是简单实用，几节课就可以让你入门CocosCreator，后边还带了一个实例《橡皮怪勇闯地下城》。\n\n希望可以帮助到想学游戏制作的小伙伴们。",
        "addTime": "2019-12-05",
        "view_count": 1256,
        "introduce_html": "<p>这是我以前录制的课程，当时也没有什么文字版，所以只有视频。这套视频是CocosCreator刚出的时候录制的，所以版本可能有些老，但是简单实用，几节课就可以让你入门CocosCreator，后边还带了一个实例《橡皮怪勇闯地下城》。</p>\n<p>希望可以帮助到想学游戏制作的小伙伴们。</p>\n",
        "part_count": 15,
        "typeName": "视频教程"
    },
    {
        "id": 34,
        "title": "挑战全栈 Koa2免费视频教程 (共13集)",
        "introduce": "Koa2是现在最流行的基于Node.js平台的web开发框架，它很小，但扩展性很强。Koa给人一种干净利落的感觉，体积小、编程方式干净。国内很多知名互联网公司都在使用，BAT（百度、阿里、腾讯）全部都在使用。",
        "addTime": "2019-12-05",
        "view_count": 6178,
        "introduce_html": "<p>Koa2是现在最流行的基于Node.js平台的web开发框架，它很小，但扩展性很强。Koa给人一种干净利落的感觉，体积小、编程方式干净。国内很多知名互联网公司都在使用，BAT（百度、阿里、腾讯）全部都在使用。</p>\n",
        "part_count": 13,
        "typeName": "视频教程"
    },
    {
        "id": 33,
        "title": "React项目构建和路由 免费视频教程 (共10集)",
        "introduce": "这套课程不是从零开始的，你需要React基础知识，在我的博客中是有写的，我会在前言最后给出链接。因为我还是一线奋战的程序员，也经常加班，所以更新不会很快，但只少会保证一周三集的更新，本教材包括视频都可以在我的博客（jspang.com）免费观看。",
        "addTime": "2019-12-05",
        "view_count": 2167,
        "introduce_html": "<p>这套课程不是从零开始的，你需要React基础知识，在我的博客中是有写的，我会在前言最后给出链接。因为我还是一线奋战的程序员，也经常加班，所以更新不会很快，但只少会保证一周三集的更新，本教材包括视频都可以在我的博客（jspang.com）免费观看。</p>\n",
        "part_count": 10,
        "typeName": "视频教程"
    },
    {
        "id": 32,
        "title": "Webpack3.X版 成神之路 (共24集)",
        "introduce": "本文首发：jspang.com，其他网站禁止转载。\n\n如果你webpack用的是4.x版本，此文章部分知识有所改动，所以学习时尽量使用3.x的版本。\n\n本文讲解的是Webpack3.0+的知识，努力做到全网最好的webpack3.0教程。文章通过一个半月的时间创作完成，共二十四小节，将近四万字，并根据文字教程录制了对应的视频教程（48元24节，350分钟视频讲解，保证你可以学会），当然你不需要看视频教程也能很快的学会webpack最新版的知识。\n\n如果你已经购买了视频教程，可以在视频的最后一节看到如何加入讨论微信群，技术胖会每周上线解答你学习中的困难。",
        "addTime": "2019-12-06",
        "view_count": 5297,
        "introduce_html": "<p>本文首发：jspang.com，其他网站禁止转载。</p>\n<p>如果你webpack用的是4.x版本，此文章部分知识有所改动，所以学习时尽量使用3.x的版本。</p>\n<p>本文讲解的是Webpack3.0+的知识，努力做到全网最好的webpack3.0教程。文章通过一个半月的时间创作完成，共二十四小节，将近四万字，并根据文字教程录制了对应的视频教程（48元24节，350分钟视频讲解，保证你可以学会），当然你不需要看视频教程也能很快的学会webpack最新版的知识。</p>\n<p>如果你已经购买了视频教程，可以在视频的最后一节看到如何加入讨论微信群，技术胖会每周上线解答你学习中的困难。</p>\n",
        "part_count": 24,
        "typeName": "视频教程"
    },
    {
        "id": 31,
        "title": "React免费视频教程-表单的应用 (共4集)",
        "introduce": "在前端与用户发生最多的交互行为都产生在表单里，在React中表单组件不同于其他组件，因为它们会缓存用户的录入信息和录入状态，由此也带来了React对表单处理的一些特殊性。你是不是经常会在学习或者React中对于使用表单有所疑惑，有很多小伙伴会陷入表单的坑中，并走不出来。技术胖专门写一篇文章来讲述React中表单的使用。\n\n在学习这节课之前，你必须学习我的上一套课程《React入门与组件》 。",
        "addTime": "2019-12-05",
        "view_count": 1456,
        "introduce_html": "<p>在前端与用户发生最多的交互行为都产生在表单里，在React中表单组件不同于其他组件，因为它们会缓存用户的录入信息和录入状态，由此也带来了React对表单处理的一些特殊性。你是不是经常会在学习或者React中对于使用表单有所疑惑，有很多小伙伴会陷入表单的坑中，并走不出来。技术胖专门写一篇文章来讲述React中表单的使用。</p>\n<p>在学习这节课之前，你必须学习我的上一套课程《React入门与组件》 。</p>\n",
        "part_count": 4,
        "typeName": "视频教程"
    },
    {
        "id": 30,
        "title": "React免费视频教程-入门和组件 (共11集)",
        "introduce": "\n这节课是通过微信群里的小伙伴投票的最终结果，这是一整套视频，包括React基础、React全家桶、React Native，都会讲到，但是会分开文章，这样大家可以更容易的查找。\n\n本文的基础视频是全部免费观看的，只要你登录jspang.com官方网站就可以免费观看视频，视频教程放在腾讯视频上，如果你想看离线版本（百度网盘）和小伙伴们一起交流React学习知识，可以进行打赏进微信群（打赏方法看网站右侧），群公告里有网盘地址。",
        "addTime": "2019-12-05",
        "view_count": 3888,
        "introduce_html": "<p>这节课是通过微信群里的小伙伴投票的最终结果，这是一整套视频，包括React基础、React全家桶、React Native，都会讲到，但是会分开文章，这样大家可以更容易的查找。</p>\n<p>本文的基础视频是全部免费观看的，只要你登录jspang.com官方网站就可以免费观看视频，视频教程放在腾讯视频上，如果你想看离线版本（百度网盘）和小伙伴们一起交流React学习知识，可以进行打赏进微信群（打赏方法看网站右侧），群公告里有网盘地址。</p>\n",
        "part_count": 11,
        "typeName": "视频教程"
    },
    {
        "id": 29,
        "title": "WEEX免费视频教程-从入门到放肆 (共17集)",
        "introduce": "WEEX是什么？\n\nWEEX的出现让我们可以使用Vue来进行移动端原生应用开发，是前端小伙伴们必备技能。\n\n\n与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。但实际上，应用的底层是 Objective-C 或 Java， 同时，Weex 提供很多 native 组件或模块供开发人员使用。也就是说，你会前端知识，想作真正的app，那你学习WEEX就对了。",
        "addTime": "2019-12-06",
        "view_count": 3378,
        "introduce_html": "<p>WEEX是什么？</p>\n<p>WEEX的出现让我们可以使用Vue来进行移动端原生应用开发，是前端小伙伴们必备技能。</p>\n<p>与 Web App、HTML5 App 或 hybrid App 不同，您可以使用 Weex 构建一个真正的原生应用。更贴心的是你的代码只需使用 HTML、CSS、JavaScript 可以构建原生应用，上手非常简单。但实际上，应用的底层是 Objective-C 或 Java， 同时，Weex 提供很多 native 组件或模块供开发人员使用。也就是说，你会前端知识，想作真正的app，那你学习WEEX就对了。</p>\n",
        "part_count": 17,
        "typeName": "视频教程"
    },
    {
        "id": 28,
        "title": "Vue实战视频-快餐店收银系统 (共11集)",
        "introduce": "这是我网站恢复后写的第一篇文章，在关站这段时间里，群里的小伙伴们给了我很多支持，没有你们的支持，很可能我就放弃写博客了，所以非常感谢你们的支持。",
        "addTime": "2019-12-04",
        "view_count": 13541,
        "introduce_html": "<p>这是我网站恢复后写的第一篇文章，在关站这段时间里，群里的小伙伴们给了我很多支持，没有你们的支持，很可能我就放弃写博客了，所以非常感谢你们的支持。</p>\n",
        "part_count": 11,
        "typeName": "视频教程"
    },
    {
        "id": 27,
        "title": "vuex免费视频教程",
        "introduce": "公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex。\nvuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据，所以尤大神给我们提供了vuex。",
        "addTime": "2019-12-06",
        "view_count": 7625,
        "introduce_html": "<p>公司项目中大量的使用了vue，感觉对vue知识的掌握也越来越熟练了，录制视频教程也让我受益匪浅，自己成长的同时，我更希望帮助其他前端小伙伴一起成长。这篇文章我们主要讲解vuex。\nvuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。比如：我们有几个页面要显示用户名称和用户等级，或者显示用户的地理位置。如果我们不把这些属性设置为状态，那每个页面遇到后，都会到服务器进行查找计算，返回后再显示。在中大型项目中会有很多共用的数据，所以尤大神给我们提供了vuex。</p>\n",
        "part_count": 6,
        "typeName": "视频教程"
    },
    {
        "id": 26,
        "title": "Vue-cli 免费视频教程",
        "introduce": "\nVue-cli是vue官方出品的快速构建单页应用的脚手架，如果你是初次尝试Vue，我不建议使用，推荐你老老实实用普通引入javascript文件的方式进行学习（你可以去看我的vue视频教程的1-4季），这里牵扯的东西很多，有webpack，npm，nodejs，babel等等，很容易产生从入门就放弃的思想。",
        "addTime": "2019-12-05",
        "view_count": 7088,
        "introduce_html": "<p>Vue-cli是vue官方出品的快速构建单页应用的脚手架，如果你是初次尝试Vue，我不建议使用，推荐你老老实实用普通引入javascript文件的方式进行学习（你可以去看我的vue视频教程的1-4季），这里牵扯的东西很多，有webpack，npm，nodejs，babel等等，很容易产生从入门就放弃的思想。</p>\n",
        "part_count": 3,
        "typeName": "视频教程"
    },
    {
        "id": 25,
        "title": "Vue-router免费视频教程",
        "introduce": "简介：\n由于Vue在开发时对路由支持的不足，后来官方补充了`vue-router`插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作`vue-router`。要学习`vue-router`就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，`vue-router`就是我们WebApp的链接路径管理系统。",
        "addTime": "2019-12-06",
        "view_count": 7625,
        "introduce_html": "<p>简介：\n由于Vue在开发时对路由支持的不足，后来官方补充了<code>vue-router</code>插件，它在Vue的生态环境中非常重要，在实际开发中只要编写一个页面就会操作<code>vue-router</code>。要学习<code>vue-router</code>就要先知道这里的路由是什么？这里的路由并不是指我们平时所说的硬件路由器，这里的路由就是SPA（单页应用）的路径管理器。再通俗的说，<code>vue-router</code>就是我们WebApp的链接路径管理系统。</p>\n",
        "part_count": 11,
        "typeName": "视频教程"
    },
    {
        "id": 24,
        "title": "【第四季】Vue2.0视频教程-实例和内置组件（共4集）",
        "introduce": "概述：实例就是在构造器外部操作构造器内部的属性选项或者方法，就叫做实例？实例的作用就是给原生的或者其他javascript框架一个融合的接口或者说是机会，让Vue和其他框架一起使用。",
        "addTime": "2019-12-05",
        "view_count": 4114,
        "introduce_html": "<p>概述：实例就是在构造器外部操作构造器内部的属性选项或者方法，就叫做实例？实例的作用就是给原生的或者其他javascript框架一个融合的接口或者说是机会，让Vue和其他框架一起使用。</p>\n",
        "part_count": 4,
        "typeName": "视频教程"
    },
    {
        "id": 23,
        "title": "【第三季】Vue2.0视频教程-选项（共6集）",
        "introduce": "前言：Vue2.0视频教程已经出了两季，这些都是基础，为的就是能让新手快速进入。这一季讲的是基础中的选项，选项就是在Vue构造器里的配置功能的前缀（Vue已经给我们定义好了），Vue有很多选项，我们将在这一级教程中一一介绍。",
        "addTime": "2019-12-05",
        "view_count": 4824,
        "introduce_html": "<p>前言：Vue2.0视频教程已经出了两季，这些都是基础，为的就是能让新手快速进入。这一季讲的是基础中的选项，选项就是在Vue构造器里的配置功能的前缀（Vue已经给我们定义好了），Vue有很多选项，我们将在这一级教程中一一介绍。</p>\n",
        "part_count": 6,
        "typeName": "视频教程"
    },
    {
        "id": 22,
        "title": "【第二季】Vue2.0视频教程-全局API(共9集)",
        "introduce": "我们在第一季中学习了Vue的内部指令，在你掌握了第一季内容后，你可以学习本教程，第二季的教程会比第一季要难一些，组件的编写。",
        "addTime": "2019-12-05",
        "view_count": 29087,
        "introduce_html": "<p>我们在第一季中学习了Vue的内部指令，在你掌握了第一季内容后，你可以学习本教程，第二季的教程会比第一季要难一些，组件的编写。</p>\n",
        "part_count": 9,
        "typeName": "视频教程"
    },
    {
        "id": 21,
        "title": "【第一季】Vue2.0视频教程-内部指令(共8集)",
        "introduce": "很高兴你能来学习这套Vue2.0视频课程，现在越来越多的小公司开始使用Vue来作为前端开发框架了，而且Vue的生态也越来越好，无论你是前端的老手还是新手，都有必要认真并系统的学习，有可能的话尽量在工作中使用它了。",
        "addTime": "2019-12-06",
        "view_count": 12782,
        "introduce_html": "<p>很高兴你能来学习这套Vue2.0视频课程，现在越来越多的小公司开始使用Vue来作为前端开发框架了，而且Vue的生态也越来越好，无论你是前端的老手还是新手，都有必要认真并系统的学习，有可能的话尽量在工作中使用它了。</p>\n",
        "part_count": 8,
        "typeName": "视频教程"
    },
    {
        "id": 20,
        "title": "Fabric.js 免费视频教程（共13集）",
        "introduce": "Fabric.js在我们这里（天朝）使用的并不是很多，但是这并不能掩盖它的优点，正所谓：大米饭永远盖不住四喜丸子。我在网上搜了很多Fabric的文章，多是英文的，几乎没什么中文的介绍和教程。由于英文的原因增加了小伙伴们的学习梯度，那我就把我对Fabric.js所掌握的知识和了解的东西，写成文章，做成视频，希望可以帮助更多的小伙伴进行学习。\n\n这套教程每一节都会有文字版和视频版，如果你在工作时不方便观看视频教程，您可以阅读文字版的教程。\n\n最近GitHub被墙，所以提供国内的coding作为源码仓库。\n\n源码：https://coding.net/u/shenghongyu/p/fabric.js-Demo/git\n",
        "addTime": "2019-12-05",
        "view_count": 1932,
        "introduce_html": "<p>Fabric.js在我们这里（天朝）使用的并不是很多，但是这并不能掩盖它的优点，正所谓：大米饭永远盖不住四喜丸子。我在网上搜了很多Fabric的文章，多是英文的，几乎没什么中文的介绍和教程。由于英文的原因增加了小伙伴们的学习梯度，那我就把我对Fabric.js所掌握的知识和了解的东西，写成文章，做成视频，希望可以帮助更多的小伙伴进行学习。</p>\n<p>这套教程每一节都会有文字版和视频版，如果你在工作时不方便观看视频教程，您可以阅读文字版的教程。</p>\n<p>最近GitHub被墙，所以提供国内的coding作为源码仓库。</p>\n<p>源码：<a href=\"https://coding.net/u/shenghongyu/p/fabric.js-Demo/git\">https://coding.net/u/shenghongyu/p/fabric.js-Demo/git</a></p>\n",
        "part_count": 13,
        "typeName": "视频教程"
    },
    {
        "id": 19,
        "title": "技术胖CSS3免费视频教程(共31集)",
        "introduce": "这是我早期一个作品，当时录制在百度传课上售卖，既然作了免费的了。所以我觉的我应该把这个视频也放出来 ，里边的Panda就是我，后来发现网上叫Panda的老师太多了，就该了现在的名字。\n\n这套视频质量还是很高的，一共有31集，500多分钟的视频，而且知识并不过时，所以希望可以帮到你学习。",
        "addTime": "2019-12-05",
        "view_count": 4907,
        "introduce_html": "<p>这是我早期一个作品，当时录制在百度传课上售卖，既然作了免费的了。所以我觉的我应该把这个视频也放出来 ，里边的Panda就是我，后来发现网上叫Panda的老师太多了，就该了现在的名字。</p>\n<p>这套视频质量还是很高的，一共有31集，500多分钟的视频，而且知识并不过时，所以希望可以帮到你学习。</p>\n",
        "part_count": 31,
        "typeName": "视频教程"
    }
])
  return(
    <>
        <Head>
            <title>Home</title>
        </Head>
        <Header></Header>
        <Row className='main' align='top' justify='center'>
            <Col xs={24} sm={24} md={16} lg={18} xl={14} className='main-left'>
                <Breadcrumb></Breadcrumb>
                <List dataSource={dataSource}  className='comm-block'
                    itemLayout='vertical'
                    renderItem={item => (
                        <List.Item >
                            <div className='article-title'>
                                <h3>{item.title}</h3>
                            </div>
                            <div className="article-info">
                                <Tag color='volcano'>共{item.part_count}集</Tag>
                                <span className='date'>
                                    <CalendarOutlined />
                                    {item.addTime}
                                </span>
                                <span className='type'>
                                    <PlaySquareOutlined />
                                    {item.typeName}
                                </span>
                                <span className="views">
                                    <FireOutlined />
                                    {item.view_count}人
                                </span>
                            </div>
                            <div className="article-content">
                                <div dangerouslySetInnerHTML={{ __html: item.introduce_html }}></div>
                            </div>
                        </List.Item>
                    )}
                >
                </List>
                <Footer />
            </Col>
            <Col xs={0} sm={0} md={7} lg={5} xl={5} className='main-right'>
                <Avatar></Avatar>
                <Popular></Popular>
                <Advert></Advert>
            </Col>
        </Row>
    </>
  )
}

export default Home