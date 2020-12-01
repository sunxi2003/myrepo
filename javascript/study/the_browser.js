// 浏览器相关
// 1. window :表示浏览器窗口
console.log('1. window'); 
//内部宽高: 显示网页的净宽高(除去菜单栏、工具栏、边框等占位元素)
console.log('1.1 window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
//外部宽高: 浏览器窗口的整个宽高; 
console.log('1.2 window outer size: ' + window.outerWidth + ' x ' + window.outerHeight);

// 2. navigator :表示浏览器的信息
console.log('2. navigator'); 
// navigator.appName：浏览器名称；
console.log('2.1 appName = ' + navigator.appName);
// navigator.appVersion：浏览器版本；
console.log('2.2 appVersion = ' + navigator.appVersion);
// navigator.language：浏览器设置的语言；
console.log('2.3 language = ' + navigator.language);
// navigator.platform：操作系统类型；
console.log('2.4 platform = ' + navigator.platform);
// navigator.userAgent：浏览器设定的User-Agent字符串。
console.log('2.5 userAgent = ' + navigator.userAgent);

//3. screen： 表示屏幕的信息
console.log('3. navigator'); 
// screen.width：屏幕宽度，以像素为单位；
console.log('3.1 screen.width = ' + screen.width );
//screen.height：屏幕高度，以像素为单位；
console.log('3.2 screen.height = ' + screen.height );
//screen.colorDepth：返回颜色位数，如8、16、24。
console.log('3.3 screen.colorDepth = ' + screen.colorDepth );
