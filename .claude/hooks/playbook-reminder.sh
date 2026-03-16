#!/bin/bash
# Reminds to update playbook before committing
INPUT=$(cat)
COMMAND=$(echo "$INPUT" | jq -r '.tool_input.command // empty')

if echo "$COMMAND" | grep -q "^git commit"; then
  echo "PLAYBOOK REMINDER: Before committing, update ~/DATA/playbooks/web-presentations-playbook.md with any decisions made since last entry. If unsure about verdict — ask Sati." >&2
fi

exit 0
