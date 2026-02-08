#!/bin/bash
# Build script for Version 1 standalone deployment

echo "Building Version 1..."

# Load v1 environment and build
cp .env.v1 .env.local
npm run build

# Move build output to v1-specific directory
rm -rf dist-v1
mv dist dist-v1

echo "✓ Version 1 build complete in dist-v1/"
echo "Deploy the dist-v1/ directory to your hosting service for Version 1"
