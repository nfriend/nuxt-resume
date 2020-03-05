#!/usr/bin/env ruby
# frozen_string_literal: true

require 'html-proofer'

dist_dir = File.expand_path(File.join(__dir__, '../dist'))
HTMLProofer.check_directory(dist_dir, {
  :url_ignore => ['/Nathan Friend - Résumé.pdf'],

  # LinkedIn does user-agent filtering:
  # https://github.com/gjtorikian/html-proofer/issues/215
  :typhoeus => {
    :headers => { "User-Agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:73.0) Gecko/20100101 Firefox/73.0" }
  }
}).run
