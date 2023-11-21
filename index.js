const PORT = process.env.PORT || 5000;
const express = require('express');
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const clientRequestHandler = express();
const JWT_SECRET = process.env.JWT_SECRET;