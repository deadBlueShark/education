# How to use:
# Run CMD:
# ruby basic_network_scanning.rb <IP address>

require 'socket'

def scan_port(target_ip, ports)
  ports.each do |port|
    sock = TCPSocket.new(target_ip, port)
    puts "Port #{port} open"
    sock.close
  rescue
    puts "Port #{port} closed"
  end
end

ip_address = ARGV[0]
ports_to_scan = [22, 80, 443, 8080]

scan_port(ip_address, ports_to_scan)
