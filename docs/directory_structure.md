
Directory structure
-------------------

We try to follow the directory structures of [Gaia applications][1]
with a few additions because of Handlebars templates and RequireJS usage.


    docs/               -- documentation directory
    www/                -- FirefoxOS application
      js/               -- javascript libraries
        lib/            -- external javascript libraries
      monuments.js      -- main javascript library (require.js loader)
      locales/          -- localisation messages (webL10n)
      style/            -- CSS & design files
        bb/             -- FirefoxOS building blocks
        icons/          -- icons for the application
          60/           -- 60px icon
          Monuments.png -- 128px icon
        images/         -- additional UI images
        monuments.css   -- main css template
      templates/        -- Handlebars templates
      index.html        -- main application
      manifest.webapp   -- manifest for the application


[1]: https://github.com/mozilla-b2g/gaia