// 配置
window.Config = {

  // 站点名
  SiteName: "Akiba's Status",

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'cool-leaf-fd6e.akiba.workers.dev',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm784345383-76da07daefb1dd03b06f1fb9',
    'm789797418-8a14d898a4f4686e4f1ee6dd',
    'm784346520-bbc54abc458651f8692fe214',
    'm785509380-0499622d9e20641289aad82f',
    'm789736092-7e40d12de29475ef6c21be5a',
    'm791618346-f92d2253efd8bddaa13c757f',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 90,

  // 导航栏菜单
  Navi: [
    {
      text: 'Blog',
      url: 'https://2890.ltd/'
    },
    {
      text: 'Homepage',
      url: 'https://hyh.ink/'
    }
  ]
};
