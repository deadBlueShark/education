# Named arguments
def print_info name:, age:, address: "HCM"
  puts "Name: #{name}. Age: #{age}. Address: #{address}."
end

print_info(age: 28, name: "Nguyen", address: "DN")
print_info(age: 28, name: "Nguyen")

# Splat arguments
def print_list_names *name
  p name
end

print_list_names
print_list_names("Nguyen", "Cris", "David")

# Keyword-based splat arguments
def print_options **option
  p option
end

print_options
print_options(name: "Nguyen", age: 29)
