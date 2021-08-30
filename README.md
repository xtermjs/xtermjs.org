This repository hosts the code for http://xtermjs.org.



## Prerequisites

Linux dependencies:

```
sudo apt install zlib1g-dev
```

You also need [ruby](https://www.ruby-lang.org) and [bundler](https://bundler.io) installed.



## Running the website locally

```bash
# Install dependencies
bundle install

# Serve the website
bundle exec jekyll serve
```



## Update API documentation

```bash
yarn
./bin/update-docs
```