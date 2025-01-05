---
title: Logs, logs everywhere
description: Limiting audits on Elastic Jobs control databases.
date: 2020-03-02
draft: false
tag: logging
duration: 2min
---

![Logs, logs everywhere](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Logs.jpg/1024px-Logs.jpg)

Our team recently migrated a large web application from On-Prem to Azure. This involved a complete redesign of our build and deployment pipeline, including the introduction of Azure Elastic Jobs (currently in preview) to deploy schema changes to our tenant databases.

To run the jobs, we use an Elastic Job Agent which involved hooking it up to a control database which manages the jobs, jobsteps and executions. As soon as we connected an agent to a control database we noticed that the audit logs for that database rapidly grew in size. We're talking ~24 entries *per second*. Which meant our blob storage was growing by 300MB/hr.

<img src="https://github.com/fordprefect480/owensym.es/raw/master/Web/src/assets/img/eja_audits.png" title="All day, every day." class="img-fluid" />

<img src="https://github.com/fordprefect480/owensym.es/raw/master/Web/src/assets/img/eja_audit_entry.png" title="Example of one of the audited commands." class="img-fluid" />

I found just one [mention of someone else online encountering the same thing](https://social.msdn.microsoft.com/Forums/en-US/3b081000-c9f5-4a1a-8b0b-fcb940e787a1/created-elastic-jobs-database-sql-database-audit-logs-exploded-why?forum=ssdsgetstarted) and the solution was never revealed :( So after a (lengthy) discussion with Azure Support, we established that:

* the amount of audits reflected the amount of activity occurring on the database
* the Elastic Job Agent was responsible for the activity (and that it was expected)
* it is not a bug
* we can reduce the amount of auditing by filtering out the commands that are audited through the use of a Database Auditing Policy. Use the following PowerShell command to filter out the 3 most common SQL commands performed by the agent:

```
PowerShell Set-AzSqlDatabaseAudit
    -ResourceGroupName <Resource Group>
    -ServerName <SQL Server>
    -DatabaseName <Database>
    -PredicateExpression "application_name = 'Microsoft Azure SQL Database elastic jobs - control' AND statement NOT LIKE '%sys.sp_cloud_connection_set_sds%' AND statement NOT LIKE '%with nonterminal_executions as (%' AND statement NOT LIKE '%root_job_execution_id%'"
    -BlobStorageTargetState Enabled
    -StorageAccountResourceId "/subscriptions/<Subscription Id>/resourceGroups/<Resource Group>/providers/Microsoft.Storage/storageAccounts/<Audit Storage Account>
```

Disclaimer: My predicate expression is awful. Given some more time I would've looked into how to escape special characters a bit better and made this more specific.

Anyway, I hope this helps someone out.
