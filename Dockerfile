# Use an official Python 3.11 runtime as a parent image
FROM python:3.12-slim

# Set the working directory
WORKDIR /app

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

# Run the compiled app
ENTRYPOINT ["reflex", "run", "--env", "prod", "--backend-only", "--loglevel", "debug" ]
