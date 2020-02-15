/*jshint esversion: 6 */
$(function () {
  const data = {
    social: {
      banner: "./static/images/contact/banner-5.png",
      positionList: [{
        name: "VSLAM  Algorithm Engineer",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "LIDAR Algorithm Engineer",
        city: "Shenzhen/Panyu",
        salary: 'negotiation',
      }, {
        name: "LIDAR Senior Electrical Engineer",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "Embedded Software Engineer ",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "Slam Algorithm Engineer",
        city: "Panyu",
        salary: 'negotiation',
      }, {
        name: "IOT Architect（java direction）",
        city: "Panyu",
        salary: 'negotiation',
      }, {
        name: "E-commerce Shopkeeper",
        city: "Shenzhen/Panyu",
        salary: 'negotiation',
      }, {
        name: "E-commerce Operator",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "java Developing Engineer",
        city: "Panyu",
        salary: 'negotiation',
      }, {
        name: "Senior IE Engineer",
        city: "Nansha",
        salary: 'negotiation',
      }, {
        name: "Electrical Engineer",
        city: "Nansha",
        salary: 'negotiation',
      }, {
        name: "IT Manager/Supervisor",
        city: "Nansha",
        salary: 'negotiation',
      }, {
        name: "Application Engineer",
        city: "Nansha",
        salary: 'negotiation',
      }]
    },
    school: {
      banner: "./static/images/contact/banner-4.png",
      positionList: [{
        name: "Sales Assistant & Amazon Sales Assistant",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "E-commerce Cadre Candidate",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "Electrical Engineer",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "Structural Engineer",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "Embedded Software Engineer",
        city: "Shenzhen",
        salary: 'negotiation',
      }, {
        name: "SLAM Algorithm Engineer",
        city: "Shenzhen",
        salary: 'negotiation',
      }, ]
    }
  };

  const today = tool.formatDate(new Date(), 'yyyy-MM-dd');
  const type = tool.url.get('type') || 'social';
  const typeData = data[type];
  document.title = type === 'social' ? 'Social Recruitment' : 'Campus Recruitment';
  $('.position-header .name').text(type === 'social' ? 'Social Recruitment' : 'Campus Recruitment');
  let list = ``;
  for (let i = 0; i < typeData.positionList.length; i++) {
    const item = typeData.positionList[i];
    list += `<li class="position-item">
          <span class="name"><a href="https://jobs.51job.com/all/co4851268.html" target=_blank>${item.name}</a></span>
          <span class="column20">${item.city}</span>
          <span class="column20">negotiation</span>
          <span class="time">${today}</span>
        </li>`;
  }
  $(".position-list").html(list);
  if (type === 'social') {
    const banner = `<div class="main-wrap"><div>
      <p class="banner-title">Social Recruitment</p>
      <p class="desc">Founded in 2004, headquatered in Guangzhou, China, & based on an area of 50,000㎡, Guangdong Bona Robot Corporation Limited is a national high-tech enterprise with integrited R&D, manufacture & sales.</p>
        </div>
      </div>`;
    $("#banner").addClass('banner-recruit-social').html(banner);
    $('.footer-img .ban').attr('src', '/en/static/images/contact/shehuizhaopin2.png');

  } else {
    const banner = `<div class="main-wrap">
      <div class="banner-title">BONA 2020 Campus Recruitment</div>
    </div>`;
    $("#banner").addClass('banner-recruit-school').html(banner);
    $('.footer-img .ban').attr('src', '/en/static/images/contact/zhaopin3.png');
  }
});
