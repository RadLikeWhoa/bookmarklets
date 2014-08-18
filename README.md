# [bookmarklets](http://radlikewhoa.github.io/bookmarklets)

Bookmarklets are awesome. The sit in your favourites quietly without hogging any resources and they're quick to add and even quicker to use. They provide a wide variety of features on all kinds of sites. But some sites make it terribly hard to find their bookmarklets, others don't even officially provide one. That's why I created this site. This is a place to find bookmarklets for your favourite websites, be it social media sites like Twitter, Facebook or Tumblr, or sites like GitHub, Gist, and Zootool.

The list is frequently updated with new and even more awesome entries. Read on to find out how you can add new bookmarklets yourself in order to help improve the site.

## Working with the code

bookmarklets is built using [gulp](). The default gulp task sets up a local server, some watchers for all filetypes so you're ready to go.

```
git clone https://github.com/RadLikeWhoa/bookmarklets.git
cd bookmarklets
gulp
```

Only files in the `src` directory should be edited. If all you want to do is add a new bookmarklet you only need to work inside the `networks` directory.

## Adding new bookmarklets

Add new bookmarklets to the `networks` folder.

If a .json file for the network you're trying to add a new bookmarklet for already exists, simply add your new entry to the existing ones and follow the existing format. Read more about the format in the table further down this page.

If there is no existing .json file you'll have to add one yourself. Your new file should look like this:

```javascript
{
  "network": "",
  "category": "",
  "color": "",
  "bookmarklets": [{
    "name": "",
    "code": ""
  }]
}
```

| Property     | Descripton                                                                 |
|--------------|----------------------------------------------------------------------------|
| network      | The name of your network (e.g. "Twitter", "Facebook", etc.)                |
| category     | Your network's category. (e.g. "social", "news")                           |
| color        | Your network's primary color, or [brand color](http://brandcolors.net).    |
| bookmarklets | An array representing the network's bookmarklets. Each bookmarklet is an object, consisting of a `name` (the bookmarklet's action) and  a `code` (the bookmarklet's actual code) entry. |