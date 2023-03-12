let links = document.querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])')

links.forEach(link => link.style.color = 'orange')