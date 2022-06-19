
#!/bin/bash
set -e
if [ ! -f .env ]
then
  export $(cat .env | xargs)
fi