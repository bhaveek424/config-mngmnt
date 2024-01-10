export const data = [{ taskboard: {
    enable: true,
    orgs: []
  },
  call_all_mrx_api: {
    enable: true,
    orgs: [
      "xto10x"
    ]
  },
//   slack_integration: {
//     knowMoreLink: "https://xto10x.gitbook.io/getting-started-on-10xgoals/slack-integration"
//   },
  feedback_module_integration: {
    enable: true,
    orgs: [
      "xto10x",
      "372e7dc9-b346-4c56-855f-75024309660f",
      "29945f2e-b095-46af-88c3-f87a02cf7010",
      "71f40c6a-69fd-4b50-852a-f3538330eddb",
      "ba404a71-01cb-4ec0-8faf-2d2dda5e0cfb",
      "ba404a71-01cb-4ec0-8faf-2d2dda5e0cfa"
    ]
  }}]

  type TestProps = (typeof data)[number]