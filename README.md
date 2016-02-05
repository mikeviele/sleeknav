# sleeknav
A sleek alternative to traditional web navigation

A sleek alternative to traditional website navigation. Out of the way when closed, yet clean and classy when opened. Easily installed, styled, and used.

##SleekNav's Features

SleekNav was built with cleanliness and functionality in mind. Use it however you like. As your entire navigation, or just for mobile users. SleekNav is easily customized to adopt the look and feel of your existing website. SleekNav's pop-over technique makes it a practical solution for any website and more importantly any device a website may be viewed on.

To see SleekNav in action, toggle the hamburger icon in the top right corner. SleekNav has been customized to use the colors and fonts that appear throughout this site; truly making SleekNav at home.

###SleekNav features the following:

*Clean, out of the way styling
*CSS3 transitions for smooth animation
*Easily used pop-over navigation
*Works in all major browsers

SleekNav is designed to be used with fixed positioning or relative positioning. Fixed positioning will create a bar at the top of your website with the hamburger inside. Relative positioning will create a hamburger wherever you place the code with the intention that it be styled to work around other elements. Fixed and relative positioning is declared with the use of classes ".sleek-fixed" and ".sleek-relative" respectively when you mark up your navigation.

##SleekNav's Installation

####LINK FILES

Add "sleeknav.css" and "jquery.sleeknav.js" to your project. Make sure jQuery is loaded before loading SleekNav.

```html
<link rel="stylesheet" href="/css/sleeknav.css" type="text/css" media="all" />
<script type="text/javascript" src="/js/jquery.js"></script>
<script type="text/javascript" src="/js/jquery.sleeknav.js"></script>
```

####MENU MARKUP

Mark up your navigation the way you normally would. Just add a class of "sleek" and either "sleek-fixed" or "sleek-relative" to the container.

```html
<div class="sleek sleek-fixed">
	<ul>
		<li><a href="/pages/page-1.php">Page One</a></li>
		<li><a href="/pages/page-2.php">Page Two</a>
			<ul>
				<li><a href="/pages/child-page-1.php">Child Page One</a></li>
				<li><a href="/pages/child-page-2.php">Child Page Two</a>
					<ul>
						<li><a href="/pages/grandchild-page-1.php">Grandchild Page One</a></li>
						<li><a href="/pages/grandchild-page-2.php">Grandchild Page Two</a></li>
						<li><a href="/pages/grandchild-page-3.php">Grandchild Page Three</a></li>
						<li><a href="/pages/grandchild-page-4.php">Grandchild Page Four</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li><a href="/pages/page-3.php">Page Three</a></li>
		<li><a href="/pages/page-4.php">Page Four</a>
			<ul>
				<li><a href="/pages/child-page-1.php">Child Page One</a></li>
				<li><a href="/pages/child-page-2.php">Child Page Two</a>
					<ul>
						<li><a href="/pages/grandchild-page-1.php">Grandchild Page One</a></li>
						<li><a href="/pages/grandchild-page-2.php">Grandchild Page Two</a></li>
					</ul>
				</li>
				<li><a href="/pages/child-page-3.php">Child Page Three</a></li>
				<li><a href="/pages/child-page-4.php">Child Page Four</a></li>
			</ul>
		</li>
		<li><a href="/pages/page-5.php">Page Five</a></li>
	</ul>
</div>
```
