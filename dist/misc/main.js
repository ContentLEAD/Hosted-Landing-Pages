Handlebars.registerHelper("list",function(a,b){for(var c="",d=0,e=a.length;e>d;d++)c+=b.fn(a[d]);return c}),Handlebars.registerHelper("p",function(a,b){for(var c="",d=0,e=a.length;e>d;d++)c+=b.fn(a[d]);return c}),compileHBS=function(){var a=$("#block-expressions-template").html(),b=Handlebars.compile(a),c=b(context);$("#content-placeholder").html(c),runPumpkin(context.clientID,context.host),runGoogleAnalytics(context.analyticsCode)},runPumpkin=function(a,b){!function(a,b){var c=a.createElement("script");c.type="text/javascript",c.async=!0,c.src="//pumpkin."+context.host+"/pumpkin.js";var d=a.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d),b.__S||(window._pk=b,b.__S=1.1),b.host="conversion."+context.host,b.clientId=context.clientID}(document,window._pk||[])},runGoogleAnalytics=function(a){!function(a,b,c,d,e,f){a.GoogleAnalyticsObject=d,a[d]||(a[d]=function(){(a[d].q=a[d].q||[]).push(arguments)}),a[d].l=+new Date,e=b.createElement(c),f=b.getElementsByTagName(c)[0],e.src="//www.google-analytics.com/analytics.js",f.parentNode.insertBefore(e,f)}(window,document,"script","ga"),ga("create",a),ga("send","pageview")},compileHBS(context),$("body").css("background-image","url("+context.backgroundImage+")"),$("body").css("background-position",context.backgroundPosition);