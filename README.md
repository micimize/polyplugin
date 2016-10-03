Expose extension points at all levels of your module in a clean and uniform way.

spec
```json
{
  "module-name": {
    "submodule": {
      "extension-point": [ "plugin-module", "plugin-module-2", "not module-3" ],
      "another": {
        "plugin-another": { "config": "for this" },
        "plugin-another-2": [],
        "module-3": ["array", "arguments"] },
      "*": [ "for-entire-submodule", "module-3", "not module-4" ],
      "...": [ "for-unspecified" ],
    },
    "submodule-2": "simple-plugin",
    "...": [ "plugins-for", "all-other", "extension-points", { "module-4": { "config": "for this" } } ]
    "dev ...": [ "development-plugins", "not module-4" ]
  },
  "module-name-2": "./src/local-plugin",
  "module-name-3": ["simple-plugin-2", {"simple-plugin": "fooobar"}],
  "dev module-name-4": "./src/local-dev"
}
```

load from `.polypluginrc`, the root of `package.json`, or `package.json#polyplugin`. You have to depend on modules yourself.
