#!/usr/bin/env node

"use strict";
const generator = require("./critical");
const fs = require('fs');
const url = process.env.URL;
const dimensions = process.env.DIMENSIONS || "1300x900";
const location = process.env.LOCATION || "/output/critical.css";

generator
  .generateCritical(url, dimensions, location)
  .then((css) => {
    fs.writeFileSync(location, css);
  })
  .catch((err) => {
    // console.error(err);
    console.error(err.name);
    console.error(err.message);
  });
