#!/bin/bash

shopt -s nocasematch 
for file in *; do
	if [[ $file = file*txt ]] ;then
		echo $file
	fi
done


