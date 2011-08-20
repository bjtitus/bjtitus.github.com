# ignore the "bit" stuff.. only relevant to my custom jekyll fork

desc 'create new post or bit. args: type (post, bit), title, future (# of days)'
# rake new type=(bit|post) future=0 title="New post title goes here" slug="slug-override-title"
task :new do
  require 'rubygems'
  require 'chronic'
  
  type = ENV["type"] || "post"
  title = ENV["title"] || "New Title"
  future = ENV["future"] || 0
  # TODO: Use try instead: slug = ENV["slug"].try(:gsub, ' ','-') 
  if(ENV["slug"] != nil)
    slug = ENV["slug"].gsub(' ','-').downcase
  else
    slug = title.gsub(' ','-').downcase
  end

  if type == "bit"
    TARGET_DIR = "_bits"
  elsif future.to_i < 3
    TARGET_DIR = "_posts"
  else
    TARGET_DIR = "_drafts"
  end

  if future.to_i.zero?
    filename = "#{Time.new.strftime('%Y-%m-%d')}-#{slug}.markdown"
  else
    stamp = Chronic.parse("in #{future} days").strftime('%Y-%m-%d')
    filename = "#{stamp}-#{slug}.markdown"
  end
  path = File.join(TARGET_DIR, filename)
  post = <<-HTML
--- 
layout: TYPE
title: "TITLE"
date: DATE
---

HTML
  post.gsub!('TITLE', title).gsub!('DATE', Time.new.to_s).gsub!('TYPE', type)
  File.open(path, 'w') do |file|
    file.puts post
  end
  puts "new #{type} generated in #{path}"
  system "open -a textmate #{path}"
end

desc 'nuke, build and compass'
task :generate do
  isLive = ENV['live']
  refreshCache = ENV['refresh']
  require 'yaml'
  require 'fileutils'
  config = YAML.load(File.read("_config.yml"))
  sh 'rm -rf _site'
  if(isLive == "yes")
    puts "Pushing Live!"
    sh 'cat parent_config.rb remote_config.rb > config.rb'
    # need to make a symbolic link to the appropriate config file
    sh('smusher ./js')
    sh('smusher ./images')
    
    currentConf = YAML.load(File.read("_remoteconfig.yml"))
    config["static_path"] = currentConf["static_path"]
    config["static_template"] = currentConf["static_template"]
    
    combinedname = makeCSS('./sass/', config["combined_css_name"])
    if(combinedname != 0)
      config["combined_css_name"] = combinedname
    end
    File.open("_config.yml", 'w'){ |f| YAML.dump(config, f) }
    jekyll('http://bjtitus.net')
    #if(refreshCache == "yes")
      s3sync('./_site/css', 'publicfolder/blog/templates', 'gzip')
      s3sync('./_site/js', 'publicfolder/blog/templates', 'gzip')
      s3sync('./_site/images', 'publicfolder/blog/templates')
    #end
  else
    puts "Starting Local."
    sh 'cat parent_config.rb local_config.rb > config.rb'
    
    currentConf = YAML.load(File.read("_localconfig.yml"))
    config["static_path"] = currentConf["static_path"]
    config["static_template"] = currentConf["static_template"]
    
    combinedname = makeCSS('./sass/', config["combined_css_name"])
    if(combinedname != 0)
      config["combined_css_name"] = combinedname
    end
    File.open("_config.yml", 'w'){ |f| YAML.dump(config, f) }
    jekyll('/Users/bjtitus/Dropbox/Projects/blog/_site/')
  end
  sh 'rm -rf config.rb'
end

def makeCSS(*args)
  path = args[0]
  combined_css_name = args[1]
  
  modified_time = 0
  Dir.foreach(path) do |item|
    if not(item.include? "DS_Store") && (item != "..") && (item != ".")
      puts("Files: " + path + item)
      if modified_time == 0
        modified_time = File.mtime(path + item)
      elsif modified_time < File.mtime(path + item)
        modified_time = File.mtime(path + item)
      end
    end
  end
  modified_time_string = modified_time.strftime("%s")
  puts("Modified: " + modified_time_string + " | Recorded Time: " + combined_css_name.split('-')[1].split('.')[0])
  if modified_time_string != combined_css_name.split('-')[1].split('.')[0]
    sh 'compass compile'
    sh 'rm -rf ./css/*.min.css'
    FileUtils.mv('./css/combined.css', "./css/combined-#{modified_time_string}.min.css")
    #sh "juicer merge ./css/combined.css -o ./css/combined-#{modified_time_string}.min.css --force"
    return "combined-#{modified_time_string}.min.css"
  else
    return 0
  end
end

def jekyll(*args)
  # time cat to give me generation times
  # I'm just curious about how long it takes each time
  # no, time cat was not one of the thundercats
  url = args[0]
  sh "jekyll --url #{url} | time cat"
end

def s3sync(*args)
  local   = args[0]
  s3_dest = args[1]
  mime_type = args[2]
  content_encoding = args[3]
  
  puts local

  if local == nil || s3_dest == nil 
    puts "syntax aws_cf_sync.rb local_source s3_dest"
    exit
  end

  config = "#{Dir.pwd}/s3.config"
  if !File.exists?(config)
    puts "please setup your s3.config file"
    exit
  end

  s3_dest   = s3_dest.split('/')
  s3_bucket = s3_dest.shift
  s3_path   = s3_dest.join('/')

  s3_path += '/' unless s3_dest.length == 0
  
  extras = ''
  
  #if(mime_type)
  #  extras += '--mime-type "' + mime_type + '"'
  #end
  
  #if(content_encoding)
  #   extras += ' --add-header "Content-Encoding: ' + content_encoding + '"'
  #end

  %x[ s3cmd -c #{config} put --recursive #{local} s3://#{s3_bucket}/#{s3_path} --add-header "Cache-Control: max-age=315360000" --acl-public ]

  files = %x[ cd #{local} && find . -type f ].split("\n").map do |f| 
    
    s3_path + local.split('/')[2] + "/" + f[2,f.length]
  end
  
  puts files

  #invalidate(files)
end

def invalidate(*args)
  require 'rubygems'
  require 'hmac-sha1'
  require 'net/https'
  require 'base64'
  require 'yaml'
  config = YAML.load(File.read("localConfig.yml"))

  if args.length < 1
    puts "usage: aws_cf_invalidate.rb file1.html dir1/file2.jpg ..."
    exit
  end

  paths = '<Path>/' + args.join('</Path><Path>/') + '</Path>'

  date = Time.now.utc
  date = date.strftime("%a, %d %b %Y %H:%M:%S %Z")
  digest = HMAC::SHA1.new(config['s3_secret'])
  digest << date

  uri = URI.parse('https://cloudfront.amazonaws.com/2010-11-01/distribution/' + config['cf_distribution'] + '/invalidation')

  req = Net::HTTP::Post.new(uri.path)
  req.initialize_http_header({
    'x-amz-date' => date,
    'Content-Type' => 'text/xml',
    'Authorization' => "AWS %s:%s" % [config['s3_access'], Base64.encode64(digest.digest)]
  })

  req.body = "<InvalidationBatch>" + paths + "<CallerReference>ref_#{Time.now.utc.to_i}</CallerReference></InvalidationBatch>"

  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  res = http.request(req)

  puts res.code
  puts res.body
end