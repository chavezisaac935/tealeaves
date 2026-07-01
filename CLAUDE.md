# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tealeaves is a flashcard application with spaced repetition, text-to-speech, and RAG-powered dialogue. Users create Markdown flashcards, organize them into decks, and can converse with their cards via microphone using natural language. The stack targets Azure as the cloud provider.

## Architecture

Two independent services:

- **Backend** (`main.py` + `.venv/`): FastAPI (Python 3.9) served by uvicorn. Planned to integrate LangChain, LangDB, and the OpenAI API for RAG and TTS.
- **Frontend** (`my-app/`): React 19 + TypeScript 6, bundled by Vite 8. Communicates with the backend at `http://127.0.0.1:8000`.

## Commands

### Backend

```bash
# Activate the virtual environment first
source .venv/bin/activate

# Run the dev server (hot-reload)
uvicorn main:app --reload
```

Backend runs on `http://127.0.0.1:8000`. API docs available at `/docs`.

### Frontend

```bash
cd my-app

npm run dev      # Vite dev server on http://localhost:5173
npm run build    # Type-check + production build
npm run lint     # oxlint (React + TypeScript + oxc plugins)
npm run preview  # Preview the production build
```

## Key Details

- CORS is explicitly configured in `main.py` to allow `localhost:5173` (Vite) and `localhost:3000` (CRA). If the frontend port changes, update `origins` there.
- The `.venv` is managed by `uv`. Add Python dependencies with `uv pip install <pkg>` (not plain `pip`) to keep the lockfile in sync.
- oxlint enforces `react/rules-of-hooks` as an error and `react/only-export-components` as a warning — don't suppress these.
- No test suite exists yet. When adding one, integrate it into the relevant `package.json` or backend tooling rather than adding a standalone script.