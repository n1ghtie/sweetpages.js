---SETUP START---

1) Include a link to a script in footer like this
<pre><code>&lt;script type="text/javascript" src="/src/to/your/script/sweetpages.js"&gt;&lt/script&gt;</code></pre>
2) Add the CSS rules to your excisting CSS, do not overrite you main rules. Create, minify a separate file and include it in head like this
<pre><code>&lt;link rel="stylesheet" type="text/css" (media="all") href,src="/src/to/your/css/custom.css"&gt;</code></pre>
3) Add a window rotation listener, add a custom attribute so your body tag will look like this
<pre><code>&lt;body onorientationchange="updateOrientation()"&gt;</code></pre>
---SETUP END---
[Demo][]
[Demo]: http://andrejsgubars.co.uk/test/vestibulum-ante-ipsum-primis/bmw-i8-spyder-concept/
