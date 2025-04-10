# Build Stage: Use Python to build the static Reflex site
FROM python:3.12-slim as builder

# Create a working directory
WORKDIR /app

# Install system dependencies (if you need them to build wheels, etc.)
# Often you’ll need 'build-essential', 'gcc', or 'libc-dev' for certain pip installs.
RUN apt-get update && apt-get install -y \
    build-essential \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the rest of the code
COPY . .

# Export the Reflex app as a static front-end
RUN reflex export --frontend-only

# Production Stage: Copy the compiled static site into a minimal server (nginx)
FROM nginx:alpine

# Copy only the exported static files from the builder stage
COPY --from=builder /app/.web/_static /usr/share/nginx/html

# Expose port 80 and run NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

