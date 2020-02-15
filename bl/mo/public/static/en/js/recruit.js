"use strict";

/*jshint esversion: 6 */
$(function () {
  var data = {
    social: {
      banner: "../static/img/contact-banner4.png",
      positionList: [{
        name: "VSLAM  Algorithm Engineer",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "LIDAR Algorithm Engineer",
        city: "Shenzhen/Panyu",
        salary: 'negotiation'
      }, {
        name: "LIDAR Senior Electrical Engineer",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "Embedded Software Engineer ",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "Slam Algorithm Engineer",
        city: "Panyu",
        salary: 'negotiation'
      }, {
        name: "IOT Architect（java direction）",
        city: "Panyu",
        salary: 'negotiation'
      }, {
        name: "E-commerce Shopkeeper",
        city: "Shenzhen/Panyu",
        salary: 'negotiation'
      }, {
        name: "E-commerce Operator",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "java Developing Engineer",
        city: "Panyu",
        salary: 'negotiation'
      }, {
        name: "Senior IE Engineer",
        city: "Nansha",
        salary: 'negotiation'
      }, {
        name: "Electrical Engineer",
        city: "Nansha",
        salary: 'negotiation'
      }, {
        name: "IT Manager/Supervisor",
        city: "Nansha",
        salary: 'negotiation'
      }, {
        name: "Application Engineer",
        city: "Nansha",
        salary: 'negotiation'
      }]
    },
    school: {
      banner: "../static/img/contact-banner6.png",
      positionList: [{
        name: "Sales Assistant & Amazon Sales Assistant",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "E-commerce Cadre Candidate",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "Electrical Engineer",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "Structural Engineer",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "Embedded Software Engineer",
        city: "Shenzhen",
        salary: 'negotiation'
      }, {
        name: "SLAM Algorithm Engineer",
        city: "Shenzhen",
        salary: 'negotiation'
      }]
    }
  };

  var today = tool.formatDate(new Date(), 'yyyy/MM/dd');
  var type = tool.url.get('type') || 'social';
  var typeData = data[type];
  document.title = type === 'social' ? 'Social Recruitment' : 'Campus Recruitment';
  $('.title-name').text(type === 'social' ? 'Social Recruitment' : 'Campus Recruitment');
  var list = "";
  for (var i = 0; i < typeData.positionList.length; i++) {
    var item = typeData.positionList[i];
    list += "<li class=\"position-item\">\n          <p class=\"time\">" + today + "</p>\n        <p class=\"name\"><a href=\"https://jobs.51job.com/all/co4851268.html\" target=_blank>" + item.name + "</a></p>\n          <p class=\"desc\"><span class=\"place\" style=\"width: 54%;\">Place: " + item.city + "</span>\n          <span class=\"salary\" style=\"width: 44%;\">Salary: negotiation</span></p>\n          </li>";
  }
  $(".position-list").html(list);
  if (type === 'social') {
    var banner = "<div class=\"main-wrap\"></div>\n      <div class=\"banner-box\" style=\"padding-top: 25px;\">\n      <p class=\"banner-title\">Social Recruitment</p>\n      <p class=\"red-line\"></p>\n      <p class=\"desc\">Founded in 2004, headquatered in Guangzhou, China, & based on an area of 50,000\u33A1, Guangdong Bona Robot Corporation Limited is a national high-tech enterprise with integrited R&D, manufacture & sales.</p>\n        </div>";
    $("#banner").addClass('banner-recruit-social').html(banner);
    $('.footer-img .ban').attr('src', '../static/img/contact-banner5.png');
  } else {
    var _banner = "<div class=\"main-wrap\">\n      <div class=\"banner-title\">2020 Campus Recruitment</div>\n    </div>";
    $("#banner").addClass('banner-recruit-school').html(_banner);
    $('.footer-img .ban').attr('src', '../static/img/contact-banner7.png');
  }
});