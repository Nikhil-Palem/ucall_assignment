from fastapi import FastAPI
from .database import engine, Base
from .routers import books
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)


app.include_router(books.router, prefix="/api")
