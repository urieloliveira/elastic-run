docker pull docker.elastic.co/elasticsearch/elasticsearch:8.5.0-arm64

docker pull docker.elastic.co/kibana/kibana:8.5.0-arm64

docker pull docker.elastic.co/apm/apm-server:8.5.0-arm64

docker pull docker.elastic.co/logstash/logstash:8.5.0-arm64

docker run --name elasticsearch --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -t docker.elastic.co/elasticsearch/elasticsearch:8.5.0-arm64

docker run --name kibana --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.5.0-arm64

docker exec -it elasticsearch /usr/share/elasticsearch/bin/elasticsearch-reset-password -u elastic

docker exec -it elasticsearch /usr/share/elasticsearch/bin/elasticsearch-create-enrollment-token -s kibana

# enrollment token = eyJ2ZXIiOiI4LjUuMCIsImFkciI6WyIxNzIuMzEuMC4yOjkyMDAiXSwiZmdyIjoiZDZiODFkNjc2NWI3YWFlODczMGVmZDk0NmNhYzJjNGNjNDA4ZTc1OTNmZjQ1MjI3MmFlNDg0NDY2MWQ5YmMxOSIsImtleSI6Ill5RFVaNFFCUzBpd3k5SUVMUXR2OkMway10UFFxU3EyRExwTXlpbG5NLWcifQ==
# password = *OZFGS40HT=pcwMG7DsT

docker run --name apm-server \
    --volume="$(pwd)/apm-server.docker.yml:/usr/share/apm-server/apm-server.yml:ro" \
    --net elastic \
    -p 8200:8200 \
    docker.elastic.co/apm/apm-server:8.5.0-arm64 \
    --strict.perms=false -e

docker run --rm -it --name logstash \
    --volume="$(pwd)/pipeline/:/usr/share/logstash/pipeline/" \
    --net elastic \
    -p 9600:9600 \
    -p 5044:5044 \
    docker.elastic.co/logstash/logstash:8.5.0-arm64

curl -L -O https://raw.githubusercontent.com/elastic/apm-server/master/apm-server.docker.yml
