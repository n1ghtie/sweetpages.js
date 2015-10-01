---SETUP START---
1) Include a link to a script in footer like this
'''
<script type="text/javascript" src="/src/to/your/script/sweetpages.js"></script>
'''
2) add the CSS rules to your excisting CSS, do not overrite you main rules. Create, minify a separate file and include it in head like this
'''<link rel="stylesheet" type="text/css" (optional media="all") href,src="/src/to/your/css/custom.css">'''
3) add a window rotation listener, add a custom attribute so your body tag will look like this
'''<body onorientationchange="updateOrientation()">'''
---SETUP END---

---DEMO---
Follow the link : http://andrejsgubars.co.uk/test/vestibulum-ante-ipsum-primis/bmw-i8-spyder-concept/
---END---