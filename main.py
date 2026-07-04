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
    id: int
    front: str
    back: str
    reviewCount: int

cards = [
    {"id":1, "front": "Bye", "back": "Goodbye", "reviewCount": 0},
    {"id":2, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"id":3, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"id":4, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"id":5, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"id":6, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"id":7, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"id":8, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
    {"id":9, "front": "Hello", "back": "Goodbye", "reviewCount": 0},
]

users = {
    '1':"Isaac",
    '2':"Ellie",
    '3':"Irene"
}

@app.get("/users/{user_id}")
async def read_item(user_id: Annotated[int, Path(gt = 0, lt = 4)]) -> UserResponse:
    if str(user_id) not in users:
        raise HTTPException(status_code = 404, detail="This user was not found")
    return UserResponse(user=users[str(user_id)])

@app.get("/cards")
async def get_cards() -> list[FlashCard]:
    return cards

@app.post("/review_count/{card_id}")
async def update_review_count(card_id: int):
    card_to_mutate = next((card for card in cards if card["id"] == card_id), None)
    card_to_mutate["reviewCount"]+=1
    return card_to_mutate
