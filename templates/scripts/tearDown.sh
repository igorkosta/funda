#!/bin/bash

DYNAMO=`ps -ef | awk '/[d]ynamo/{print $2}'`
echo $DYNAMO
if [[ "$DYNAMO" -gt 0 ]]
then
  echo 'trying to kill dynamodb first'
  kill $DYNAMO
else
  echo 'dynamodb is not running'
fi;

if [ ! -f .offline.pid ]
then
  echo ".offline.pid doesn't exist"
else
  echo 'killing serverless offline'
  kill `cat .offline.pid`
  rm .offline.pid
fi;
