. explorative data analysis + data clean, wrangle, sanitize, visualize,  {
	EDA Exploratory Data Analysis - making pretty charts			
	Cleaning messy data and making chart is 80% of ml engineer work		
		Data Distributions
		Missing Data, blank values, invalid dates
		Outliers
		Correlation
		Patterns
		Data Types
		Data Visualization
		Data Quality
		Data Auditing
}
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

. databricks_spark vids {

	.youtube {
. Databricks {
https://www.youtube.com/@Databricks
	. dtbrk {}
	. pyspark {}
	. sql {}
}
. Databricks For Professionals{
https://www.youtube.com/@DatabricksPro
	. dtbrk {}
	. pyspark {}
	. sql {}
}
. Learning Journal {
https://www.youtube.com/@ScholarNest
	. dtbrk {}
	. pyspark {}
	. sql {}
}
. Ease With Data {
https://www.youtube.com/@easewithdata
	. dtbrk {}
	. pyspark {}
	. sql {}
}
. Tech With Yeshwanth {
https://www.youtube.com/@TechWithYeshwanth/videos
	. dtbrk {
Overview of Databricks Workspace Interface: Easy Guide to Get You Started
https://www.youtube.com/watch?v=eeVr_tOJ2DI
How to Create a Databricks Workspace with Unity Catalog in Under 10 Minutes? | Step by Step Demo
https://www.youtube.com/watch?v=jrEL7oqQfl8

Introduction to Databricks Lakehouse: Unifying Data Lakes and Data Warehouses | Lakehouse Paradigm
https://www.youtube.com/watch?v=rZhWG8HMLkU


Getting Started with Apache Spark on Databricks: Key Features & DBFS Explained
https://www.youtube.com/watch?v=kJe1NHbeXi8
How to Read Kafka Topics/Streams in Databricks (Spark Streaming)? | Hands-on Demo
https://www.youtube.com/watch?v=g6OHZSdyoAU

Databricks Compute Options Explained: All-Purpose, Job, Serverless & SQL Warehouses
https://www.youtube.com/watch?v=_cCGMBd0bgg
How to Create an All-Purpose (Ad-Hoc) Cluster in Databricks? Hands-on Guide | Databricks Tutorial
https://www.youtube.com/watch?v=CKYsJUjGla0
How to Create a Job Cluster in Databricks? When to use a Job Cluster? Databricks Hands-on Demo
https://www.youtube.com/watch?v=6-ubnSlvD0M

Databricks Architecture Explained in 5 Minutes! (Visual Guide for Beginners)
https://www.youtube.com/watch?v=JZanMXatZ8Y
Databricks Medallion Architecture Explained in 2 minutes!
https://www.youtube.com/watch?v=RjC8LnvZsIc

	}
	. pyspark {}
	. sql {}
}
. Vijay Gadhave {
https://www.youtube.com/@Vijay_Gadhave_007/playlists
	. dtbrk {}
	. pyspark {}
	. sql {}
}
. DataErudition {
https://www.youtube.com/@dataerudition/playlists
	. dtbrk {}
	. pyspark {}
	. sql {}
}
. Pathfinder Analytics {
https://www.youtube.com/@pathfinder-analytics/playlists
	. dtbrk {}
	. pyspark {}
	. sql {}
}





	}



}

. finance {

	. lyn-remain {

2-START	CAPITAL		Financing Your Business
5-MANAGE	21-FINANCE		Finance Essentials for Small Business
5-MANAGE	21-FINANCE		Finance Foundations
5-MANAGE	21-FINANCE		Finance Foundations for Solopreneurs
5-MANAGE	21-FINANCE		Finance for Non Financial Managers
5-MANAGE	21-FINANCE		Financial Basics Everyone Should Know
5-MANAGE	21-FINANCE		Business Financials Explained
5-MANAGE	21-FINANCE		Finance Strategies for Business Leaders
5-MANAGE	21-FINANCE		Finance Foundations Risk Management 

5-MANAGE	21-FINANCE		Financial Analysis Introduction to Business Performance Analysis
5-MANAGE	21-FINANCE		Protecting Profitability by Reducing Financial Risk
5-MANAGE	21-FINANCE		Running a Profitable Business Understanding Financial Ratios

5-MANAGE	21-FINANCE		Financial Analysis Making Business Projections
5-MANAGE	21-FINANCE		Forecasting Using Financial Statements
5-MANAGE	21-FINANCE		Financial Modeling Foundations
5-MANAGE	21-FINANCE		Financial Modeling and Forecasting Financial Statements
5-MANAGE	151-LEAN		Lean Technology Strategy Financial Management to Support Business Agility

5-MANAGE	21-FINANCE		Financial Accounting Foundations
5-MANAGE	21-FINANCE		Financial Accounting Part 1
5-MANAGE	21-FINANCE		Finance and Accounting Tips
5-MANAGE	21-FINANCE		Financial Record Keeping

5-MANAGE	21-FINANCE		Behavioral Finance Foundations
5-MANAGE	21-FINANCE		Corporate Finance Profitability in a Financial Downturn
5-MANAGE	21-FINANCE		Corporate Finance Foundations
5-MANAGE	21-FINANCE		Corporate Financial Statement Analysis

CLOUD	SECURITY		Cloud Security Considerations for the Financial Services Industry
DATA-SCIENCE	PROJECT		The Data Science of Economics, Banking, and Finance, with Barton Poulson
PYTHON	ML		Algorithmic Trading and Finance Models with Python, R, and Stata Essential Training

	}

}