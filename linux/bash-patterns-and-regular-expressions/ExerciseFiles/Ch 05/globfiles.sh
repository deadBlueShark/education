#!/bin/bash

cd backupfiles
shopt -s extglob

XGLOB='@(Archive|Backup)-[0-9][0-9][0-9][0-9]-[0-9][0-9]-@([0-9]|[0-9][0-9])@(@(.bak|.tar)?(.bz2|.gz|.xz)|.tgz)'
for FILE in * ;do
    if [[ $FILE == $XGLOB ]] ;then
        echo "$FILE matches the extended glob"
    fi
done

