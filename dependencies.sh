#!/bin/bash

# Run npm install commands in the background
npm i dotenv @sendgrid/mail &

# Wait for all background processes to complete
wait

# Print success message
echo "Dependencies installed successfully."
