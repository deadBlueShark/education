class A
  def hello
    puts 'HELO'
  end
end

class B < A
end

A.new.hello
B.new.hello
