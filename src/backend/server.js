const express = require('express');
const dotev = require('dotenv');

dotev.config();

const ENV = process.env.NODE_ENV;
const port = process.env.PORT || 3000;