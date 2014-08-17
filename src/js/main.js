var _touch = 'ontouchstart' in window,
    _list = document.querySelector('.js-networks'),
    _searchBox = document.getElementById('search'),
    _networks, _links

function _bindUIActions () {
  /* _.each(_links, function (link) {
    link.addEventListener('click', function (e) {
      alert(_touch ? 'Please tap and hold the bookmarklet to add it to your bookmarks.' : 'Please drag the bookmarklet to the bookmarks bar.')
      e.preventDefault()
    })
  }) */

  _searchBox.addEventListener('input', _search)
}

function _search () {
  var query = new RegExp(_searchBox.value, 'i')

  /* _.each(_networks, function (network) {
    network.style.display = query.test(network.firstElementChild.textContent) || query.test(network.getAttribute('data-category')) ? 'block' : 'none'
  }) */
}

_networks = document.querySelectorAll('.network')
_links = document.querySelectorAll('.bookmarklet a')

if (_touch) {
  document.body.classList.add('touch')
}

_bindUIActions()