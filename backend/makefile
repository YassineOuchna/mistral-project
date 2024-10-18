# Back port
BACKEND_PORT=8000

# Create a virtual environment and install dependencies
install:
	python3 -m venv .venv && source .venv/bin/activate && pip install -r requirements.txt

# Run the backend
run:
	source .venv/bin/activate && uvicorn app.main:app --reload --port $(BACKEND_PORT)

# Clean the environment
clean:
	rm -rf .venv

.PHONY: install run clean
