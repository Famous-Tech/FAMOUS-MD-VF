//check https://www.npmjs.com/package/@distube/ytdl-core
//find How to get cookies
//follow the guide
let yt_Agent = (ytdlCore) => ytdlCore.createAgent(
	[
		{
		  domain: ".youtube.com",
		  expirationDate: new Date(`xxx`).getTime(),
		  hostOnly: false,
		  httpOnly: false,
		  name: "APISID",
		  path: "/",
		  sameSite: "no_restriction",
		  secure: false,
		  session: false,
		  value: "xxx",
		},{
		  name: "HSID",
		  value: "xxx",
			domain: ".youtube.com",
		  path: "/",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: false,
		  sameSite: "no_restriction",
		  session: false
		},{
		  name: "LOGIN_INFO",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "PREF",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: false,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "SAPISID",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: false,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "SID",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: false,    
		  hostOnly: false,
		  secure: false,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "SIDCC",
		  value: "xxx",
		  expirationDate: new Date('xxx').getTime(),
		  httpOnly: false,    
		  hostOnly: false,
		  secure: false,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "SSID",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "VISITOR_INFO1_LIVE",
		  value: "xxx",
		  expirationDate: new Date(`xxxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "VISITOR_PRIVACY_METADATA",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "YSC",
		  value: "xxx",
		  expirationDate: new Date().getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: true,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-1PAPISID",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: false,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-1PSID",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-1PSIDCC",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-1PSIDTS",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-3PAPISID",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: false,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-3PSID",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-3PSIDCC",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		},{
		  name: "__Secure-3PSIDTS",
		  value: "xxx",
		  expirationDate: new Date(`xxx`).getTime(),
		  httpOnly: true,    
		  hostOnly: false,
		  secure: true,
		  sameSite: "no_restriction",
		  session: false,
			domain: ".youtube.com",
		  path: "/",
		}
	  ]	  
)
//yt_Agent = (ytdlCore) => ytdlCore.createAgent([])

module.exports = yt_Agent;