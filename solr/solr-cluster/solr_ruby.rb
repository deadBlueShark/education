require 'rsolr'

solr = RSolr.connect(url: 'http://localhost:8981/solr/hello-solr')

res = solr.get('select', params: { q: '*:*' })

puts "Result Count: #{res['response']['numFound']}"
res['response']['docs'].map do |doc|
  pp doc
end
