#!/usr/bin/env bash

echo 'Copying the "dist" directory to "public"...'
cp -r dist public

# Run gzip on the output and create a .gz version of each relevant file
# Based on https://webmasters.stackexchange.com/a/119671
echo "Creating a gzip'd version of each of the relevant static files..."
find public \( -name '*.html' -o -name '*.css' -o -name '*.js' -o -name '*.svg' \) -print0 \
  | xargs -0 gzip --best --keep --verbose
