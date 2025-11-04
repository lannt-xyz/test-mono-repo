import uvicorn

from fastapi import FastAPI

app = FastAPI()

@app.get("/welcome")
def health():
    return {
        "status": "ok nha!!"
    }

if __name__ == "__main__":
    # Run the app with: uvicorn main:app --reload
    uvicorn.run(app, host="0.0.0.0", port=8080)
