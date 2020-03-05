#!/usr/bin/env ruby
# frozen_string_literal: true

require 'html-proofer'

dist_dir = File.expand_path(File.join(__dir__, '../dist'))
HTMLProofer.check_directory(dist_dir).run
