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

# Build the Reflex app
RUN reflex init
RUN reflex export --frontend-only

# Expose the port the app runs on
EXPOSE 8080

# Run the compiled app
CMD ["reflex", "run", "--env", "prod", "--backend-only", "--host", "0.0.0.0", "--port", "8080"]
