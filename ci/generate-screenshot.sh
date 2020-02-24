#!/bin/sh

chromium-browser --headless \
                 --disable-gpu \
                 --no-sandbox \
                 --screeenshot="screenshot.png" \
                 --window-size=1200,630 \
                 --hide-scrollbars \
                 file://$CI_PROJECT_DIR/dist/index.html
