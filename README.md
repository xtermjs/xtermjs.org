This repository hosts the code for http://xtermjs.org.



## Running via Codespaces

This project has a custom dev container to enable seamless development from a [Codespace](https://github.com/features/codespaces).

1. Create a Codespace
2. When the `postCreateCommand` finishes in the terminal run the default build task (ctrl+shift+b) or run `bundle exec jekyll serve` manually to run the website.



## Running locally

### Prerequisites

Linux dependencies:

```
sudo apt install zlib1g-dev
```

You also need [ruby](https://www.ruby-lang.org) and [bundler](https://bundler.io) installed.

### Installing dependencies and running

```bash
# Install dependencies
bundle install

# Serve the website
bundle exec jekyll serve
```



## Update API documentation

```bash
npm i
./bin/update-docs
```
