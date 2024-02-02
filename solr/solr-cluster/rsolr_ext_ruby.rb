require 'rsolr-ext'
solr = RSolr::Ext.connect(url: 'http://localhost:8981/solr/hello-solr')
luke_response = solr.luke
p luke_response['index']
p luke_response['fields']
p luke_response['info']

p solr.find(queries: "*:*")
