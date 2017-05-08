var u = navigator.userAgent;
export let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
export let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
