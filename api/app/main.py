import uvicorn

from fastapi import FastAPI
from common import date_utils

app = FastAPI()

@app.get("/health")
def health():
    return {
        "status": "ok nha!!",
        "date": date_utils.from_string("2023-01-01")
    }

if __name__ == "__main__":
    # Run the app with: uvicorn main:app --reload
    uvicorn.run(app, host="0.0.0.0", port=8080)
