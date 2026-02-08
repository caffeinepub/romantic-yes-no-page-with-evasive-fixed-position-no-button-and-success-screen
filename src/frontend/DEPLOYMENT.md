# Deployment Guide: Separate Version 1 and Version 2 Deployments

This application supports building two separate standalone frontend deployments from the same codebase. Each version has its own unique question text and can be deployed to a different URL.

## Overview

- **Version 1**: Question for "Cia"
- **Version 2**: Question for "Khusnul"

Each version is a complete standalone app that loads directly at the root route (`/`) with its own success screen at `/success`.

## Building the Versions

### Option 1: Using Build Scripts (Recommended)

From the `frontend/` directory:

