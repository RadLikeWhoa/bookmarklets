var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent),
    touch = 'ontouchstart' in window,
    links = document.querySelectorAll('.bookmarklet a'),
    len = links.length

function handleBookmarkletClick (e) {
  alert(touch ? 'Please tap and hold the bookmarklet to add it to your bookmarks.' : 'Please drag the bookmarklet to the bookmarks bar.')
  e.preventDefault()
}

while (len--) {
  var link = links[len]

  if (iOS) {
    link.href = window.location + '#' + link.href
  }

  link.addEventListener('click', handleBookmarkletClick)
}

var list = new List('network-list', { valueNames: [ 'network__name' ] })

fitText(document.getElementById('mainHeading'), 0.7)