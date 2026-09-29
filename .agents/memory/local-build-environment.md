---
name: Local build environment
description: Environment difference between managed web workflows and direct shell builds
---

Direct shell build commands do not inherit the managed web workflow's runtime variables. When verifying the production bundle locally, supply both a valid PORT and BASE_PATH in the command environment.

**Why:** The first direct build failed without PORT, and the next failed without BASE_PATH, even though the managed preview workflow ran successfully.

**How to apply:** For a direct web artifact build in this workspace, explicitly set both variables rather than treating a missing-variable build failure as a source-code regression. Prefer the workflow environment for preview checks.