# List all available commands
default:
    @just --list

# Development server
dev:
    npm run dev

# Alias for dev command
start: dev

# Build the project with type checking
build:
    npm run build

# Preview the built project
preview:
    npm run preview

# Run Astro CLI commands
astro *args:
    npm run astro {{args}}

# Format all files using Prettier with Astro and Tailwind plugins
format:
    npm run format

# Install dependencies
install-deps:
    npm install