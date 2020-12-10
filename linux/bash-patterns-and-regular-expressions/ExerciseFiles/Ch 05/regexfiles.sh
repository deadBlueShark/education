#!/bin/bash

cd backupfiles
shopt -s extglob

XGLOB='@(Archive|Backup)-[0-9][0-9][0-9][0-9]-[0-9][0-9]-@([0-9]|[0-9][0-9])@(@(.bak|.tar)?(.bz2|.gz|.xz)|.tgz)'
REGEX='^(Archive|Backup)-[0-9]{4}-[0-9]{2}-[0-9]{1,2}((.bak|.tar)(.bz2|.gz|.xz)|.tgz)?'
for FILE in * ;do
    if [[ $FILE =~ $REGEX ]] ;then
        echo "$FILE matches the regex"
    fi
done

