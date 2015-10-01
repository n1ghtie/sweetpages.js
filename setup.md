---SETUP START---<br>

1) Include a link to a script in footer like this<br>
		<code><pre><script type="text/javascript" src="/src/to/your/script/sweetpages.js"></script></code></pre>
 <br>
2) Add the CSS rules to your excisting CSS, do not overrite you main rules. Create, minify a separate file and include it in head like this
<br>
<link rel="stylesheet" type="text/css" (optional media="all") href,src="/src/to/your/css/custom.css">
<br>
3) Add a window rotation listener, add a custom attribute so your body tag will look like this
<body onorientationchange="updateOrientation()">
	<br>
---SETUP END---

---DEMO---
<br>
Follow the link : http://andrejsgubars.co.uk/test/vestibulum-ante-ipsum-primis/bmw-i8-spyder-concept/
<br>
---END---