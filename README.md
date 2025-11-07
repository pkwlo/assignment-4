# DevOps Assignment 4 - CI/CD Pipeline Demo

In this assignment I host my resume website on S3 with a static bucket and then set up a Code PipeLine to automate deployment with each commit. 

The architecture is as follows: 
![alt text](/public/image.png)

## Steps to Set Up the CodePipeline
### Requirements
1. GitHub repo with your resume website
### 1. Create S3 Bucket
- Create a new bucket and make sure to uncheck Block Public Access
- After bucket is created, in your repo, run:
```bash
npm install
npm run build
```
- Upload all contents of the `\out` folder into the S3 bucket
- In bucket properties, enable Static Website Hosting and set both Index Document and Error Document to `index.html`
- In bucket permissions add this bucket policy in order to allow access to the hosted site:
```bash
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::devops-assignment-4/*"
        }
    ]
}
```

### 2. Create a new Pipeline
- Create a new pipeline
- Step 1: Build custom pipeline
- Step 2: Enter your pipeline name and allow it to create a new service role
- Step 3: Source provider is GitHub (via OAuth) and connect to GitHub. 
    - Select your repo and branch (main)
- Step 4: Select other build providers (AWS CodeBuild). 
    - Create a Project
    - Allow it to create a new service role
    - Under Buildspec, choose use a buildspec file and type in the name of your buildspec.yml
    - Continue to CodePipeline
- Step 5: Skip test stage
- Step 6: Deploy provider is Amazon S3 and select your bucket
- Step 7: Review and Create
- It will automatically start the deploy process

## Troubleshooting
- If there are any errors in the build you can check the Cloudwatch Logs to identify what is going wrong or watch it build in real time by clicking on AWS CodeBuild in the Pipeline
![alt text](/public/image2.png)
![alt text](/public/image3.png)