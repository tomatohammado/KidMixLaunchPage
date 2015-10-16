#!/usr/bin/env bash

set -e

CHANNEL=$1
MESSAGE=$2
WEBHOOK_URL="https://hooks.slack.com/services/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"

if [ -z "$CHANNEL" ]; then
    echo "Channel not set, aborting"
    exit 1;
fi

if [ -z "$MESSAGE" ]; then
    echo "Message not set, aborting"
    exit 1;
fi

curl -X POST --data-urlencode "payload={\"channel\": \"#${CHANNEL}\", \"username\":\"builder\", \"text\":\"${MESSAGE}\"}" \
    $WEBHOOK_URL