import os

from datetime import datetime
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv("./.env")
MONGOURL = os.getenv("mongourl")

client = MongoClient(MONGOURL)
db = client.helloworld

USER_DB = db["users"]


def main():
    # Initialise data format

    user_data = {
        "Name": "Jason Gu",
        "School": "School of Praying",
        "Year": 3,
        "Degree": ["Computer Science", "Law"],
        "Hobbies": ["/pray", "Eating HDL"],
        "Date Created": datetime.now(),
    }

    # Saves the data record to the database
    USER_DB.insert_one(user_data)

    # Sanity check
    print("Successfully added!")


if __name__ == "__main__":
    main()
