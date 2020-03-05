#!/bin/sh

# Reference: https://github.com/gjtorikian/html-proofer#using-on-the-command-line
bundle exec htmlproofer --url-ignore '/Nathan Friend - Résumé.pdf' \
                        ./dist
