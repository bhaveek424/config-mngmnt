export const data = [
    {
      show_feedback_synergy: {
        enable: true,
        description: 'This is the description for show feedback configuration'
      },
      disable_upload_hierarchy: {
        note: "Please mark as true if any of the orgs is added",
        enable: false,
        description: 'This is the description for show feedback configuration',
        orgs: [],
      },
      objective_suggestion_AI: {
        description: 'This is the description for show feedback configuration',
        enable: true,
      },
      show_feedback_new_tag: {
        enable: false,
        description: 'This is the description for show feedback configuration'
      },
      review_module_integration: {
        enable: true,
        orgs: [
          "xto10x",
          "372e7dc9-b346-4c56-855f-75024309660f",
          "29945f2e-b095-46af-88c3-f87a02cf7010",
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
        ],
        description: 'This is the description for show feedback configuration'
      },
      reviews_read_only_open_questions: {
        enable: true,
        orgs: ["71f40c6a-69fd-4b50-852a-f3538330eddb"],
        description: 'This is the description for show feedback configuration'
      },
      review_reverse_rating: {
        enable: true,
        orgs: [
          "xto10x",
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
          "d916535b-d456-42b1-aec7-67d58ad61290",
          "94753e57-e515-4085-a511-4a63a5d4b5b2",
        ],
        description: 'This is the description for show feedback configuration'
      },
      open_objective_kr_latency: {
        value: "DISABLED",
        enabled: false,
        description: 'This is the description for show feedback configuration'
      },
      
      review_write_review_v2: {
        excludedOrgs: [
          "62982e84-3acb-4162-9f2c-a845ef5e17b9",
          "f7e046e3-b549-49b7-b34f-3f87bed0e1ef",
          "77dfce77-10fe-4be3-b47c-b872abbb34c3",
          "28e95d74-4264-11ea-96ab-0a5ba2b7c94e",
        ],
        enable: true,
      },
      review_write_review_v3: {
        excludedOrgs: ["d916535b-d456-42b1-aec7-67d58ad61290"],
        enable: true,
      },
      hide_add_personal_objective: {
        enable: true,
        orgs: ["xto10x"],
      },
      show_mrx_synergy: {
        enable: true,
        orgs: ["xto10x", "71f40c6a-69fd-4b50-852a-f3538330eddb"],
      },
      disable_checkin_on_pending_approval: {
        enable: true,
        orgs: [
          "372e7dc9-b346-4c56-855f-75024309660f",
          "29945f2e-b095-46af-88c3-f87a02cf7010",
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
          "ba404a71-01cb-4ec0-8faf-2d2dda5e0cfb",
          "ba404a71-01cb-4ec0-8faf-2d2dda5e0cfa",
        ],
      },
      google_sheets_integration: {
        knowMoreLink:
          "https://xto10x.gitbook.io/getting-started-on-10xgoals/google-sheet-integration",
        addOnLink:
          "https://gsuite.google.com/marketplace/app/test_10xgoals/103927631196",
      },
      app_insight_dashboard: {
        enable: false,
        access_role: "ADMIN",
        orgs: [],
      },
      open_details_page_latency: {
        captureAll: true,
        enabled: false,
        threshold: 2,
      },
    //   custom_range_view_preset: {
    //     orgs: [
    //       {
    //         org_reference_id: "xto10x",
    //         start_month: 4,
    //         end_month: 3,
    //         end_year: "2024",
    //         start_year: "2023",
    //       },
    //       {
    //         org_reference_id: "e781c30b-1c60-4f5f-9267-d97bdecc3ef6",
    //         start_month: 1,
    //         end_month: 6,
    //         end_year: 2023,
    //         start_year: 2023,
    //       },
    //     ],
    //   },
      export_report_v2: {
        excludedOrgs: ["xto10x"],
        enable: true,
      },
      ama_module_integration: {
        enable: true,
        orgs: ["xto10x"],
      },
      microsoft_teams_integration: {
        addOnLink:
          "https://teams.microsoft.com/l/app/950aa4fb-0583-4b13-9b5f-bbc92b9cc376?source=app-details-dialog",
      },
      jira_create_connection_username_addition: {
        enable: true,
        orgs: ["xto10x"],
      },
      write_review_AI_assist: {
        enable: true,
      },
      no_limit_checkin_progress: {
        enable: true,
        orgs: ["xto10x"],
      },
      show_org_hierarchy_to_all: {
        enable: true,
        orgs: [
          "xto10x",
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
          "432c8401-5594-42fa-9ad1-47e5d0bf587c",
          "501d834a-aeeb-4840-aa78-a8497371947c",
        ],
      },
      review_calibration: {
        enable: true,
        orgs: [],
      },
      subscriptionSubtypeMapping: {
        PLATINUM: {
          allTemplatesActive: true,
        },
        COVID_FREEMIUM: {
          allTemplatesActive: true,
        },
        AWARDS_2021: {
          activeSurveyLimitForSubtype: 1,
          allowedTemplateIds: [],
          allTemplatesActive: false,
          allowedTemplateSubtypes: ["AWARDS"],
          disableL1FunctionMapping: true,
        },
        DIAMOND: {
          allTemplatesActive: true,
        },
        SILVER: {
          allTemplatesActive: true,
        },
      },
      lock_edits: {
        enable: true,
        access_role: "ADMIN",
        orgs: ["xto10x", "a376488e-2cb9-498f-a2fe-208d5399ff85"],
      },
      show_write_review_new_top_header: {
        excludedOrgs: ["xto10x"],
        enable: true,
      },
      filter_categories: {
        enable: true,
        filters: [
          {
            filterLabel: "Date of Joining",
            value: "doj",
            enable: true,
          },
          {
            filterLabel: "Department",
            value: "department",
            enable: true,
          },
          {
            filterLabel: "Sub Department",
            value: "sub_department",
            enable: true,
          },
          {
            filterLabel: "Designation",
            value: "designation",
            enable: true,
          },
          {
            filterLabel: "Employee Type",
            value: "employee_type",
            enable: true,
          },
          {
            filterLabel: "Grade",
            value: "grade",
            enable: true,
          },
          {
            orgs: ["71f40c6a-69fd-4b50-852a-f3538330eddb"],
            filterLabel: "Level",
            value: "level",
            enable: true,
          },
          {
            filterLabel: "Manager",
            value: "manager_name",
            enable: true,
            showSearch: true,
          },
          {
            filterLabel: "Gender",
            value: "gender",
            enable: true,
          },
          {
            filterLabel: "Location",
            value: "location",
            enable: true,
          },
          {
            filterLabel: "Country",
            value: "country",
            enable: true,
            showSearch: true,
          },
          {
            filterLabel: "State",
            value: "state",
            enable: true,
          },
          {
            filterLabel: "City",
            value: "city",
            enable: false,
          },
          {
            filterLabel: "Street",
            value: "street",
            enable: false,
          },
          {
            filterLabel: "Zip",
            value: "zip",
            enable: true,
          },
          {
            filterLabel: "Zone",
            value: "zone",
            enable: false,
          },
        ],
      },
      in_app_reporting_options_config: [
        {
          slug: "action_items",
          id: "action_items",
          label: "Action Items",
        },
        {
          slug: "okr_execution",
          id: "okr_execution",
          label: "OKR Execution",
        },
        {
          slug: "okr_setup",
          id: "okr_setup",
          label: "OKR Setup",
        },
        {
          slug: "okr_change_logs",
          id: "okr_change_logs",
          label: "OKR Change Log",
        },
        {
          slug: "kpi_dashboard",
          id: "kpi_dashboard",
          label: "KPI Board",
        },
        {
          slug: "goals_export_custom",
          id: "goals_export_custom",
          label: "Full Goals Export",
        },
      ],
      objective_bulk_upload: {
        config: {
          howToPrepareCSV:
            "https://docs.xto10x.com/peoplecues/objectives/objectives-bulk-upload",
          moreDocumentation:
            "https://docs.xto10x.com/peoplecues/objectives/objectives-bulk-upload",
          videoLink:
            "https://drive.google.com/file/d/1mewTvf4heCDzj_QsqAcPNK9TccTF9L3_/view",
          templateUrl:
            "https://peoplecues-static.s3.ap-south-1.amazonaws.com/Bulk_upload_template_2 - Bulk_upload_template (7).csv",
        },
        enable: true,
        orgs: [],
      },
      custom_self_review_description: {
        "1f71ce46-9dcd-46e1-b596-7ef6558770df": {
          description:
            "Complete your monthly check-in. On completion, we will share your inputs with your manager. Once submitted, you will need to request your Manager to reopen your form to make any edits.",
        },
        enable: true,
      },
      review_rating_label: {
        enable: true,
        orgs: ["xto10x"],
      },
      autopopulate_email_jira_create_conn: {
        enable: true,
      },
      create_objective_new_flow: {
        enable: true,
        orgs: ["xto10x"],
      },
      show_objective_filters_in_setup_objective: {
        enable: true,
        orgs: ["501d834a-aeeb-4840-aa78-a8497371947c"],
      },
      add_kr_in_previous_quarter: {
        enable: true,
        orgs: ["xto10x", "935fddf9-edfa-4c7a-9e56-b27932315b16"],
      },
      show_feedback_tab: {
        enable: true,
        orgs: ["xto10x"],
      },
      survey_module_integration: {
        enable: true,
        orgs: ["xto10x"],
      },
      z_testing1: {
        enable: false,
      },
      custom_final_question_view_form: {
        "1f71ce46-9dcd-46e1-b596-7ef6558770df": {
          question:
            "Accomplishments/Impact created thus far in the performance cycle",
        },
        enable: true,
      },
      z_testing2: {
        enable: false,
      },
      select_objectives_v2: {
        enable: true,
        orgs: ["xto10x"],
      },
      z_testing3: {
        enable: false,
      },
      disable_non_admin_access_of_exports: {
        enable: true,
        orgs: [
          "xto10x",
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
          "094f3ab7-15c2-4b15-ba87-06da40abd259",
        ],
      },
      sheets_integration_status_card: {
        card_config: {
          allowUnlinking: false,
          statusDroppedError:
            "Automatic check-ins have stopped as the objective has been dropped.",
          dueDateError:
            "Automatic check-ins have stopped as the objective has passed the due date.",
          defaultErrorMessage:
            "There seems to be an error in the linked cell. Please rectify to have seamless updates.",
          showInfoIcon: true,
          ignoreErrorsContaining: "dropped,due date,achieved",
          showActualErrorMessage: true,
        },
      },
      jira_integration: {
        knowMoreLink:
          "https://xto10x.gitbook.io/getting-started-on-10xgoals/jira-integration",
      },
      training_needed_mandatory: {
        enable: true,
        orgs: [
          "1f71ce46-9dcd-46e1-b596-7ef6558770df",
          "501d834a-aeeb-4840-aa78-a8497371947c",
        ],
      },
      hrbp: {
        enable: true,
        orgs: [],
      },
      hris_integration: {
        enable: true,
        orgs: ["xto10x", "2a7f2ade-a759-441b-a206-512c1187fdcb"],
      },
      disable_rating_change: {
        enable: true,
        orgs: ["1f71ce46-9dcd-46e1-b596-7ef6558770df"],
      },
      show_review_beta_tag: {
        enable: false,
      },
      config_version: 157,
      level_filter: {
        tabs: ["0c5ac74d-394f-420f-8932-5d10a71d9a78"],
        levels: [
          {
            value: 0,
            enabled: true,
          },
          {
            value: 1,
            enabled: true,
          },
          {
            value: 2,
            enabled: true,
          },
          {
            value: 3,
            enabled: true,
            orgs: ["xto10x"],
          },
          {
            value: 4,
            enabled: true,
            orgs: ["xto10x"],
          },
        ],
        allowed_for_teams: false,
      },
      show_analytics_tab: {
        enable: true,
        orgs: [
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
          "501d834a-aeeb-4840-aa78-a8497371947c",
          "1f71ce46-9dcd-46e1-b596-7ef6558770df",
          "501d834a-aeeb-4840-aa78-a8497371947c",
        ],
      },
      custom_final_question: {
        "1f71ce46-9dcd-46e1-b596-7ef6558770df": {
          question:
            "Mention specific accomplishments/ impact created thus far in the Performance cycle",
        },
        enable: true,
        "71f40c6a-69fd-4b50-852a-f3538330eddb": {
          question:
            "Final Comments (Optional - please write 'NA' if there are no final comments)",
        },
        "f5aadf1b-19d5-4580-ad6a-56111a1c4517": {
          question: "Final Feedback(optional - Dummy text)",
        },
      },
      in_app_reporting: {
        enable: true,
        orgs: [
          "xto10x",
          "db13007f-36a8-4774-a0f1-24acdeb2f85d",
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
          "094f3ab7-15c2-4b15-ba87-06da40abd259",
        ],
      },
      taskboard: {
        enable: true,
        orgs: [],
      },
      call_all_mrx_api: {
        enable: true,
        orgs: ["xto10x"],
      },
      slack_integration: {
        knowMoreLink:
          "https://xto10x.gitbook.io/getting-started-on-10xgoals/slack-integration",
      },
      
      feedback_module_integration: {
        enable: true,
        orgs: [
          "xto10x",
          "372e7dc9-b346-4c56-855f-75024309660f",
          "29945f2e-b095-46af-88c3-f87a02cf7010",
          "71f40c6a-69fd-4b50-852a-f3538330eddb",
          "ba404a71-01cb-4ec0-8faf-2d2dda5e0cfb",
          "ba404a71-01cb-4ec0-8faf-2d2dda5e0cfa",
        ],
      },
    
    }]

export type ConfigData = (typeof data)[number]