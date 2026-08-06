##
# author @remstef
##
SHELL:=/bin/sh

.PHONY: help
help:
	@echo "Available targets:"
	@$(MAKE) -p Makefile 2>/dev/null | grep -E '^[a-zA-Z0-9_-]+:' | grep -v '^\.' | grep -v 'Makefile' | sed 's/:$$//' | sort | uniq

.PHONY: dev
dev:
	@echo Starting dev server
	cd nextjs-app && pnpm run dev

.PHONY: format
format:
	@echo Formatting source code
	cd nextjs-app && pnpm run format
	
.PHONY: build
build:
	@echo Building static app
	cd nextjs-app && pnpm run build

.PHONY: start
start: build
	@echo Running static app
# cd nextjs-app && pnpm run start
	cd nextjs-app && npx serve@latest out

.PHONY: update
update:
	@echo Updating packages
	cd nextjs-app && pnpm up --latest && pnpm install

.PHONY: install
install:
	@echo Installing packages
	cd nextjs-app && pnpm install

.PHONY: cleancache
cleancache:
	@echo Cleaning cached files and directories
	rm -rf nextjs-app/out && rm -rf nextjs-app/.next 

.PHONY: ngrok
ngrok:
	@echo "Forwarding app to ngrok web address"
	@echo "To set up ngrok, create an account at ngrok.io"
	@echo "Register your personal authoken: 'ngrok config add-authtoken <auth-token>'"
	ngrok http 3000