# ConstructJS.org

The website at [constructjs.org](http://constructjs.org)

The content is taken directly from the [development wiki](http://github.com/makesites/construct)


## Usage

To update the site with new content, first edit the wiki page(s) - then perform a submodule pull
```
git submodule foreach git pull origin master
```

If you're updating the design be sure to update the LESS files and minify at the end:
```
lessc assets/less/main.less assets/css/main.css
```
Send a pull request with your changes to be considered for publication.


## Credits

Maintained by [Makis Tracend](http://github.com/tracend)

Distributed by [Makesites.org](http://makesites.org)

Released under a [Creative Commons Attribution](https://creativecommons.org/licenses/by/4.0/) license.

