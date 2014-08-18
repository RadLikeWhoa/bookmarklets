var _touch = 'ontouchstart' in window,
    _links = document.querySelectorAll('.bookmarklet a')

/*function _bindUIActions () {
  _.each(_links, function (link) {
    link.addEventListener('click', function (e) {
      alert(_touch ? 'Please tap and hold the bookmarklet to add it to your bookmarks.' : 'Please drag the bookmarklet to the bookmarks bar.')
      e.preventDefault()
    })
  })
}*/

if (_touch) {
  document.body.classList.add('touch')
}

// _bindUIActions()

new List('network-list', { valueNames: [ 'network__name' ] })