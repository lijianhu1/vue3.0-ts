### PC官网
- 目录结构
> common
>> lib    &nbsp;&nbsp; *引用库，目前只有jquery和swiper（轮播图）是有用的*
>> static  &nbsp;&nbsp; *中英文公共文件，会根据目录打包至中英文对应目录文件*
>
> src  &nbsp;&nbsp;*中文版源码*
>> less / common &nbsp;&nbsp; *1.base_variable.less:css全局变量，2.base.less：css公共样式*
>> lib  &nbsp;&nbsp;*上级目录common/lib通过gulp自动生成*
>> static
>>> images &nbsp;&nbsp;*上级目录common/static/images通过gulp自动生成*
>>> include &nbsp;&nbsp;*公共部分组件（头、尾、子导航）*  
>>> js/util/tool.js  自定义工具库  和接口请求
>
> srcEn  &nbsp;&nbsp;*// 英文版源码 同中文*
> gulpfile.js  
> gulpfile_dev_cn.js  &nbsp;&nbsp;*中文开发环境配置*  
> gulpfile_dev_en.js &nbsp;&nbsp;*英文开发环境配置*  
> gulpfile_prod_cn.js &nbsp;&nbsp;*中文生产环境配置*  
> gulpfile_prod_en.js &nbsp;&nbsp;*英文生产环境配置*  
> package.json

