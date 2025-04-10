# Use an official Python 3.11 runtime as a parent image
FROM python:3.12-slim
 
WORKDIR /app

# Install system dependencies required by Reflex
RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install virtualenv
RUN python -m venv /env

# Activate the virtual environment
ENV VIRTUAL_ENV=/env
ENV PATH="/env/bin:$PATH"

# Copy the application's requirements.txt and run pip to install all dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application source code
COPY . ./

RUN reflex export --frontend-only
CMD ["reflex", "run", "--env", "prod", "--host", "0.0.0.0", "--port", "8080"]
