var express = require('express');
var router = express.Router();
const apiServe = require('./ApiServe');
const subNavList = {
  about:[{
    name:'About Bona',
    link:'/en/about'
  },{
    name:'Company Culture',
    link:'/en/about/culture'
  },{
    name:'News Center',
    link:'/en/about/news'
  },{
    name:'Honor',
    link:'/en/about/honor'
  }],
  skill:[{
    name:'Core Technology',
    link:'/en/skill_research'
  },{
    name:'Quality Management And Test',
    link:'/en/skill_quality'
  },{
    name:'Production Base',
    link:'/en/skill_place'
  },],
  contact:[{
    name:'Join Bona',
    link:'/en/contact_join'
  },{
    name:'Business Cooperation',
    link:'/en/contact_business'
  },{
    name:'Become A Global Field-Test User',
    link:'/en/contact_experience'
  },]
};

/* GET home page. */
router.get('/index', function(req, res, next) {
  const render=(data)=>{
    res.render('en/index', {
      title: 'BONA Robot Official Website-laser robot vacuum cleaner-robot vacuum cleaner-Intelligent planning robot cleaner-Automatic Intelligent robot cleaner-Panoramic robot cleaner-window cleaning robot-robot window cleaner-smart window cleaner' ,
      Description: 'Founded in 2004, BONA Robot focuses on cleaning service robots including robot vacuum cleaner, commercial robot vacuum cleaner, robot window cleaner, etc., and exports to 40+ countries worldwide, leading sales among all ODM manufacturers. BONA is a national high-tech enterprise with integrated R&D, manufacturer&sales, and based on lands of 50,000sm at its Shenzhen headquarter as well as Guangzhou production base.' ,
      keywords: 'BONA Robot Official Website-BONA robot--robot vacuum cleaner with AI-robot vacuum cleaner-Intelligent scheduling robot cleaner-Automatic Intelligent robot cleaner-Panoramic robot cleaner-window cleaning robots',
      nodeData: data
    });
  };
  apiServe().indexData({lang:'en'})
    .then((data)=>{
      render(data);
    })
    .catch(e=>{
      console.log(e)
      render(null);
    })
});




/*关于宝乐*/
router.get('/about', function(req, res, next) {
  res.render('en/about', {
    title: 'BONA Robot-Enterprise Introduction-BONA Robot Official Website' ,
    Description: 'Founded in 2004, BONA Robot is a national high-tech enterprise with integrated R&D, manufacture & sales, and based on an area of 50,000sm with the headquarter in Shenzhen, China.Over 300 technical patents and IEC62929 standard laboratory sweeper core technology .The complete ecological industrial chain, strong product r&d and design, and professional software technology support of manufacturing capacity lead BONA achieved revenue of 600 million RMB  in 2018,  Click on the official website to learn more' ,
    keywords: 'BONA Robot-BONA Company Profile-BONA Brand-BONA News',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'About Bona',    // 子菜单显示文案
    subNavBannerClass:'banner-about', // 子菜单banner类，用于更新背景
  });
});
// 宝乐文化
router.get('/about/culture', function(req, res, next) {
  res.render('en/about_culture', {
    title: 'Enterprise Concept-Enterprise Culture-Guangdong BONA Robot CO,LTD Official Website' ,
    Description: 'With robot vacuum cleaner as the entrance and fulcrum of the industry, BONA firmly takes the strategic route of gradual evolution of "from home to business, from indoor to outdoor, from low speed to high speed and from high frequency to low frequency", creating new ways and be a leader of intelligent lifestyle.' ,
    keywords: 'BONA Robot,Enterprise Culture,Enterprise Concept,BONA Brand,BONA Ambition',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'Company Culture',    // 子菜单显示文案
    subNavBannerClass:'banner-culture', // 子菜单banner类，用于更新背景
  });
});
// 新闻动态
router.get('/about/news', function(req, res, next) {
  res.render('en/about_news', {
    title: 'BONA News-BONA Robot-BONA Official Website' ,
    Description: 'Guangdong BONA Robot Co, LTD latest industry news- Enterprise propaganda',
    keywords: 'BONA News, Enterprise information',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'News Center',    // 子菜单显示文案
    subNavBannerClass:'banner-news', // 子菜单banner类，用于更新背景
  });
});
// 新闻详情
router.get('/about/newsDetail/:id', function(req, res, next) {
  const render=(data)=>{
      res.render('en/about_newsDetail', {
        nodeData: data,
        title: 'BONA News-BONA Robot-BONA Official Website' ,
        Description: 'Guangdong BONA Robot Co, LTD latest industry news- Enterprise propaganda' ,
        keywords: 'BONA News, Enterprise information',
        subNavList:subNavList.about,  // 子菜单列表
        subNavName:'News Center',    // 子菜单显示文案
        subNavBannerClass:'banner-news', // 子菜单banner类，用于更新背景
      });
  };
  apiServe().newsDetail(req.params)
    .then(result=>{
      render(result)
    })
    .catch(e=>{
      render(null)
    })
});
// 宝乐荣誉
router.get('/about/honor', function(req, res, next) {
  res.render('en/about_honor', {
    title: 'Enterprise Honor -BONA Robot-Guangdong BONA Robot Co., Ltd Official Website' ,
    Description: 'As a national high-tech enterprise in China, BONA has won many certification and product design awards at home and abroad.' ,
    keywords: 'BONA Award-EnterPrise Honor-Enterprise Certification Certificate',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'Honor',    // 子菜单显示文案
    subNavBannerClass:'banner-honor', // 子菜单banner类，用于更新背景
  });
});

/* 技术研发--技术研发 */
router.get('/skill_research', function(req, res, next) {
  res.render('en/skill_research', {
    title: 'Brand Power-R&D Power -Core Power-BONA Official Website' ,
    Description: 'BONA has a leading R&D team,120+patents and 300+patents worldwide under application' ,
    keywords: 'BONA Official Website-Robot Vacuum Cleaner-BONA R&D-Patents-BONA technology',
    subNavList:subNavList.skill,  // 子菜单列表
    subNavName:'Core Technology',    // 子菜单显示文案
    subNavBannerClass:'banner-research', // 子菜单banner类，用于更新背景
  });
});

/* 技术研发--质量管理与测试 */
router.get('/skill_quality', function(req, res, next) {
  res.render('en/skill_quality', {
    title: 'Quality Control-BONA Robot-BONA Official Website' ,
    Description: "'APQP' tools control R&D projects, identify the project risk, monitoring projects, goals, time, cost, and to distinguish the market investigation, design, development, supply chain, four dimensions of industrialization promotion project, DQE responsible for project quality control, using FMEA tools control project risk, ensure project quality to achieve the intended purpose." ,
    keywords: 'BONA Quality Control-APQP Procedure-Product Quality Control',
    subNavList:subNavList.skill,  // 子菜单列表
    subNavName:'Quality Management And Test',    // 子菜单显示文案
    subNavBannerClass:'banner-quality', // 子菜单banner类，用于更新背景
  });
});

/* 技术研发--生产基地 */
router.get('/skill_place', function(req, res, next) {
  res.render('en/skill_place', {
    title: 'Production Base- BONA Industrial Park- Industrial Park' ,
    Description: 'Guangdong BONA Robot Co,LTD Production Base-Industrial Park' ,
    keywords: 'BONA Production Base- BONA Industrial Park- Industrial Park',
    subNavList:subNavList.skill,  // 子菜单列表
    subNavName:'Production Base',    // 子菜单显示文案
    subNavBannerClass:'banner-place', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--加入宝乐 */
router.get('/contact_join', function(req, res, next) {
  res.render('en/contact_join', {
    title: 'Join Us-Guangdong BONA Robot Co., Ltd.-BONA Robot Official Website' ,
    Description: 'Position  Information' ,
    keywords: 'Join BONA-Application-Position Responsibility',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'Join Bona',    // 子菜单显示文案
    subNavBannerClass:'banner-join', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--社会&校园招聘 */
router.get('/contact_recruit', function(req, res, next) {
  res.render('en/contact_recruit', {
    title: 'Join Us-Guangdong BONA Robot Co., Ltd.-BONA Robot Official Website' ,
    Description: 'Position  Information' ,
    keywords: 'Join BONA-Application-Position Responsibility',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'Join Bona',    // 子菜单显示文案
    subNavBannerClass:'banner-join', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--商务合作 */
router.get('/contact_business', function(req, res, next) {
  res.render('en/contact_business', {
    title: 'Business cooperation-Business with us -Telephone-Address' ,
    Description: 'Business Cooperation, bona address, bona phone no, bona Email,BONA Headquarter' ,
    keywords: 'Business Cooperation, bona address, bona phone no, bona Email,BONA Headquarter',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'Business Cooperation',    // 子菜单显示文案
    subNavBannerClass:'banner-business', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--成为体验官 */
router.get('/contact_experience', function(req, res, next) {
  res.render('en/contact_experience', {
    title: 'Global experience Officer-Guangdong BONA Robot CO.LTD-BONA official website' ,
    Description: 'BONA global experience officer project introduction,  Product experience officer global recruitment' ,
    keywords: 'BONA cooperation-Global experience officer-Productsexperience of BONA',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'Become A Global Field-Test User',    // 子菜单显示文案
    subNavBannerClass:'banner-experience', // 子菜单banner类，用于更新背景
  });
});

/*产品列表*/
router.get('/product', function(req, res, next) {
  res.render('en/product', {
    title: 'Product distribution-Robot vacuum cleaner-Guangdong BONA Robot Co., Ltd.-BONA Robot Official Website',
    Description: 'After more than a decade of rapid development, BONA has come to focus on cleaning service robots including robot vacuum cleaner, commercial robot vacuum cleaner, robot window cleaner, etc., and export to 40+ countries worldwide, leading sales among all ODM manufacturers.',
    keywords: 'BONA Products-Robot vacuum cleaner-ODM Robot vacuum cleaner--robot vacuum cleaner-Intelligent scheduling robot cleaner-Automatic Intelligent robot cleaner-Panoramic robot cleaner-window cleaning robots'
  });
});
/*产品详情*/
router.get('/product/detail', function(req, res, next) {
  res.render('en/product_detail', {
    title: 'Product distribution-Robot vacuum cleaner-Guangdong BONA Robot Co., Ltd.-BONA Robot Official Website' ,
    Description: 'After more than a decade of rapid development, BONA has come to focus on cleaning service robots including robot vacuum cleaner, commercial robot vacuum cleaner, robot window cleaner, etc., and export to 40+ countries worldwide, leading sales among all ODM manufacturers.' ,
    keywords: 'BONA Products-Robot vacuum cleaner-ODM Robot vacuum cleaner--robot vacuum cleaner-Intelligent scheduling robot cleaner-Automatic Intelligent robot cleaner-Panoramic robot cleaner-window cleaning robots'
  });
});
router.get('/privacy', function(req, res, next) {
  res.render('en/privacy', {
    title: 'Privacy Policy-Guangdong BONA Robot CO,LTD Official Website',
    Description: 'Privacy Policy of BONA ,Legal Declaration,Prompt clause',
    keywords: 'Privacy Policy of BONA ,Legal Declaration,Prompt clause',
  });
});
module.exports = router;
