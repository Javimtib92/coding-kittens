# List all available commands
default:
    @just --list

# Development server
dev:
    bun -b run dev

# Alias for dev command
start: dev

# Build the project with type checking
build:
    bun -b run build

# Preview the built project
preview:
    bun -b run preview

# Run Astro CLI commands
astro *args:
    bun -b run astro {{args}}

# Lint all files using BiomeJS
lint *args:
    bun -b run lint {{args}}

# Format all files BiomeJS
format *args:
    bun -b run format {{args}}

# Check runs multiple BiomeJS tools at once. It formats, lints and organizes imports
check *args:
    bun -b run check {{args}}

# Install dependencies
install-deps:
    bun i
    
# Alias for install command
i: install-deps
