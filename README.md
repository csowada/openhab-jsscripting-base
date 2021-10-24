# Introduction

The bibliothke is used together with openHAB 3.1. It is written in TypeScript and should help to write good rules.

## Install

In your openHAB folder root.

* Create a folder ``automation/lib/javascript/personal``

* Install library from github

```bash
cd automation/lib/javascript/personal
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