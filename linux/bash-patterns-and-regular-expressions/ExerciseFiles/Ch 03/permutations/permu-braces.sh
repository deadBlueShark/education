#!/bin/bash

if [[ -z $1 ]] ;then
        echo "Please provide a permutation file in the format of"
        echo "abcde"
        echo "1234"
        echo "Exiting"
        exit 1
fi

printbraces()
{
	local VAR='{'
	local end=$(( ${#line} - 1 ))
	for (( i=0; i<${#line}; i++ )); do
  		VAR="${VAR}${line:$i:1},"
	done
	VAR="${VAR%,*}}"
	printf "${VAR}%.0s" $(seq 1 ${#line}) 
} 

for line in $(cat $1);do
	eval echo $(printbraces "$line") 
done


