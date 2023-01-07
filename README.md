# MongoDB Workshop (29 Dec) - MERN Stack Series

This repository contains the basic codes that was created during the workshop.

## Guide to Running Application

First, run this command in your terminal:

```bash
git clone https://github.com/xbowery/MESS-workshop.git
```

In a separate terminal, start up your MongoDB instance (if you are running on localhost)

### Python Application

If you are running the MongoDB instance from your cloud, please change the value of `mongourl` in the `.env` file accordingly vefore running the steps below.

```bash
cd python

pip install -r requirements.txt

python app.py
```

You should be able to view the data inserted into your database collection. Click "Refresh" in your MongoDBCompass if the change is not reflected initially.

### NodeJS Application

If you are running the MongoDB instance from your cloud, please change the value of `uri` in the `server.js` file accordingly vefore running the steps below.

```bash
cd nodejs

npm install

nodemon server.js
```

Next, type `localhost:4000/insertdata` in your web browser and press Enter. The data will be inserted into your MongoDB instance.

You should be able to view the data inserted into your database collection. Click "Refresh" in your MongoDBCompass if the change is not reflected initially.
