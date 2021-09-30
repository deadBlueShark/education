main = do
  print "Who is the email for?"
  recipient <- getLine
  print "What is the email title?"
  title <- getLine
  print "Who is the author?"
  author <- getLine
  -- print ("Dear, " ++ recipient ++ ",\n" ++
  --   "Thanks for buying " ++ title ++ "\nthanks, \n" ++ author)
  print (renderFullEmail recipient title author)

renderHeader recipient = "Dear, " ++ recipient ++ "\n"

renderBody title = "Thanks for buying " ++ title ++ "\n"

renderSignature author = "Bye, " ++ author

renderFullEmail recipient title author = renderHeader recipient ++
                                         renderBody title ++
                                         renderSignature author