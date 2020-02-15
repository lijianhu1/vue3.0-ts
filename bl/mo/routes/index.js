const express = require('express');
const config = require('../include/config');
const apiServe = require('./ApiServe');

const router = express.Router();
const subNavList = {
  about:[{
    name:'关于宝乐',
    link:'/about'
  },{
    name:'企业文化',
    link:'/about/culture'
  },{
    name:'新闻动态',
    link:'/about/news'
  },{
    name:'企业荣誉',
    link:'/about/honor'
  }],
  skill:[{
    name:'技术研发',
    link:'/skill_research'
  },{
    name:'质量管理与测试',
    link:'/skill_quality'
  },{
    name:'生产基地',
    link:'/skill_place'
  },],
  contact:[{
    name:'加入宝乐',
    link:'/contact_join'
  },{
    name:'商务合作',
    link:'/contact_business'
  },{
    name:'成为体验官',
    link:'/contact_experience'
  },]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect(config.redirect.mobi[config.area]);
});
/* GET home page. */
router.get('/index', function(req, res, next) {
  const render=(data)=>{
    // console.log(data.banner)
    res.render('index',{
      title: '宝乐-宝乐机器人官网-激光型扫地机器人-扫地机器人-智能规划扫地机-全自动智能吸尘器-全景机器人-擦窗机-智能擦窗机' ,
      Description: '广东宝乐创建于2004年，以清洁服务机器人为主营业务，产品已覆盖家用扫地机器人、商用扫地机器人、擦窗机器人等，产品出口至全球40多个国家，ODM全球出口销量稳居前列。总部位于深圳市，在深圳、广州均设有生产基地，占地面积约50000平方米，是一家集研发、生产、销售于一体的国家高新技术企业。' ,
      keywords: '宝乐官网，宝乐，激光型扫地机器人，智能规划扫地机，宝乐机器人，视觉机器人，视觉导航扫地机，扫地机器人，智能扫地机器人，家用扫地机，规划型扫地机，擦窗机器人。',
      nodeData: data
    });
  }
  // apiServe().newsDetail(req.query)
  // apiServe().newsList(req.query)
  // apiServe().newsSticky(req.query)

  apiServe().indexData(req.query)
    .then((data)=>{
      render(data);
    })
    .catch(e=>{
      console.log(e)
      render(null);
    })
});





/* 技术研发--技术研发 */
router.get('/skill_research', function(req, res, next) {
  res.render('skill_research', {
    title: '品牌实力-研发实力-核心技术-宝乐官方网站' ,
    Description: '宝乐拥有国内领先的技术研发团队，累计共申请300余项国内外专利，目前已获得120项授权专利，授权专利遍布全球，包括美国、欧盟、中国以及中国台湾地区。' ,
    keywords: '宝乐官方网站，宝乐扫地机，宝乐研发，专利技术，宝乐技术实力。',
    subNavList:subNavList.skill,  // 子菜单列表
    subNavName:'技术研发',    // 子菜单显示文案
    subNavBannerClass:'banner-research', // 子菜单banner类，用于更新背景
  });
});

/* 技术研发--质量管理与测试 */
router.get('/skill_quality', function(req, res, next) {
  res.render('skill_quality', {
    title: '质量管理-宝乐机器人-宝乐官方网站' ,
    Description: '采用汽车行业通用的“APQP”工具管控研发项目，识别项目风险、监控项目目标、时间、成本，区分市场调查、设计开发、供应链、工业化四个维度推动项目落地，DQE专职负责项目质量控制，运用FMEA等工具控制项目风险，保障项目质量达到预期目的。' ,
    keywords: '宝乐质量管理，APQP流程，产品质量管控',
    subNavList:subNavList.skill,  // 子菜单列表
    subNavName:'质量管理与测试',    // 子菜单显示文案
    subNavBannerClass:'banner-quality', // 子菜单banner类，用于更新背景
  });
});

/* 技术研发--生产基地 */
router.get('/skill_place', function(req, res, next) {
  res.render('skill_place', {
    title: '生产基地-宝乐机器人-宝乐官方网站' ,
    Description: '广东宝乐机器人生产基地、产业园区等。' ,
    keywords: '宝乐生产基地，宝乐产业园区，工业园',
    subNavList:subNavList.skill,  // 子菜单列表
    subNavName:'生产基地',    // 子菜单显示文案
    subNavBannerClass:'banner-place', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--加入宝乐 */
router.get('/contact_join', function(req, res, next) {
  res.render('contact_join', {
    title: '加入我们-广东宝乐机器人-宝乐官方网站' ,
    Description: '宝乐职位招聘信息。' ,
    keywords: '加入宝乐、宝乐招聘、岗位职责',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'加入宝乐',    // 子菜单显示文案
    subNavBannerClass:'banner-join', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--社会&校园招聘 */
router.get('/contact_recruit', function(req, res, next) {
  res.render('contact_recruit', {
    title: '加入我们-广东宝乐机器人-宝乐官方网站' ,
    Description: '宝乐职位招聘信息' ,
    keywords: '加入宝乐、宝乐招聘、岗位职责。',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'加入宝乐',    // 子菜单显示文案
    subNavBannerClass:'banner-join', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--商务合作 */
router.get('/contact_business', function(req, res, next) {
  res.render('contact_business', {
    title: '商务合作--广东宝乐机器人商务合作-联系电话-地址' ,
    Description: '总部地址：中国广东省深圳市宝安区沙井东环路438号工业园D座二、三层' ,
    keywords: '商务合作',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'商务合作',    // 子菜单显示文案
    subNavBannerClass:'banner-business', // 子菜单banner类，用于更新背景
  });
});

/* 联系我们--成为体验官 */
router.get('/contact_experience', function(req, res, next) {
  res.render('contact_experience', {
    title: '全球体验官--广东宝乐机器人-宝乐官方网站' ,
    Description: '宝乐全球体验官项目介绍，产品体验官全球招募中。' ,
    keywords: '宝乐合作，全球体验官，宝乐产品体验。',
    subNavList:subNavList.contact,  // 子菜单列表
    subNavName:'成为体验官',    // 子菜单显示文案
    subNavBannerClass:'banner-experience', // 子菜单banner类，用于更新背景
  });
});

/* GET 头部导航 page. */
router.get('/menuIndex', function(req, res, next) {
  res.render('menuIndex', {
    title: '导航' ,
    Description: '导航' ,
    keywords: '导航'
  });
});

/* GET 头部导航 page. */
router.get('/bannerDetail', function(req, res, next) {
  res.render('bannerDetail', {
    title: 'bannerDetail' ,
    Description: 'bannerDetail' ,
    keywords: 'bannerDetail'
  });
});

/*产品列表*/
router.get('/product', function(req, res, next) {
  res.render('product', {
    title: '产品布局-宝乐扫地机-广东宝乐机器人股份有限公司-宝乐官网' ,
    Description: '经过十余年高速发展，已成为以清洁服务机器人为主营业务，产品已覆盖家用扫地机器人、商用扫地机器人、擦窗机器人等，产品出口至全球40多个国家，ODM全球出口销量稳居前列' ,
    keywords: '宝乐产品，ODM扫地机，宝乐机器人，激光型智能扫地机，智能规划扫地机，扫地机器人，智能扫地机器人，家用扫地机，擦窗机器人。'
  });
});
/*产品详情*/
router.get('/product/detail', function(req, res, next) {
  res.render('product_detail', {
    title: `${req.query.id}-产品布局-宝乐扫地机-广东宝乐机器人股份有限公司-宝乐官网` ,
    Description: '经过十余年高速发展，已成为以清洁服务机器人为主营业务，产品已覆盖家用扫地机器人、商用扫地机器人、擦窗机器人等，产品出口至全球40多个国家，ODM全球出口销量稳居前列' ,
    keywords: `${req.query.id},宝乐产品，ODM扫地机，宝乐机器人，激光型智能扫地机，智能规划扫地机，扫地机器人，智能扫地机器人，家用扫地机，擦窗机器人。`
  });
});
/*关于宝乐*/
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: '关于宝乐-企业介绍-宝乐简介-宝乐机器人官网' ,
    Description: '广东宝乐创建于2004年，拥有员工超过1200人，占地面积约50000平方米，是一家集研发、生产、销售于一体的国家高新技术企业。科语拥有300多技术专利以及IEC62929标准实验室等扫地机核心科技。完整的生态产业链、强大的产品研发、设计以及制造能力、专业的软件技术支撑让宝乐更加专业，公司于2018年实现营收6亿元，同比增长71%。' ,
    keywords: '宝乐，宝乐官网，关于宝乐，宝乐简介，宝乐介绍，宝乐品牌。',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'关于宝乐',    // 子菜单显示文案
    subNavBannerClass:'banner-about', // 子菜单banner类，用于更新背景
  });
});
// 宝乐文化
router.get('/about/culture', function(req, res, next) {
  res.render('about_culture', {
    title: '企业理念-企业文化-广东宝乐机器人官网' ,
    Description: '宝乐以扫地机器人作为行业入口和支点，坚定地走“从家庭到商用、从室内到室外、从低速到高速、从高频到低频”逐步演进的战略路线，不断创造智能生活新方式，最终成为智能生活方式的引领者。' ,
    keywords: '关于宝乐，宝乐文化，企业理念，宝乐品牌，宝乐愿景',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'企业文化',    // 子菜单显示文案
    subNavBannerClass:'banner-culture', // 子菜单banner类，用于更新背景
  });
});
// 新闻动态
router.get('/about/news', function(req, res, next) {
  res.render('about_news', {
    title: '新闻动态-宝乐机器人-宝乐官网' ,
    Description: '广东宝乐机器人最新的业界新闻、企业宣传等。' ,
    keywords: '宝乐新闻动态，宝乐企业资讯，宝乐资讯速递，宝乐新闻，宝乐品牌宣传',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'新闻动态',    // 子菜单显示文案
    subNavBannerClass:'banner-news', // 子菜单banner类，用于更新背景
  });
});
// 新闻详情
router.get('/about/newsDetail/:id', function(req, res, next) {
  const render=(data)=>{
    res.render('about_newsDetail', {
      nodeData: data ,
      title: `${data.data.title}-新闻动态-宝乐机器人-宝乐官网` ,
      Description: '广东宝乐机器人最新的业界新闻、企业宣传等。' ,
      keywords: '宝乐新闻动态，宝乐企业资讯，宝乐资讯速递，宝乐新闻，宝乐品牌宣传',
      subNavList:subNavList.about,  // 子菜单列表
      subNavName:'新闻动态',    // 子菜单显示文案
      subNavBannerClass:'banner-news', // 子菜单banner类，用于更新背景
    });
  }
  console.log(req.params.id)
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
  res.render('about_honor', {
    title: '企业荣誉-关于宝乐-广东宝乐机器人官网' ,
    Description: '宝乐荣获国内外多项认证及产品设计奖项，已认证为中国国家高新技术企业。' ,
    keywords: '宝乐奖项，企业荣誉，企业认证证书',
    subNavList:subNavList.about,  // 子菜单列表
    subNavName:'企业荣誉',    // 子菜单显示文案
    subNavBannerClass:'banner-honor', // 子菜单banner类，用于更新背景
  });
});// 隐私政策
router.get('/privacy', function(req, res, next) {
  res.render('privacy', {
    title: '隐私政策--广东宝乐机器人官网' ,
    Description: '宝乐官网隐私政策，法律声明，提示条款' ,
    keywords: '宝乐官网隐私政策，法律声明，提示条款',
  });
});
module.exports = router;
