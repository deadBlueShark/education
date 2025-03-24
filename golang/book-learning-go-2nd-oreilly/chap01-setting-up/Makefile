.DEFAULT_GOAL := clean

.PHONY:fmt vet build run clean

# Indentation in Makefile must be Tab, not Space
fmt:
	go fmt ./...

vet: fmt
	go vet ./...

build: vet
	mkdir custom_build
	go build -o custom_build

run: build
	echo "Running Output:"
	./custom_build/hello_world
	echo "End program."

clean: run
	rm -rf custom_build
