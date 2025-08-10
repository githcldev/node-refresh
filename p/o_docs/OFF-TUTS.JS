
. devops + azure pipelines + data factory + databricks + python + spark + hdfs + OUTPUT_DEST {
	. Azure Data Factory {
P:\local\hcl-percipio\19-7-2025-a
	CR-AzureDataScientistAssociateAzureDataFactory
|   CR-DataEngineeringOnMicrosoftAzureDataFactory

P:\local\hcl-percipio\19-7-2025-b
	CR-AzureDataFundamentalsAzureDataIngestionProcessing
	CR-DataEngineeringOnMicrosoftAzureDataProcessMonitoring
	CR-AzureDataScientistAssociateAzureDataPlatformServices
	CR-AzureDataFundamentalsModernDataWarehousing
	CR-DataEngineeringOnMicrosoftAzureDataLakeStorage
		6-TransformingDataUsingApacheSpark
		7-TransformingDataUsingDataFactory
		9-StreamingDataToAzureDatabricks
		10-TransformingDataWithDatabricks
	
	}
	. Azure Databricks {

+---19-7-2025-b
|   +---CR-AzureDatabricksDataPipelines
		// all theory no practical
|   +---CR-DataEngineeringOnMicrosoftAzureDatabrickProcessing
		4-RunningAzureDatabricksWorkspaceJobs
			Edit cluster for spark config and other advance options
		5-QueryingSQLServer
			Query sql via spark jdbc_url
		7-CosmosDB
		8-ETL data
			spark.conf.set(access_token)
			spark read csv("wasbs://*@stor.blob.core.windows.net/abc.csv")
			-- trasform
			spark write csv("wasbs://*@*/out.csv")
		9-Perform Sentimental Analysis
			- create instance of az text analytics
			- using scala_notebook to interact with text_analytics service and covert it into final return value
			- trigger scala udf on spark df for each row and put output to new column
		10-Debug spark job vs HDInsight cluster
|   +---CR-DataEngineeringOnMicrosoftAzureDatabricks
		4-CapturingStreamDataUsingAzureEventHub
		6-WorkingWithAzureDatabricksWorkbooks
		8-WorkingWithAzureDatabricksJobs
			Job is scheduled or trigger run
				Scheduling notebook/spark/jar/py run
				Adding params
|   +---CR-HyperparameterTuningWithHyperoptOnDatabricks
|   +---CR-HyperparameterTuningWithRayTuneOnDatabricks
|   +---CR-DataScienceSolutionOnAzureDataSolutionOptimization
		3-DataPartitioningStrategies 
		6-AzureStreamAnalyticsOptimization
		10-AzureDatabricksOptimization
|   +---CR-DataEngineeringOnMicrosoftAzureDataLakeStorage

	}
	. devops regarding azure pipelines {
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS

	Done: LIN - AzureDevOps EngiExpert AZ-400 CertPrep : ***
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\AzureDevOps EngiExpert AZ-400 CertPrep
	Azure DevOps: Continuous Delivery with YAML Pipelines : ***
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\Azure-DevOps-Continuous-Delivery-with-YAML-Pipelines

. others {
	Developing CI/CD Solutions with Azure DevOps : *
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\Developing-CI_CD-Solutions-with-Azure-DevOps

	Continuous-Delivery-with-Azure-DevOps
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\Continuous-Delivery-with-Azure-DevOps
	Azure-for-DevOps-Implementing-Development-Processes
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\Azure-for-DevOps-Implementing-Development-Processes

	Integrating-Azure-DevOps-with-GitHub
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\Integrating-Azure-DevOps-with-GitHub

	Exam Tips AZ 400 Designing_Implementing Microsoft DevOps Solutions: n
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\Exam-Tips-AZ-400-Designing_Implementing-Microsoft-DevOps-Solutions
	Done: Learning-Azure-DevOps
P:\local\2-TECH-BACK\9-DEPLOY\41-AZURE\DEVOPS\Learning-Azure-DevOps
	Azure DevOps for Beginners
}

	}
	. ds {
DATA-SCIENCE	CORE		Data Science Foundations Data Engineering	2
	}
}
. spark {
	
}
. python + hdfs + OUTPUT_DEST {
	
}

. online portals {
	. py {
https://www.w3schools.com/python/default.asp
https://www.tutorialsteacher.com/python
https://www.tutorialspoint.com/python/python_interview_questions.htm
	}
}

