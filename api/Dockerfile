FROM 644385348015.dkr.ecr.ap-northeast-1.amazonaws.com/python:3.13.1-slim AS builder

RUN pip install poetry

WORKDIR /app
ENV POETRY_VIRTUALENVS_CREATE=false \
    POETRY_NO_INTERACTION=1

COPY pyproject.toml poetry.lock* ./

# Cài deps bằng token truyền từ secret
RUN --mount=type=secret,id=codeartifact \
    TOKEN=$(cat /run/secrets/codeartifact) && \
    export POETRY_HTTP_BASIC_CODEARTIFACT_USERNAME=aws && \
    export POETRY_HTTP_BASIC_CODEARTIFACT_PASSWORD=$TOKEN && \
    poetry install --no-root --only main

# Use the official Python image from the Docker Hub
FROM 644385348015.dkr.ecr.ap-northeast-1.amazonaws.com/python:3.13.1-slim

# Set the working directory in the container
WORKDIR /app

COPY --from=builder /usr/local/lib/python3.13 /usr/local/lib/python3.13
COPY --from=builder /usr/local/bin /usr/local/bin

# Copy the rest of the application code into the container
COPY . .

# Expose the port that the app runs on
EXPOSE 8080

# Command to run the application
CMD ["sh", "-c", "python -m main"]
