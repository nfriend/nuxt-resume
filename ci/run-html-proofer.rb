#!/usr/bin/env ruby
# frozen_string_literal: true

require 'rubygems'
require 'bundler/setup'
require 'html-proofer'

dist_dir = File.expand_path(File.join(__dir__, '../dist'))
HTMLProofer.check_directory(dist_dir, {
  :url_ignore => ['https://www.linkedin.com/in/nfriend/'],
  :check_html => true,
  :check_opengraph => true,
  :check_favicon => true,
  :check_img_http => true,
  :enforce_https => true
}).run
