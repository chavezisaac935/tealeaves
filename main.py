from typing import Annotated

from fastapi import FastAPI, HTTPException, Path, Response
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Define the origins that are allowed to make requests to this backend
origins = [
    "https://lively-sky-0fc85c010.7.azurestaticapps.net",
    "http://localhost:5173",
    "http://localhost:3000",
]

# Add CORS middleware to the application
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allows all HTTP methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"], # Allows all headers
)

class UserResponse(BaseModel):
    user: str

class FlashCard(BaseModel):
    front: str
    back: str
    reviewCount: int

cards = [
    {"front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"front": "Hello", "back": "Goodbye", "reviewCount": 0},
]

users = {
    '1':"Isaac",
    '2':"Ellie",
    '3':"Irene"
}

@app.get("/items/{item_id}")
async def read_item(item_id: Annotated[int, Path(gt = 0, lt = 4)]) -> UserResponse:
    if str(item_id) not in users:
        raise HTTPException(status_code = 404, detail="This user was not found")
    return UserResponse(user=users[str(item_id)])

@app.get("/cards")
async def get_cards() -> list[FlashCard]:
    return cards
    