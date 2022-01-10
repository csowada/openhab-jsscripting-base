# Introduction

The library is used together with openHAB 3.x. It is written in TypeScript and should help to write good rules.

## Install

### openHAB 3.1

In your openHAB folder root.

* Create a folder ``automation/lib/javascript/personal``

* Install library from github

```bash
cd automation/lib/javascript/personal
npm install csowada/openhab-jsscripting-base --no-save
```

### openHAB 3.2

In your openHAB folder root.

* Create a folder ``automation/js``
* Install ``jsscripting`` from the marketplace
* Set ``Do Not Use Built-in Variables`` in JS Scripting configuration to have a clean global scope
* Install library within the ``js`` folder

```bash
npm install csowada/openhab-jsscripting-base --no-save
```

## Usage

```javascript
const openhab_jsscripting_base = require("openhab-jsscripting-base");
const logger = openhab_jsscripting_base.getLogger("my-logger");

const rule0 = openhab_jsscripting_base.createRule({
    name: "Heutiges Datum setzen",
    description: "Heutiges Datum setzen",
    tags: ["Date", "Today"],
    triggers: [
        openhab_jsscripting_base.TimeOfDayTrigger("00:00"),
    ],
    execute: (action, input) => {
        openhab_jsscripting_base.postUpdate("Today", new openhab_jsscripting_base.DateTimeType());
    }
});

```

or

```javascript
const {getLogger, createRule, TimeOfDayTrigger, postUpdate, DateTimeType} = require("openhab-jsscripting-base");
const logger = getLogger("my-logger");

const rule0 = createRule({
    name: "Heutiges Datum setzen",
    description: "Heutiges Datum setzen",
    tags: ["Date", "Today"],
    triggers: [
        TimeOfDayTrigger("00:00"),
    ],
    execute: (action, input) => {
        postUpdate("Today", new DateTimeType());
    }
});

```
