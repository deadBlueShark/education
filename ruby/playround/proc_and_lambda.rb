# Need to pass exactly number of parameters
lambda_sum = lambda {|a, b, c| a + b + c}

# Can pass less than, more than number of parameters
# to_i to prevent passing less parameters, the missing parameters become nil
proc_sum = Proc.new{|a, b, c| a.to_i + b.to_i + c.to_i}


# Test return in lambda, proc, block
def call_lambda
  lambda_return = lambda do
    return 10
  end

  lambda_return.call
  30
end

def call_proc
  proc_return = Proc.new do
    return 10
  end

  proc_return.call
  30
end

def call_block
  [4, 5, 6].map {|a| return a * a }

  30
end

puts "Call lambda: #{call_lambda}" # 30
puts "Call proc: #{call_proc}" # 10
puts "Call block: #{call_block}" # 16

# => A return within a block, proc returns from the scope that the block is within
