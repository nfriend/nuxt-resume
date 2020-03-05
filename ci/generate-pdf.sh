#!/bin/sh

mkdir dist

chromium-browser --headless \
                 --disable-gpu \
                 --disable-software-rasterizer \
                 --disable-dev-shm-usage \
                 --no-sandbox \
                 --print-to-pdf="./dist/Nathan Friend - Résumé.pdf'" \
                 --hide-scrollbars \
                 file://$CI_PROJECT_DIR/dist/index.html
