# Example Dockerfile
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy project files to working directory
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Command to run the application
CMD ["python", "run.py"]
