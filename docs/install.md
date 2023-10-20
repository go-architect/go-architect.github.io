---
sidebar_position: 2
---

# Installation

## Requirements

- Go v1.19
- GoCyclo (https://pkg.go.dev/github.com/fzipp/gocyclo) for Cyclomatic complexity metrics
- GoCognit (https://pkg.go.dev/github.com/uudashr/gocognit) for Cognitive complexity metrics

## Installation Process

At the moment, installing Go-Architect can only be done manually, by executing the following commands:
### MacOS
```bash
git clone https://github.com/go-architect/go-architect
cd go-architect
make install-macos
```

### Linux
```bash
git clone https://github.com/go-architect/go-architect
cd go-architect
make build-linux
```

### Windows
```bash
git clone https://github.com/go-architect/go-architect
cd go-architect
make build-windows
```


## Troubleshooting

- Set your `~/.goarchitect/environment` file containing the path to your Go binaries.
  - On MacOS (if Go was installed via Homebrew):
    ```bash
    echo $GOBIN:/opt/homebrew/bin > ~/.goarchitect/environment
    ```
