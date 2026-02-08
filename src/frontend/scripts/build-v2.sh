#!/bin/bash
# Build script for Version 2 standalone deployment

echo "Building Version 2..."

# Load v2 environment and build
cp .env.v2 .env.local
npm run build

# Move build output to v2-specific directory
rm -rf dist-v2
mv dist dist-v2

echo "✓ Version 2 build complete in dist-v2/"
echo "Deploy the dist-v2/ directory to your hosting service for Version 2"
