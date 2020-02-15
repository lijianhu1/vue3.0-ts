/*jshint esversion: 6 */
$(function () {
  const data = {
    social: {
      banner: "./static/img/contact-banner4.png",
      positionList: [{
        name: "VSLAM算法工程师",
        city: "深圳",
        salary: '面议',
      }, {
        name: "激光雷达算法工程师",
        city: "深圳/番禺",
        salary: '面议',
      }, {
        name: "激光雷达高级电子工程师",
        city: "深圳",
        salary: '面议',
      }, {
        name: "嵌入式软件工程师",
        city: "深圳",
        salary: '面议',
      }, {
        name: "slam算法工程师",
        city: "番禺",
        salary: '面议',
      }, {
        name: "IOT架构师（java方向）",
        city: "番禺",
        salary: '面议',
      }, {
        name: "电商店长",
        city: "深圳/番禺",
        salary: '面议',
      }, {
        name: "电商运营",
        city: "深圳",
        salary: '面议',
      }, {
        name: "java开发工程师",
        city: "番禺",
        salary: '面议',
      }, {
        name: "高级IE工程师",
        city: "南沙",
        salary: '面议',
      }, {
        name: "电子工程师",
        city: "南沙",
        salary: '面议',
      }, {
        name: "IT经理/主管",
        city: "南沙",
        salary: '面议',
      }, {
        name: "应用工程师",
        city: "南沙",
        salary: '面议',
      }]
    },
    school: {
      banner: "./static/img/contact-banner6.png",
      positionList: [{
        name: "销售助理、亚马逊助理",
        city: "深圳",
        salary: '面议',
      }, {
        name: "电子商务储干",
        city: "深圳",
        salary: '面议',
      }, {
        name: "电子工程师",
        city: "深圳",
        salary: '面议',
      }, {
        name: "结构工程师",
        city: "深圳",
        salary: '面议',
      }, {
        name: "嵌入式软件工程师",
        city: "深圳",
        salary: '面议',
      }, {
        name: "SLAM算法工程师",
        city: "深圳",
        salary: '面议',
      }, ]
    }
  };

  const today = tool.formatDate(new Date(), 'yyyy/MM/dd');
  const type = tool.url.get('type') || 'social';
  const typeData = data[type];
  document.title = type === 'social' ? '社会招聘' : '校园招聘';
  $('.title-name').text(type === 'social' ? '社会招聘职位' : '校园招聘职位');
  let list = ``;
  for (let i = 0; i < typeData.positionList.length; i++) {
    const item = typeData.positionList[i];
    list += `<li class="position-item">
          <p class="time">${today}</p>
          <p class="name"><a href="https://jobs.51job.com/all/co4851268.html" target=_blank>${item.name}</a></p>
          <p class="desc"><span class="place">工作地点：${item.city}</span><span class="salary">薪资：面议</span></p>
        </li>`;
  }
  $(".position-list").html(list);
  if (type === 'social') {
    const banner = `<div class="main-wrap"></div><div class="banner-box">
      <p class="banner-title">社会招聘</p>
      <p class="red-line"></p>
      <p class="desc">广东宝乐创建于2004年，总部位于广州市，占地面积约50000平方米，是一家集研发、生产、销售于一体的国家高新技术企业。</p>
      </div>`;
    $("#banner").addClass('banner-recruit-social').html(banner);
    $('.footer-img .ban').attr('src', './static/img/contact-banner5.png');

  } else {
    const banner = `<div class="main-wrap">
      <div class="banner-title">BONA 2020届校园招聘</div>
    </div>`;
    $("#banner").addClass('banner-recruit-school').html(banner);
    $('.footer-img .ban').attr('src', './static/img/contact-banner7.png');
  }
});
