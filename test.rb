class Hello
  A = [10]
  B = [11]

  def print
    p A, B
  end

  private_constant :A, :B
end
Hello.new.print

puts __FILE__
