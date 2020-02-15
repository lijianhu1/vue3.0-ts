/*jshint esversion: 6 */
// 产品详情数据，根据品牌提供的excel表，用js生成json数据。
const productList = {"BL102":{"specifications":[{"key":"重量(kg)","val":"2.8"},{"key":"产品尺寸(mm)","val":"300×300×80"},{"key":"尘盒容量(L)","val":"0.3"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"70"},{"key":"行走速度","val":"21.7~22.3cm/sec"},{"key":"电池容量(mAh)","val":"1500"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约90"},{"key":"清洁模式","val":"4档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":""},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"无"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"无"},{"key":"地图规划","val":"无"},{"key":"导航类型（随机/激光/视觉）","val":"随机"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"吸口"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"无"}],"other":[{"key":"彩盒尺寸","val":"441*359*128mm"},{"key":"外箱尺寸","val":""}],"technology":"3,8"},"BL105":{"specifications":[{"key":"重量(kg)","val":"2.8"},{"key":"产品尺寸(mm)","val":"300×300×77"},{"key":"尘盒容量(L)","val":"0.3"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"70"},{"key":"行走速度","val":"21.7~22.3cm/sec"},{"key":"电池容量(mAh)","val":"1500/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约90/120"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"无"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"无"},{"key":"地图规划","val":"无"},{"key":"导航类型（随机/激光/视觉）","val":"随机"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"吸口"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"无"}],"other":[{"key":"彩盒尺寸","val":"437*356*128mm"},{"key":"外箱尺寸","val":""}],"technology":"3,8"},"BL517":{"specifications":[{"key":"重量(kg)","val":"2.6"},{"key":"产品尺寸(mm)","val":"325×325×96"},{"key":"尘盒容量(L)","val":"0.5"},{"key":"水箱容量(L)","val":"0.22"},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"16.5～18.5cm/sec"},{"key":"电池容量(mAh)","val":"2600 (14.4V)"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"90~120"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"无"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"有"},{"key":"导航类型（随机/激光/视觉）","val":"激光"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"滚刷"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"有磁条"}],"other":[{"key":"彩盒尺寸","val":"579*375*131mm"},{"key":"外箱尺寸","val":"600*395*150mm"}],"technology":"2,3,4,10,7"},"BL602":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"340×340×85"},{"key":"尘盒容量(L)","val":"0.4"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"16.5～18.5cm/sec"},{"key":"电池容量(mAh)","val":"2200/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约100"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"可选"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"可选"},{"key":"导航类型（随机/激光/视觉）","val":"随机/陀螺仪"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"吸口"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"虚拟墙/有磁条"}],"other":[{"key":"彩盒尺寸","val":"485*405*145mm"},{"key":"外箱尺寸","val":""}],"technology":"3,4"},"BL618":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"340×340×85"},{"key":"尘盒容量(L)","val":"0.4"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"16.5~18.5cm/sec"},{"key":"电池容量(mAh)","val":"2200/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约100"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"可选"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"可选"},{"key":"导航类型（随机/激光/视觉）","val":"随机"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"吸口"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"有磁条"}],"other":[{"key":"彩盒尺寸","val":"510*405*145mm"},{"key":"外箱尺寸","val":""}],"technology":"3,4"},"BL608":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"340×340×85"},{"key":"尘盒容量(L)","val":"0.4"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"16.5~18.5cm/sec"},{"key":"电池容量(mAh)","val":"2200/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约100"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"可选"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"可选"},{"key":"导航类型（随机/激光/视觉）","val":"随机"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"吸口"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"有磁条"}],"other":[{"key":"彩盒尺寸","val":"510*410*153mm"},{"key":"外箱尺寸","val":""}],"technology":"3,4"},"BL701":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"350×350×108"},{"key":"尘盒容量(L)","val":"0.46"},{"key":"水箱容量(L)","val":"0.18"},{"key":"噪音大小(dB)","val":"71"},{"key":"行走速度","val":"28～30cm/sec"},{"key":"电池容量(mAh)","val":"5200 (14.4V)"},{"key":"充电时间(h)","val":"5"},{"key":"续航时间(min)","val":"150"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"有"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"有"},{"key":"导航类型（随机/激光/视觉）","val":"激光"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"滚吸互换"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"有磁条"}],"other":[{"key":"彩盒尺寸","val":"520*408*167mm"},{"key":"外箱尺寸","val":"530*177*426mm"}],"technology":"2,3,4,5,10,7,9"},"BL826":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"350×350×85"},{"key":"尘盒容量(L)","val":"0.5"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"16.5~18.5cm/sec"},{"key":"电池容量(mAh)","val":"2200/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约100"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"可选"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"可选"},{"key":"导航类型（随机/激光/视觉）","val":" 随机/陀螺仪"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"滚吸互换"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"有磁条"}],"other":[{"key":"彩盒尺寸","val":"509*408*165mm"},{"key":"外箱尺寸","val":""}],"technology":"1,3,4,7"},"BL809":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"350×350×100"},{"key":"尘盒容量(L)","val":"0.5"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"16.5~18.5cm/sec"},{"key":"电池容量(mAh)","val":"2200/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约100"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"可选"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"可选"},{"key":"导航类型（随机/激光/视觉）","val":" 随机/陀螺仪"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"滚吸互换"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"虚拟墙/有磁条"}],"other":[{"key":"彩盒尺寸","val":"509*408*165mm"},{"key":"外箱尺寸","val":""}],"technology":"1,3,4,7"},"BL801":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"350×350×88"},{"key":"尘盒容量(L)","val":"0.5"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"28.62cm/sec"},{"key":"电池容量(mAh)","val":"2200/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约100"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"可选"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"可选"},{"key":"导航类型（随机/激光/视觉）","val":" 随机/陀螺仪"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"滚吸互换"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"虚拟墙/有磁条"}],"other":[{"key":"彩盒尺寸","val":"499*165*414mm"},{"key":"外箱尺寸","val":""}],"technology":"1,3,4,7"},"BL800":{"specifications":[{"key":"重量(kg)","val":"3.5"},{"key":"产品尺寸(mm)","val":"350×350×88"},{"key":"尘盒容量(L)","val":"0.5"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"60"},{"key":"行走速度","val":"16.5~18.5cm/sec"},{"key":"电池容量(mAh)","val":"2200/2600"},{"key":"充电时间(h)","val":"4~5"},{"key":"续航时间(min)","val":"约100"},{"key":"清洁模式","val":"5档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"有"},{"key":"预约功能","val":"有"},{"key":"wifi功能","val":"可选"},{"key":"排除故障","val":"有"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"有"},{"key":"语音提示","val":"有"},{"key":"地图规划","val":"可选"},{"key":"导航类型（随机/激光/视觉）","val":" 随机/陀螺仪"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"滚吸互换"},{"key":" 水箱","val":"有"},{"key":"滤网类型（海帕/初级滤网）","val":"HEPA海帕+初效滤网"},{"key":"虚拟墙或磁条","val":"虚拟墙/有磁条"}],"other":[{"key":"彩盒尺寸","val":"509*408*165mm"},{"key":"外箱尺寸","val":""}],"technology":"1,3,4,7"},"K5":{"specifications":[{"key":"重量(kg)","val":"1.6"},{"key":"产品尺寸(mm)","val":"280×280×79"},{"key":"尘盒容量(L)","val":"0.2"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"70"},{"key":"行走速度","val":"16.5~18.5cm/sec"},{"key":"电池容量(mAh)","val":"850"},{"key":"充电时间(h)","val":"4"},{"key":"续航时间(min)","val":"约55"},{"key":"清洁模式","val":"3档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"木地板/瓷砖/短绒地毯/石地板/油布"},{"key":"遥控","val":"无"},{"key":"预约功能","val":"无"},{"key":"wifi功能","val":"无"},{"key":"排除故障","val":"无"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"无"},{"key":"语音提示","val":"无"},{"key":"地图规划","val":"无"},{"key":"导航类型（随机/激光/视觉）","val":"随机"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"吸口"},{"key":" 水箱","val":"无"},{"key":"滤网类型（海帕/初级滤网）","val":"初级滤网"},{"key":"虚拟墙或磁条","val":"无"}],"other":[{"key":"彩盒尺寸","val":"313 *121 * 383mm"},{"key":"外箱尺寸","val":""}],"technology":""},"K5A":{"specifications":[{"key":"重量(kg)","val":"1.6"},{"key":"产品尺寸(mm)","val":"280×280×79"},{"key":"尘盒容量(L)","val":"0.2"},{"key":"水箱容量(L)","val":""},{"key":"噪音大小(dB)","val":"70"},{"key":"行走速度","val":""},{"key":"电池容量(mAh)","val":"850"},{"key":"充电时间(h)","val":"4"},{"key":"续航时间(min)","val":"约55"},{"key":"清洁模式","val":"3档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":""},{"key":"遥控","val":"无"},{"key":"预约功能","val":"无"},{"key":"wifi功能","val":"无"},{"key":"排除故障","val":"无"},{"key":"防跌落","val":"有"},{"key":"自动回充","val":"无"},{"key":"语音提示","val":"无"},{"key":"地图规划","val":"无"},{"key":"导航类型（随机/激光/视觉）","val":"随机"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"吸口"},{"key":" 水箱","val":"无"},{"key":"滤网类型（海帕/初级滤网）","val":"初级滤网"},{"key":"虚拟墙或磁条","val":"无"}],"other":[{"key":"彩盒尺寸","val":"314*118*322mm"},{"key":"外箱尺寸","val":""}],"technology":""},"CC901":{"specifications":[{"key":"重量(kg)","val":"2.1"},{"key":"产品尺寸(mm)","val":"265×271×120"},{"key":"尘盒容量(L)","val":"无"},{"key":"水箱容量(L)","val":"无"},{"key":"噪音大小(dB)","val":"无"},{"key":"行走速度","val":"8.2～8.5cm/sec"},{"key":"电池容量(mAh)","val":"700"},{"key":"充电时间(h)","val":"无"},{"key":"续航时间(min)","val":"无"},{"key":"清洁模式","val":"2档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"玻璃材质"},{"key":"遥控","val":"可选"},{"key":"预约功能","val":"无"},{"key":"wifi功能","val":"无"},{"key":"排除故障","val":"无"},{"key":"防跌落","val":"可选"},{"key":"自动回充","val":"无"},{"key":"语音提示","val":"无"},{"key":"地图规划","val":"无"},{"key":"导航类型（随机/激光/视觉）","val":"陀螺仪"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"无"},{"key":" 水箱","val":"无"},{"key":"滤网类型（海帕/初级滤网）","val":"无"},{"key":"虚拟墙或磁条","val":"无"}],"other":[{"key":"彩盒尺寸","val":"510*307*148mm"},{"key":"外箱尺寸","val":""}],"technology":"3,6"},"CC906":{"specifications":[{"key":"重量(kg)","val":"1.4"},{"key":"产品尺寸(mm)","val":"195×195×96"},{"key":"尘盒容量(L)","val":"无"},{"key":"水箱容量(L)","val":"无"},{"key":"噪音大小(dB)","val":"70db"},{"key":"行走速度","val":"8.2～8.5cm/sec"},{"key":"电池容量(mAh)","val":"700"},{"key":"充电时间(h)","val":"无"},{"key":"续航时间(min)","val":"无"},{"key":"清洁模式","val":"2档模式"}],"funct":[{"key":"拖地功能","val":"可选"},{"key":"适用地板/玻璃材质","val":"玻璃材质"},{"key":"遥控","val":"可选"},{"key":"预约功能","val":"无"},{"key":"wifi功能","val":"无"},{"key":"排除故障","val":"无"},{"key":"防跌落","val":"可选"},{"key":"自动回充","val":"无"},{"key":"语音提示","val":"无"},{"key":"地图规划","val":"无"},{"key":"导航类型（随机/激光/视觉）","val":" 陀螺仪"}],"configure":[{"key":"吸口类型（滚刷/吸口/滚吸互换）","val":"无"},{"key":" 水箱","val":"无"},{"key":"滤网类型（海帕/初级滤网）","val":"无"},{"key":"虚拟墙或磁条","val":"无"}],"other":[{"key":"彩盒尺寸","val":"351*125*300mm"},{"key":"外箱尺寸","val":""}],"technology":"3,6"}};
const textList = {
  specifications: "规格参数",
  funct: "功能搭载",
  configure: "硬件配置",
  other: "其他参数",
};
//产品详情参数（二级页面）
(function ($) {
  $.fn.detailFn = function () {
    /**产品详情**/
    const type = tool.url.get('type');
    if (type) {
    const _type = type.split("-")[0]; // BL701存在黑白色，用于区分
      //
      const productDetail = productList[_type];

      let detailHtml = ``;//参数详情
      let technologyHtml = ``;//核心技术
      for (let key in productDetail) {
        if (key === "technology") {
          const technologyCode = productDetail[key].split(",");
          for (let i=0;i<technologyCode.length;i++){
            switch (technologyCode[i]) {
              case "1":
                technologyHtml+=`<li><img src="./static/images/product/saoxi.png" alt="扫吸互换技术"/><p>扫吸互换技术</p></li>`;
                break;
              case "2":
                technologyHtml+=`<li><img src="./static/images/product/quyi.png" alt="区域划分技术"/><p>区域划分技术</p></li>`;
                break;
              case "3":
                technologyHtml+=`<li><img src="./static/images/product/lujing.png" alt="路径规划技术"/><p>路径规划技术</p></li>`;
                break;
              case "4":
                technologyHtml+=`<li><img src="./static/images/product/shuixiang.png" alt="水箱及相关技术"/><p>水箱及相关技术</p></li>`;
                break;
              case "5":
                technologyHtml+=`<li><img src="./static/images/product/jiupianjishu.png" alt="视觉纠偏技术"/><p>视觉纠偏技术</p></li>`;
                break;
              case "6":
                technologyHtml+=`<li><img src="./static/images/product/quanquan.png" alt="安全保护技术"><p>安全保护技术</p></li>`;
                break;
              case "7":
                technologyHtml+=`<li><img src="./static/images/product/app.png" alt="APP控制"><p>APP控制</p></li>`;
                break;
              case "8":
                technologyHtml+=`<li><img src="./static/images/product/sizhongmoshi.png" alt="四种清扫模式"><p>四种清扫模式</p></li>`;
                break;
              case "9":
                technologyHtml+=`<li><img src="./static/images/product/vr.png" alt="VR 360°多场景视频+VSLAM导航"><p>VR 360°多场景视频+VSLAM导航</p></li>`;
                break;
              case "10":
                technologyHtml+=`<li><img src="./static/images/product/leida.png" alt="激光雷达导航系统"><p>激光雷达导航系统</p></li>`;
                break;
              default:break;
            }
          }

        } else {
          detailHtml += `<div class="section" id="${key}">
      <h5 class="section-title">${textList[key]}</h5>
      <ul class="section-con">`;
          for (let i = 0; i < productDetail[key].length; i++) {
            const item = productDetail[key][i];
            detailHtml += `<li><span class="item-title">${item.key}：</span> <span class="item-value">${item.val}</span></li>`;
          }
          detailHtml += `</ul>
    </div>`;
          $('.img-wrap-right .product-title').text(_type);
        }
        $(".product-detail-container").html(detailHtml);
        $(".technology-list").html(technologyHtml);
      }

      if (navigator.appName === "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") === "MSIE8.0") {
        window.attachEvent('onscroll', function () {
          scrollParamNav();
        });
      } else {
        document.addEventListener('scroll', function (event) {
          scrollParamNav();
        });
      }
      //图片放大
      imgListFn(type);
    }
  };
})(jQuery);

//产品详情（一节页面）



function scrollParamNav() {
  let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  const paramNav = document.getElementById('param-nav');
  if (scrollDistance >= 500) {    // 触发的位置
    paramNav.className = "fixed";
  } else {
    paramNav.className = "";
  }
}
//选中图片放大
function imgListFn(type) {
  let imgNav = `<ul class="img-list">
<li class="active" data-posi='top'><img src="./static/images/product/top/${type}_140.png" alt="宝乐扫地机"></li>
<li data-posi='front'><img src="./static/images/product/front/${type}_140.png" alt="宝乐扫地机"></li>
<li data-posi='side'><img src="./static/images/product/side/${type}_140.png" alt="宝乐扫地机"></li>
<li data-posi='bottom'><img src="./static/images/product/bottom/${type}_140.png" alt="宝乐扫地机"></li>
</ul>`;
  $(".img-nav .img-list-box").html(imgNav);
  $(".img-nav").css({marginTop: -($(".img-nav").height() / 2) || 0});
  // const jqzoom = `<img src="${list[0]}" alt=""  jqimg="${list[0]}" id="bigImg"/>`;
  const jqzoom = `<img src="./static/images/product/top/${type}_1008.png" alt="宝乐扫地机"  jqimg="./static/images/product/top/${type}_1008.png" id="bigImg"/>`;
  $(".jqzoom").html(jqzoom);
  $(".jqzoom").jqueryzoom({
    xzoom: 500, //放大图的宽度(默认是 200)
    yzoom: 500, //放大图的高度(默认是 200)
    offset: 125, //离原图的距离(默认是 10)
    position: "right", //放大图的定位(默认是 "right")
    preload: 1
  });
}

$(".img-nav ").on("mouseover", "li", function () {
  $(".img-list li").removeClass('active');
  $(this).addClass('active');
  activeImg();
});

$(".img-nav .arrow").on("click", function () {
  let type = $(this).data("type");
  let index = $('.img-nav .img-list .active').index();
  if (type === 'prev') {
    if (index <= 0) {
      index = $(".img-list li").length - 1;
    } else {
      index--;
    }
  } else if (type === 'next') {
    let listLen = $(".img-list li").length;
    if (index >= listLen - 1) {
      index = 0;
    } else {
      index++;
    }
  }
  $(".img-list li").removeClass('active');
  $(".img-list li").eq(index).addClass('active');
  activeImg();
});


function activeImg() {
  const position = $(".img-nav li.active").data("posi");
  const type = tool.url.get("type");
  $("#bigImg").attr({
    src: `./static/images/product/${position}/${type}_1008.png`,
    jqimg: `./static/images/product/${position}/${type}_1008.png`
  });
}

$("#param-nav li a").on("click", function () {
  const index = $(this).data("index");
  const top = $("#" + index).offset().top;
  const currTop = $(document).scrollTop();
  let scrollTop = currTop <= 500 ? top - 208 : top - 154;
  $("html,body").animate({scrollTop: scrollTop + "px"}, 300);
});
