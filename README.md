# [bookmarklets](http://radlikewhoa.github.io/bookmarklets)

Bookmarklets are awesome. They sit in your favourites quietly without hogging any resources and they're quick to add and even quicker to use. They provide a wide variety of features on all kinds of sites. But some sites make it terribly hard to find their bookmarklets, others don't even officially provide one. That's why I created this site. This is a place to find bookmarklets for your favourite websites, be it social media sites like Twitter, Facebook or Tumblr, or sites like GitHub, Gist, and Zootool.

It's as simple as dragging and dropping a bookmarklet to your bookmarks bar. You can instantly recognize exactly which bookmarklet is which, as they're saved as "Network: Action". This is great for organising your bookmarklets and you'll be a pro in using them in no time.

The list is frequently updated with new and even more awesome entries. Read on to find out how you can add new bookmarklets yourself in order to help improve the site. After you've followed all the steps, submit a pull request and I'll handle the deployment to gh-pages.

## Adding new bookmarklets

Add new bookmarklets to the `bookmarklets` folder.

If a .json file for the network you're trying to add a new bookmarklet for already exists, simply add your new entry to the existing ones and follow the format `"action": "code"`. Read more about the format in the table further down this page.

If there is no existing .json file you'll have to add one yourself. Your new file should look like this:

```javascript
{
  "network": "",
  "className": "",
  "category": "",
  "bookmarklets": {
    "": ""
  }
}
```

| Property     | Required | Descripton                                                               |
|--------------|----------|--------------------------------------------------------------------------|
| network      | required | The name of your network (e.g. "Twitter", "Facebook", etc.)              |
| className    | optional | Usually, the networks name will be used for the CSS class. If this is not possible (e.g. "500px", "Google+") you can enter a custom class name here.                           |
| category     | required | Your network's category. (e.g. "Social", "News")                         |
| bookmarklets | required | An object representing the network's bookmarklets. Each bookmarklet is a key-value pair, where the key is the bookmarklet's action (e.g. "Add", "Share") and the value is its code.                                                                                                |

After adding a new network you'll also have to [add its brand colour](#adding-a-brand-colour).

## Rebuilding the site

In order to rebuild the site (e.g. after adding new bookmarklets), run the following steps:

1. Run `grunt test` to build the `.tmp` folder. This folder can be used to test the site for proper functionality.
2. If the test build was successful, the final build can be started. Run `grunt build` or just `grunt`. This will generate the `dist` folder and remove the `.tmp` folder.
3. Commit your changes.

## Adding a brand colour

If you added a new network (i.e. a new .json file in the bookmarklets folder) you'll have to add the networks brand colour to `style.scss`. At the end of this file there's an alphabetically sorted list called `$brand-colors`. Go to [brandcolors.net](http://brandcolors.net) and see if your network is featured there. If it is, take the HEX-code and add it to the list (e.g. `"network" #000000`). If it isn't featured there, try to figure out the colour on the site itself.

There are rules for this list:

* Use the lowercase version of your network's name with periods and spaces removed.
* If you added a className property to your .json file, this property will be used for the classname. Use it here as well.
* Always use six-digit HEX codes.
* Align all values with the other ones in the list.
* Keep the alphabetical order.