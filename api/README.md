# Test Runner

This is repository for Test Runner service.  
(Update)

## Poetry on development environment

### Install Poetry if you don't have it

```bash
curl -sSL https://install.python-poetry.org | python3 -
```

or specify a python version

```bash
curl -sSL https://install.python-poetry.org | /c/python312/python -
```

### Install dependencies

#### Create the virtual environment in the project directory

By default, Poetry creates virtual environments in a central location. To create the virtual environment inside the project directory, run:

```bash
poetry config virtualenvs.in-project true
```

#### Install dependencies

```bash
poetry install
```

### Authenticate with Aws CodeArtifact

The authentication token is valid for 12 hours. So you need to run this command every 12 hours.

```bash
export CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token \
  --domain {domain} \
  --domain-owner {domain-owner-id} \
  --query authorizationToken \
  --output text)
```

### VS Code Python interpreter setting

In VS Code, set the Python interpreter to the virtual environment created by Poetry. You can find the path to the virtual environment by running:

```bash
poetry env info --path
```

Then, in VS Code, open the Command Palette (Ctrl+Shift+P), type "Python: Select Interpreter", and select the interpreter from the path you found.

## Build docker image

### Export the CodeArtifact token

```bash
export CODEARTIFACT_AUTH_TOKEN=$(aws codeartifact get-authorization-token \
  --domain {domain} \
  --domain-owner {domain-owner-id} \
  --query authorizationToken \
  --output text)
```

### Build the docker image

```bash
docker build   --secret id=codeartifact,env=CODEARTIFACT_AUTH_TOKEN \
    -t my-app:latest .
```
