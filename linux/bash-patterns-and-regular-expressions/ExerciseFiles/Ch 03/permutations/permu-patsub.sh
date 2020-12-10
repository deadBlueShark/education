#!/bin/bash

if [[ -z $1 ]] ;then
	echo "Please provide a permutation file in the format of"
	echo "abcde"
	echo "1234"
	echo "Exiting"
	exit 1
fi

perm() {
  local items="$1"
  local out="$2"
  local i
  [[ "$items" == "" ]] && echo "$out" && return
  for (( i=0; i<${#items}; i++ )) ; do
    perm "${items:0:i}${items:i+1}" "$out${items:i:1}"
  done
  }
while read line ; do perm $line ; done < $1
